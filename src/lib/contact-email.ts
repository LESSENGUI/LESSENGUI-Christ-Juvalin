import { SITE_NAME, SITE_URL } from "@/lib/site-seo";
import { socialLinks } from "@/lib/social-links";

export type ContactMessage = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type ContactSocialLink = {
  name: string;
  label: string;
  icon: string;
  url: string;
};

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function configuredUrl(value: string, key: string) {
  let url: URL;
  try {
    url = new URL(value);
  } catch {
    throw new Error(`Invalid URL configured for ${key}`);
  }

  if (url.protocol !== "https:") {
    throw new Error(`Invalid URL protocol configured for ${key}`);
  }

  return url.toString();
}

function getSocialLinks(): ContactSocialLink[] {
  const configuredSiteUrl =
    process.env.URL_DU_SITE?.trim() ||
    process.env.SITE_URL?.trim() ||
    SITE_URL;
  const siteUrl = configuredUrl(configuredSiteUrl, "URL_DU_SITE");
  const siteProfiles: Record<string, string> = {
    Facebook: "FACEBOOK_URL",
    LinkedIn: "LINKEDIN_URL",
    X: "X_URL",
    WhatsApp: "WHATSAPP_URL",
    TikTok: "TIKTOK_URL",
  };
  const icons: Record<string, string> = {
    Facebook: "f",
    LinkedIn: "in",
    X: "X",
    WhatsApp: "WA",
    Instagram: "IG",
    YouTube: "▶",
  };
  const links: ContactSocialLink[] = socialLinks
    .filter((social) =>
      ["Facebook", "LinkedIn", "X", "WhatsApp", "TikTok"].includes(
        social.name,
      ),
    )
    .map((social) => {
      const envKey = siteProfiles[social.name];
      const url = envKey
        ? process.env[envKey]?.trim() || social.href
        : social.href;
      return {
        name: social.name,
        label: social.name,
        icon: icons[social.name],
        url: configuredUrl(url, envKey || social.name),
      };
    });

  for (const [name, envKey] of [
    ["Instagram", "INSTAGRAM_URL"],
    ["YouTube", "YOUTUBE_URL"],
  ]) {
    const url = process.env[envKey]?.trim();
    if (url) {
      links.push({
        name,
        label: name,
        icon: icons[name],
        url: configuredUrl(url, envKey),
      });
    }
  }

  return links;
}

function emailFrame(content: string) {
  return `<!doctype html>
<html lang="fr">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>${escapeHtml(SITE_NAME)}</title>
  </head>
  <body style="margin:0;padding:24px 12px;background:#f3f7f4;color:#263b30;font-family:Arial,Helvetica,sans-serif;">
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="max-width:640px;margin:0 auto;background:#ffffff;border:1px solid #e1ebe4;border-radius:12px;">
      <tr>
        <td style="padding:28px 30px 12px;color:#078c54;font-size:12px;font-weight:bold;letter-spacing:1px;">${escapeHtml(SITE_NAME)}</td>
      </tr>
      <tr>
        <td style="padding:8px 30px 30px;font-size:14px;line-height:1.7;">${content}</td>
      </tr>
    </table>
    <p style="max-width:640px;margin:14px auto 0;color:#6b7b71;font-size:11px;line-height:1.6;text-align:center;">Ingénierie au service de l’humain.</p>
  </body>
</html>`;
}

export function createOwnerNotification(message: ContactMessage) {
  const receivedAt = new Intl.DateTimeFormat("fr-FR", {
    dateStyle: "long",
    timeStyle: "short",
    timeZone: "Africa/Brazzaville",
  }).format(new Date());
  const subject = `[NOUVEAU MESSAGE DU SITE] — ${message.name.replace(/[\r\n]+/g, " ")} — ${message.subject.replace(/[\r\n]+/g, " ")}`;
  const messageHtml = escapeHtml(message.message).replace(/\r\n|\r|\n/g, "<br>");
  const html = emailFrame(`
    <h1 style="margin:0 0 12px;color:#173b2a;font-size:22px;line-height:1.3;">Nouvelle demande de contact</h1>
    <p style="margin:0 0 22px;color:#53665b;">Une nouvelle personne a envoyé un message depuis le formulaire de contact du site.</p>
    <h2 style="margin:24px 0 10px;color:#078c54;font-size:14px;">Informations du visiteur</h2>
    <table role="presentation" width="100%" cellspacing="0" cellpadding="7" border="0" style="border-collapse:collapse;font-size:13px;">
      <tr><td style="width:145px;color:#64746c;"><strong>Nom</strong></td><td>${escapeHtml(message.name)}</td></tr>
      <tr><td style="color:#64746c;"><strong>Adresse e-mail</strong></td><td><a href="mailto:${escapeHtml(message.email)}" style="color:#078c54;">${escapeHtml(message.email)}</a></td></tr>
      <tr><td style="color:#64746c;"><strong>Objet</strong></td><td>${escapeHtml(message.subject)}</td></tr>
    </table>
    <h2 style="margin:24px 0 10px;color:#078c54;font-size:14px;">Message intégral</h2>
    <div style="padding:16px;border:1px solid #e1ebe4;border-radius:8px;background:#f8fbf9;overflow-wrap:anywhere;">${messageHtml}</div>
    <h2 style="margin:24px 0 10px;color:#078c54;font-size:14px;">Informations techniques</h2>
    <p style="margin:0;color:#53665b;">Reçu le ${escapeHtml(receivedAt)} (heure de Brazzaville)<br>Origine : formulaire de contact du site web</p>
  `);
  const text = [
    "NOUVELLE DEMANDE DE CONTACT",
    "",
    "INFORMATIONS DU VISITEUR",
    `Nom : ${message.name}`,
    `Adresse e-mail : ${message.email}`,
    `Objet : ${message.subject}`,
    "",
    "MESSAGE INTÉGRAL",
    message.message,
    "",
    "INFORMATIONS TECHNIQUES",
    `Reçu le ${receivedAt} (heure de Brazzaville)`,
    "Origine : formulaire de contact du site web",
  ].join("\n");

  return { subject, html, text };
}

export function createVisitorConfirmation(message: ContactMessage) {
  const links = getSocialLinks();
  const greeting = message.name.trim()
    ? `Bonjour ${message.name},`
    : "Bonjour,";
  const htmlSocialLinks = links
    .map(
      (link) =>
        `<a href="${escapeHtml(link.url)}" style="display:inline-block;margin:4px 6px 4px 0;padding:8px 10px;border:1px solid #dfe9e3;border-radius:6px;color:#176b43;text-decoration:none;font-size:12px;"><strong style="color:#078c54;">${escapeHtml(link.icon)}</strong>&nbsp; ${escapeHtml(link.label)}</a>`,
    )
    .join("");
  const textSocialLinks = links
    .map((link) => `${link.label} : ${link.url}`)
    .join("\n");
  const subjectHtml = escapeHtml(message.subject);
  const siteUrl = configuredUrl(
    process.env.URL_DU_SITE?.trim() ||
      process.env.SITE_URL?.trim() ||
      SITE_URL,
    "URL_DU_SITE",
  );
  const html = emailFrame(`
    <h1 style="margin:0 0 20px;color:#173b2a;font-size:22px;line-height:1.3;">Confirmation de réception</h1>
    <p style="margin:0 0 16px;">${escapeHtml(greeting)}</p>
    <p style="margin:0 0 14px;color:#53665b;font-size:13px;">Objet de votre demande : <strong>${subjectHtml}</strong></p>
    <p style="margin:0 0 14px;">Je vous remercie sincèrement pour l’intérêt que vous portez à mon profil et pour votre prise de contact à travers mon site web professionnel.</p>
    <p style="margin:0 0 14px;">Je vous confirme par la présente que votre message a bien été réceptionné.</p>
    <p style="margin:0 0 14px;">Votre demande fera l’objet d’une attention particulière et je prendrai le soin de vous apporter une réponse dans les meilleurs délais.</p>
    <p style="margin:0 0 14px;">Je reste disponible pour tout complément d’information ou toute précision supplémentaire concernant votre demande.</p>
    <p style="margin:0 0 22px;">Je vous remercie encore pour votre confiance et l’intérêt accordé à mon parcours, à mes activités et à mes engagements.</p>
    <p style="margin:0 0 3px;">Bien cordialement,</p>
    <p style="margin:0;color:#173b2a;font-weight:bold;">Christ Juvalin LESSENGUI</p>
    <p style="margin:0 0 22px;color:#53665b;font-size:12px;">Ingénieur en devenir | Maintenance industrielle | Leadership et engagement pour le développement.<br><em>Ingénierie au service de l’humain.</em></p>
    <h2 style="margin:24px 0 8px;color:#078c54;font-size:14px;">Restons en contact</h2>
    <p style="margin:0 0 12px;color:#53665b;font-size:13px;">Pour échanger davantage, suivre mes activités, découvrir mes projets ou me joindre directement, vous pouvez également me retrouver sur mes différents réseaux sociaux.</p>
    <div>${htmlSocialLinks}</div>
    <h2 style="margin:24px 0 8px;color:#078c54;font-size:14px;">Besoin d’un contact rapide ?</h2>
    <p style="margin:0 0 12px;color:#53665b;font-size:13px;">Si votre demande présente un caractère urgent ou nécessite un échange direct, vous pouvez également me contacter à travers mes différents réseaux sociaux ou via WhatsApp, selon les coordonnées disponibles ci-dessus.</p>
    <p style="margin:0;"><a href="${escapeHtml(siteUrl)}" style="color:#078c54;">${escapeHtml(SITE_NAME)}</a></p>
  `);
  const text = [
    greeting,
    "",
    `Objet de votre demande : ${message.subject}`,
    "",
    "Je vous remercie sincèrement pour l’intérêt que vous portez à mon profil et pour votre prise de contact à travers mon site web professionnel.",
    "",
    "Je vous confirme par la présente que votre message a bien été réceptionné.",
    "",
    "Votre demande fera l’objet d’une attention particulière et je prendrai le soin de vous apporter une réponse dans les meilleurs délais.",
    "",
    "Je reste disponible pour tout complément d’information ou toute précision supplémentaire concernant votre demande.",
    "",
    "Je vous remercie encore pour votre confiance et l’intérêt accordé à mon parcours, à mes activités et à mes engagements.",
    "",
    "Bien cordialement,",
    "Christ Juvalin LESSENGUI",
    "Ingénieur en devenir | Maintenance industrielle | Leadership et engagement pour le développement.",
    "Ingénierie au service de l’humain.",
    "",
    "RESTONS EN CONTACT",
    "Pour échanger davantage, suivre mes activités, découvrir mes projets ou me joindre directement, vous pouvez également me retrouver sur mes différents réseaux sociaux.",
    textSocialLinks,
    "",
    "BESOIN D’UN CONTACT RAPIDE ?",
    "Si votre demande présente un caractère urgent ou nécessite un échange direct, vous pouvez également me contacter à travers mes différents réseaux sociaux ou via WhatsApp, selon les coordonnées disponibles ci-dessus.",
    "",
    siteUrl,
  ].join("\n");

  return {
    subject: "Confirmation de réception de votre message — Christ Juvalin LESSENGUI",
    html,
    text,
  };
}
