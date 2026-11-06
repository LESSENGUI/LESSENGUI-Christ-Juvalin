"use client";

import { useRef, useState } from "react";
import { getTrainingCertificateUrl, interests, skillCategories, trainings } from "@/lib/content";

type ProfileModalContent = {
  label: string;
  title: string;
  summary: string;
  points: string[];
  certificateUrl?: string;
};

export function ProfileHighlights() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [activeContent, setActiveContent] =
    useState<ProfileModalContent | null>(null);

  function openModal(content: ProfileModalContent) {
    setActiveContent(content);
    dialogRef.current?.showModal();
  }

  return (
    <>
      <section className="section profile-highlights-section">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">Mon profil</span>
            <h2>Des compétences qui se complètent</h2>
            <p>
              Explorez les domaines qui relient mon expérience technique, mes
              projets et mon engagement.
            </p>
          </div>
          <div className="profile-modal-grid">
            {skillCategories.map((category, index) => (
              <button
                className="profile-modal-card"
                key={category.title}
                type="button"
                onClick={() =>
                  openModal({
                    label: `Expertise · 0${index + 1}`,
                    title: category.title,
                    summary:
                      "Des compétences développées au fil de ma formation, de mes expériences et de mes engagements.",
                    points: category.skills,
                  })
                }
              >
                <span className="profile-modal-card-index">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <strong>{category.title}</strong>
                <span className="profile-modal-card-action">
                  Découvrir <span aria-hidden="true">↗</span>
                </span>
              </button>
            ))}
          </div>

          <div className="profile-content-block profile-interests-block">
            <h3>Ce qui m’anime</h3>
            <div className="profile-facts profile-interests">
              {interests.map((interest) => (
                <div key={interest}>
                  <strong>{interest}</strong>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        className="section experiences-section profile-training-section"
        aria-labelledby="profile-training-title"
      >
        <div className="container">
          <div className="section-heading profile-training-heading">
            <span className="eyebrow">Formations complémentaires</span>
            <h2 id="profile-training-title">Apprendre, puis transmettre</h2>
            <p>
              Des formations en projets, gouvernance, éducation, numérique et
              leadership, en complément de mon parcours technique.
            </p>
          </div>
          <div className="training-grid">
            {trainings.map((training) => (
              <button
                className="training-card profile-training-card"
                key={`${training.date}-${training.title}`}
                type="button"
                onClick={() =>
                  openModal({
                    label: training.date,
                    title: training.title,
                    summary: training.organization,
                    points: [],
                    certificateUrl: getTrainingCertificateUrl(training),
                  })
                }
              >
                <span>{training.date}</span>
                <strong>{training.title}</strong>
                <span className="profile-modal-card-action">
                  En savoir plus <span aria-hidden="true">↗</span>
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      <dialog
        className="profile-modal"
        ref={dialogRef}
        aria-labelledby="profile-modal-title"
        aria-describedby="profile-modal-summary"
        onClose={() => setActiveContent(null)}
        onClick={(event) => {
          if (event.target === event.currentTarget) {
            dialogRef.current?.close();
          }
        }}
      >
        {activeContent ? (
          <div className="profile-modal-content">
            <form method="dialog" className="profile-modal-close-form">
              <button
                className="profile-modal-close"
                type="submit"
                aria-label="Fermer la fenêtre"
              >
                ×
              </button>
            </form>
            <span className="eyebrow">{activeContent.label}</span>
            <h2 id="profile-modal-title">{activeContent.title}</h2>
            <p id="profile-modal-summary">{activeContent.summary}</p>
            {activeContent.points.length > 0 ? (
              <ul>
                {activeContent.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            ) : null}
            {activeContent.certificateUrl ? (
              <a
                className="button button-primary"
                href={activeContent.certificateUrl}
                target="_blank"
                rel="noreferrer"
              >
                Voir l’attestation <span aria-hidden="true">↗</span>
              </a>
            ) : null}
          </div>
        ) : null}
      </dialog>
    </>
  );
}
