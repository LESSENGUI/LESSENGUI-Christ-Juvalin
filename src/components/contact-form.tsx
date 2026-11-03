"use client";

import { useRef, useState, type FormEvent } from "react";

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");
  const [statusType, setStatusType] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const submissionInProgress = useRef(false);
  const idempotencyKey = useRef<string | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (submissionInProgress.current) {
      return;
    }

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = {
      name: String(formData.get("name") || ""),
      email: String(formData.get("email") || ""),
      subject: String(formData.get("subject") || ""),
      message: String(formData.get("message") || ""),
      website: String(formData.get("website") || ""),
    };

    submissionInProgress.current = true;
    setIsSubmitting(true);
    setStatusType("loading");
    setStatusMessage("Transmission de votre message en cours...");
    idempotencyKey.current ??= crypto.randomUUID();

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Idempotency-Key": idempotencyKey.current,
        },
        body: JSON.stringify(payload),
      });
      const result = (await response.json()) as {
        success?: boolean;
        confirmationSent?: boolean;
        error?: string;
      };

      if (!response.ok || !result.success) {
        setStatusType("error");
        setStatusMessage(
          result.error ||
            "Une erreur est survenue lors de la transmission de votre message. Veuillez réessayer ultérieurement.",
        );
        if (response.status < 500 && response.status !== 429) {
          idempotencyKey.current = null;
        }
        return;
      }

      form.reset();
      idempotencyKey.current = null;
      setStatusType("success");
      setStatusMessage(
        result.confirmationSent
          ? "Votre message a été transmis avec succès. Merci pour votre prise de contact. Je vous répondrai dans les meilleurs délais."
          : "Votre message a bien été transmis. L’e-mail de confirmation n’a pas pu être envoyé ; je vous répondrai dans les meilleurs délais.",
      );
    } catch {
      setStatusType("error");
      setStatusMessage(
        "Une erreur est survenue lors de la transmission de votre message. Veuillez réessayer ultérieurement.",
      );
    } finally {
      submissionInProgress.current = false;
      setIsSubmitting(false);
    }
  }

  return (
    <form
      className="contact-form"
      onSubmit={handleSubmit}
      aria-busy={isSubmitting}
    >
      <div className="contact-form-honeypot" aria-hidden="true">
        <label>
          Ne pas remplir
          <input
            autoComplete="off"
            name="website"
            tabIndex={-1}
          />
        </label>
      </div>
      <div className="form-row">
        <label>
          Votre nom
          <input autoComplete="name" name="name" required />
        </label>
        <label>
          Votre e-mail
          <input autoComplete="email" name="email" type="email" required />
        </label>
      </div>
      <label>
        Objet
        <input name="subject" required />
      </label>
      <label>
        Votre message
        <textarea name="message" rows={5} required />
      </label>
      <button
        className="button button-primary"
        type="submit"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <>
            <span className="contact-form-spinner" aria-hidden="true" />
            Transmission en cours...
          </>
        ) : (
          <>Envoyer le message <span aria-hidden="true">↗</span></>
        )}
      </button>
      <p
        className={`form-note contact-form-status contact-form-status--${statusType}`}
        role="status"
        aria-live="polite"
        aria-atomic="true"
      >
        {statusMessage || "Veuillez remplir les champs obligatoires pour envoyer votre demande."}
      </p>
    </form>
  );
}
