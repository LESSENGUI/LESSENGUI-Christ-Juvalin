import { createHash } from "node:crypto";
import { Resend } from "resend";
import {
  createOwnerNotification,
  createVisitorConfirmation,
  type ContactMessage,
} from "@/lib/contact-email";

export const runtime = "nodejs";

const MAX_REQUEST_BYTES = 1024 * 1024;
const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000;
const RATE_LIMIT_MAX_REQUESTS = 5;
const IDEMPOTENCY_WINDOW_MS = 24 * 60 * 60 * 1000;
const MAX_TRACKED_CLIENTS = 5000;
const MAX_TRACKED_SUBMISSIONS = 10000;
const RESEND_SENDER = "onboarding@resend.dev";

type RateLimitEntry = { count: number; expiresAt: number };
type SubmissionResult = { success: true; confirmationSent: boolean };
type IdempotencyEntry = {
  fingerprint: string;
  expiresAt: number;
  result: Promise<SubmissionResult>;
};

const rateLimitEntries = new Map<string, RateLimitEntry>();
const idempotencyEntries = new Map<string, IdempotencyEntry>();

function jsonResponse(body: object, status = 200, headers?: HeadersInit) {
  return Response.json(body, { status, headers });
}

function isAllowedOrigin(request: Request) {
  const originValue = request.headers.get("origin");
  if (!originValue) {
    return false;
  }

  let origin: URL;
  try {
    origin = new URL(originValue);
  } catch {
    return false;
  }

  if (process.env.NODE_ENV !== "production") {
    return (
      origin.origin === new URL(request.url).origin ||
      (["localhost", "127.0.0.1"].includes(origin.hostname) &&
        ["http:", "https:"].includes(origin.protocol))
    );
  }

  const siteUrl =
    process.env.URL_DU_SITE?.trim() || process.env.SITE_URL?.trim();
  try {
    const allowedOrigins = new Set([
      new URL(siteUrl || "https://lessengui-christ-juvalin.vercel.app")
        .origin,
    ]);
    const vercelUrl = process.env.VERCEL_URL?.trim();
    if (vercelUrl) {
      allowedOrigins.add(new URL(`https://${vercelUrl}`).origin);
    }
    return allowedOrigins.has(origin.origin);
  } catch {
    return false;
  }
}

function getClientKey(request: Request) {
  return request.headers.get("x-real-ip")?.trim() || "unknown";
}

function checkRateLimit(clientKey: string) {
  const now = Date.now();
  for (const [key, entry] of rateLimitEntries) {
    if (entry.expiresAt <= now) {
      rateLimitEntries.delete(key);
    }
  }

  if (
    !rateLimitEntries.has(clientKey) &&
    rateLimitEntries.size >= MAX_TRACKED_CLIENTS
  ) {
    const oldestKey = rateLimitEntries.keys().next().value;
    if (oldestKey) {
      rateLimitEntries.delete(oldestKey);
    }
  }

  const entry = rateLimitEntries.get(clientKey);
  if (!entry || entry.expiresAt <= now) {
    rateLimitEntries.set(clientKey, {
      count: 1,
      expiresAt: now + RATE_LIMIT_WINDOW_MS,
    });
    return true;
  }

  if (entry.count >= RATE_LIMIT_MAX_REQUESTS) {
    return false;
  }

  entry.count += 1;
  return true;
}

async function readRequestBody(request: Request) {
  const contentLength = Number(request.headers.get("content-length"));
  if (Number.isFinite(contentLength) && contentLength > MAX_REQUEST_BYTES) {
    return null;
  }

  const reader = request.body?.getReader();
  if (!reader) {
    return null;
  }

  const chunks: Uint8Array[] = [];
  let totalBytes = 0;
  while (true) {
    const { done, value } = await reader.read();
    if (done) {
      break;
    }

    totalBytes += value.byteLength;
    if (totalBytes > MAX_REQUEST_BYTES) {
      await reader.cancel();
      return null;
    }
    chunks.push(value);
  }

  const body = new Uint8Array(totalBytes);
  let offset = 0;
  for (const chunk of chunks) {
    body.set(chunk, offset);
    offset += chunk.byteLength;
  }

  return new TextDecoder().decode(body);
}

function parseContactMessage(value: unknown) {
  if (!value || typeof value !== "object" || Array.isArray(value)) {
    return null;
  }

  const data = value as Record<string, unknown>;
  if (
    typeof data.name !== "string" ||
    typeof data.email !== "string" ||
    typeof data.subject !== "string" ||
    typeof data.message !== "string" ||
    (data.website !== undefined && typeof data.website !== "string")
  ) {
    return null;
  }

  if (data.website) {
    return { honeypot: true as const };
  }

  const message: ContactMessage = {
    name: data.name,
    email: data.email.trim(),
    subject: data.subject,
    message: data.message,
  };
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (
    !message.name.trim() ||
    !emailPattern.test(message.email) ||
    !message.subject.trim() ||
    !message.message.trim()
  ) {
    return null;
  }

  return { honeypot: false as const, message };
}

function getResendConfiguration() {
  const apiKey = process.env.RESEND_API_KEY?.trim();
  const recipient = process.env.CONTACT_EMAIL?.trim();

  if (!apiKey || !/^re_[A-Za-z0-9_]+$/.test(apiKey)) {
    return null;
  }
  if (!recipient || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(recipient)) {
    return null;
  }
  return { apiKey, from: RESEND_SENDER, recipient };
}

async function sendContactEmails(
  message: ContactMessage,
  idempotencyKey: string,
): Promise<SubmissionResult> {
  const configuration = getResendConfiguration();
  if (!configuration) {
    throw new Error("CONTACT_EMAIL_CONFIGURATION_INVALID");
  }

  const notification = createOwnerNotification(message);
  const confirmation = createVisitorConfirmation(message);
  const resend = new Resend(configuration.apiKey);

  const { data: notificationData, error: notificationError } =
    await resend.emails.send(
      {
        from: configuration.from,
        to: [configuration.recipient],
        replyTo: message.email,
        subject: notification.subject,
        text: notification.text,
        html: notification.html,
        headers: { "X-Contact-Submission-ID": idempotencyKey },
      },
      { idempotencyKey: `${idempotencyKey}-owner` },
    );

  if (notificationError || !notificationData?.id) {
    console.error("[contact] Owner notification failed", {
      code: notificationError?.name || "RESEND_ERROR",
      statusCode: notificationError?.statusCode,
    });
    throw new Error("CONTACT_NOTIFICATION_FAILED");
  }

  try {
    const { data: confirmationData, error: confirmationError } =
      await resend.emails.send(
        {
          from: configuration.from,
          to: [message.email],
          replyTo: configuration.recipient,
          subject: confirmation.subject,
          text: confirmation.text,
          html: confirmation.html,
          headers: { "X-Contact-Submission-ID": idempotencyKey },
        },
        { idempotencyKey: `${idempotencyKey}-visitor` },
      );

    if (confirmationError || !confirmationData?.id) {
      console.error("[contact] Visitor confirmation failed", {
        code: confirmationError?.name || "RESEND_ERROR",
        statusCode: confirmationError?.statusCode,
      });
      return { success: true, confirmationSent: false };
    }

    return { success: true, confirmationSent: true };
  } catch (error) {
    console.error("[contact] Visitor confirmation failed", {
      code: error instanceof Error ? error.name : "RESEND_ERROR",
    });
    return { success: true, confirmationSent: false };
  }
}

export async function POST(request: Request) {
  if (!isAllowedOrigin(request)) {
    return jsonResponse({ error: "Requête non autorisée." }, 403);
  }

  const contentType = request.headers
    .get("content-type")
    ?.split(";")[0]
    ?.trim()
    .toLowerCase();
  if (contentType !== "application/json") {
    return jsonResponse({ error: "Format de requête non pris en charge." }, 415);
  }

  let body: string | null;
  try {
    body = await readRequestBody(request);
  } catch {
    return jsonResponse({ error: "Impossible de lire la demande." }, 400);
  }
  if (body === null) {
    return jsonResponse(
      { error: "La demande est trop volumineuse (maximum technique : 1 Mio)." },
      413,
    );
  }

  let payload: unknown;
  try {
    payload = JSON.parse(body);
  } catch {
    return jsonResponse({ error: "Le contenu de la demande est invalide." }, 400);
  }

  const parsed = parseContactMessage(payload);
  if (parsed?.honeypot) {
    return jsonResponse({ success: true, confirmationSent: false });
  }
  if (!parsed) {
    return jsonResponse(
      { error: "Veuillez vérifier les champs obligatoires et l’adresse e-mail." },
      400,
    );
  }

  const idempotencyKey = request.headers.get("idempotency-key")?.trim();
  if (!idempotencyKey || !/^[A-Za-z0-9._:-]{1,128}$/.test(idempotencyKey)) {
    return jsonResponse({ error: "Identifiant de demande invalide." }, 400);
  }

  const now = Date.now();
  for (const [key, entry] of idempotencyEntries) {
    if (entry.expiresAt <= now) {
      idempotencyEntries.delete(key);
    }
  }

  const fingerprint = createHash("sha256")
    .update(JSON.stringify(parsed.message))
    .digest("hex");
  const previous = idempotencyEntries.get(idempotencyKey);
  if (previous) {
    if (previous.fingerprint !== fingerprint) {
      return jsonResponse(
        { error: "Cet identifiant a déjà été utilisé pour une autre demande." },
        409,
      );
    }
    try {
      return jsonResponse(await previous.result);
    } catch {
      return jsonResponse(
        { error: "Une erreur est survenue lors de la transmission de votre message. Veuillez réessayer ultérieurement." },
        502,
      );
    }
  }

  if (!checkRateLimit(getClientKey(request))) {
    return jsonResponse(
      { error: "Trop de tentatives. Veuillez réessayer dans quelques minutes." },
      429,
      { "Retry-After": String(RATE_LIMIT_WINDOW_MS / 1000) },
    );
  }

  if (idempotencyEntries.size >= MAX_TRACKED_SUBMISSIONS) {
    return jsonResponse(
      { error: "Le service est temporairement indisponible. Veuillez réessayer." },
      503,
    );
  }

  const resultPromise = sendContactEmails(parsed.message, idempotencyKey);
  idempotencyEntries.set(idempotencyKey, {
    fingerprint,
    expiresAt: now + IDEMPOTENCY_WINDOW_MS,
    result: resultPromise,
  });

  try {
    return jsonResponse(await resultPromise);
  } catch (error) {
    idempotencyEntries.delete(idempotencyKey);
    if (error instanceof Error && error.message === "CONTACT_EMAIL_CONFIGURATION_INVALID") {
      return jsonResponse(
        { error: "Le service d’envoi n’est pas correctement configuré. Veuillez réessayer ultérieurement." },
        503,
      );
    }
    console.error("[contact] Submission failed", {
      code: error instanceof Error ? error.name : "RESEND_ERROR",
    });
    return jsonResponse(
      { error: "Une erreur est survenue lors de la transmission de votre message. Veuillez réessayer ultérieurement." },
      502,
    );
  }
}
