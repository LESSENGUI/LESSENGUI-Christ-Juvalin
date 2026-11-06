import Image from "next/image";
import Link from "next/link";
import { getTrainingCertificateUrl, trainingCategories, trainings, type Training } from "@/lib/content";

export function TrainingOrganizationLogo({
  training,
  large = false,
}: {
  training: Training;
  large?: boolean;
}) {
  return (
    <span
      className={`training-organization-logo${large ? " training-organization-logo-large" : ""}${training.logo ? "" : " training-organization-logo-fallback"}`}
      aria-label={training.logo ? `Logo de ${training.organization}` : `Logo non fourni pour ${training.organization}`}
      title={training.organization}
    >
      {training.logo ? (
        <Image
          src={training.logo}
          alt={`Logo de ${training.organization}`}
          width={large ? 88 : 60}
          height={large ? 88 : 60}
        />
      ) : (
        <span aria-hidden="true">{training.organizationMark}</span>
      )}
    </span>
  );
}

function TrainingCard({ training }: { training: Training }) {
  return (
    <article className="training-library-card">
      <div className="training-library-card-organization">
        <TrainingOrganizationLogo training={training} />
        <span>{training.organization}</span>
      </div>
      <h4>{training.title}</h4>
      <p>{training.summary}</p>
      <Link className="training-library-card-link" href={`/formations/${training.slug}`}>
        Voir les détails <span aria-hidden="true">→</span>
      </Link>
    </article>
  );
}

export function TrainingLibraryGroups({
  limitPerCategory,
  showAllLinks = false,
}: {
  limitPerCategory?: number;
  showAllLinks?: boolean;
}) {
  const groups = trainingCategories
    .map((category) => ({
      category,
      items: trainings
        .filter((training) => training.category === category.slug)
        .slice(0, limitPerCategory),
      total: trainings.filter((training) => training.category === category.slug).length,
    }))
    .filter((group) => group.items.length > 0);

  return (
    <div className="training-library-groups">
      {groups.map(({ category, items, total }) => (
        <section className="training-domain-group" id={category.slug} key={category.slug}>
          <div className="training-domain-heading">
            <div>
              <span className="eyebrow">Domaine de compétence</span>
              <h3>{category.title}</h3>
              <p>{category.description}</p>
            </div>
            <span className="training-domain-count">
              {limitPerCategory
                ? `${total} formation${total > 1 ? "s" : ""}`
                : `${items.length} formation${items.length > 1 ? "s" : ""}`}
            </span>
          </div>
          <div className="training-library-grid">
            {items.map((training) => <TrainingCard key={training.slug} training={training} />)}
          </div>
          {showAllLinks ? (
            <Link
              className="training-domain-more"
              href={`/formations#${category.slug}`}
            >
              Voir toutes les formations de cette rubrique
              <span aria-hidden="true">→</span>
            </Link>
          ) : null}
        </section>
      ))}
    </div>
  );
}

export function TrainingCertificate({ training }: { training: Training }) {
  const certificateUrl = getTrainingCertificateUrl(training);

  if (!certificateUrl) {
    return null;
  }

  const isImage = /\.(?:png|jpe?g|webp)$/i.test(certificateUrl);

  return (
    <section className="training-certificate-section" aria-labelledby="training-certificate-title">
      <div className="training-detail-section-heading">
        <span className="eyebrow">Document justificatif</span>
        <h2 id="training-certificate-title">Certificat ou attestation</h2>
      </div>
      <div className={`training-certificate-preview${isImage ? " training-certificate-preview-image" : ""}`}>
        {isImage ? (
          <Image
            src={certificateUrl}
            alt={`Certificat de la formation ${training.title}`}
            width={1400}
            height={1000}
            sizes="(max-width: 760px) 100vw, 760px"
          />
        ) : (
          <iframe
            src={certificateUrl}
            title={`Aperçu du certificat : ${training.title}`}
            loading="lazy"
          />
        )}
      </div>
      <div className="training-certificate-actions">
        <a className="button button-primary" href={certificateUrl} target="_blank" rel="noopener noreferrer">
          Consulter le certificat <span aria-hidden="true">↗</span>
        </a>
        <a className="button button-outline" href={certificateUrl} download>
          Télécharger le certificat <span aria-hidden="true">↓</span>
        </a>
      </div>
    </section>
  );
}
