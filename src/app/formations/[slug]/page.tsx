import Link from "next/link";
import { notFound } from "next/navigation";
import { TrainingCertificate, TrainingOrganizationLogo } from "@/components/training-library";
import { trainingCategories, trainings } from "@/lib/content";
import { createPageMetadata } from "@/lib/site-seo";

export function generateStaticParams() {
  return trainings.map((training) => ({ slug: training.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const training = trainings.find((item) => item.slug === slug);

  if (!training) {
    notFound();
  }

  return createPageMetadata({
    title: `${training.title} | Formation`,
    description: training.summary,
    pathname: `/formations/${training.slug}`,
  });
}

export default async function TrainingDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const training = trainings.find((item) => item.slug === slug);

  if (!training) {
    notFound();
  }

  const category = trainingCategories.find((item) => item.slug === training.category);

  if (!category) {
    notFound();
  }

  return (
    <main className="training-detail-page">
      <section className="section training-detail-hero">
        <div className="container">
          <Link className="training-back-link" href="/formations">
            <span aria-hidden="true">←</span> Toutes les formations
          </Link>
          <div className="training-detail-title">
            <TrainingOrganizationLogo training={training} large />
            <div>
              <span className="eyebrow">{category.title}</span>
              <h1>{training.title}</h1>
              <p>{training.summary}</p>
              <span className="training-detail-organization">{training.organization}</span>
            </div>
          </div>
          <dl className="training-detail-facts">
            <div>
              <dt>Organisme</dt>
              <dd>{training.organization}</dd>
            </div>
            <div>
              <dt>Date</dt>
              <dd>{training.date}</dd>
            </div>
            {training.duration ? (
              <div>
                <dt>Durée</dt>
                <dd>{training.duration}</dd>
              </div>
            ) : null}
            <div>
              <dt>Statut</dt>
              <dd>{training.status}</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="section training-detail-content">
        <div className="container training-detail-layout">
          <div className="training-detail-main">
            <section className="training-detail-section">
              <div className="training-detail-section-heading">
                <span className="eyebrow">À propos</span>
                <h2>Présentation de la formation</h2>
              </div>
              <p>{training.description}</p>
            </section>
            <section className="training-detail-section">
              <div className="training-detail-section-heading">
                <span className="eyebrow">Finalité</span>
                <h2>Objectifs pédagogiques</h2>
              </div>
              <ul className="training-detail-list">
                {training.objectives.map((objective) => <li key={objective}>{objective}</li>)}
              </ul>
            </section>
            <section className="training-detail-section">
              <div className="training-detail-section-heading">
                <span className="eyebrow">Acquis</span>
                <h2>Compétences et connaissances</h2>
              </div>
              <ul className="training-detail-list">
                {training.skills.map((skill) => <li key={skill}>{skill}</li>)}
              </ul>
            </section>
            {training.technologies?.length ? (
              <section className="training-detail-section">
                <div className="training-detail-section-heading">
                  <span className="eyebrow">Pratique</span>
                  <h2>Technologies et outils</h2>
                </div>
                <ul className="training-technology-list">
                  {training.technologies.map((technology) => <li key={technology}>{technology}</li>)}
                </ul>
              </section>
            ) : null}
          </div>
          <aside className="training-detail-aside">
            <div className="training-organization-panel">
              <span className="eyebrow">Organisme formateur</span>
              <TrainingOrganizationLogo training={training} large />
              <h2>{training.organization}</h2>
              <p>{training.status}</p>
            </div>
            {training.certificate ? (
              <p className="training-certificate-note">
                Le document affiché est le certificat ou l’attestation fourni pour cette formation.
              </p>
            ) : (
              <p className="training-certificate-note">
                Aucun certificat n’est disponible dans les fichiers fournis pour cette formation.
              </p>
            )}
          </aside>
        </div>
        <div className="container">
          <TrainingCertificate training={training} />
          <Link className="training-back-link training-back-link-bottom" href="/formations">
            <span aria-hidden="true">←</span> Revenir à toutes les formations
          </Link>
        </div>
      </section>
    </main>
  );
}
