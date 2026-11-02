"use client";

import type { FormEvent } from "react";

export function ContactForm() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const subject = String(formData.get("subject") || "Prise de contact depuis le portfolio");
    const message = [
      `Nom : ${formData.get("name") || ""}`,
      `Adresse e-mail : ${formData.get("email") || ""}`,
      "",
      String(formData.get("message") || ""),
    ].join("\n");

    window.location.href = `mailto:juvalinlessengui@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
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
      <button className="button button-primary" type="submit">
        Préparer un e-mail <span aria-hidden="true">↗</span>
      </button>
      <p className="form-note">
        Votre application de messagerie s’ouvrira avec le message prérempli.
      </p>
    </form>
  );
}
