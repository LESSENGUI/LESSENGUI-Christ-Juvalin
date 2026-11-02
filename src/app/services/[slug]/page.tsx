import { notFound } from "next/navigation";
import { CinematicHero } from "@/components/cinematic-hero";
import { serviceDetails } from "@/lib/content";

const serviceHeroLines: Record<string, string> = {
  "innovation-technologique": "L’innovation au service de l’impact.",
  "gestion-projets": "Piloter avec méthode. Transformer durablement.",
  "developpement-web-digital": "Le numérique au service des idées.",
  "formation-stem-robotique": "Former aujourd’hui. Révéler demain.",
  "maintenance-industrielle": "Fiabiliser l’industrie. Faire avancer l’avenir.",
  "leadership-gouvernance": "Rassembler les talents. Agir ensemble.",
};

const serviceHeroImages: Record<string, string> = {
  "innovation-technologique": "/img/christ1.jpg",
  "gestion-projets": "/img/Lessengui%20img1.jpg",
  "developpement-web-digital": "/assets/img/services.jpg",
  "formation-stem-robotique": "/img/christ2.jpg",
  "leadership-gouvernance": "/img/christ1.jpg",
};

export function generateStaticParams() {
  return serviceDetails.map((service) => ({ slug: service.slug }));
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = serviceDetails.find((entry) => entry.slug === slug);

  if (!service) {
    notFound();
  }

  return (
    <main className="detail-shell">
      <CinematicHero
        eyebrow={`Service · ${service.title}`}
        title={service.title}
        highlight={serviceHeroLines[service.slug]}
        description={service.summary}
        portraitImage={serviceHeroImages[service.slug] ?? "/img/Lessengui%20img2.jpg"}
        portraitAlt={`Illustration du service ${service.title}`}
        links={[
          { label: "Tous les services", href: "/services" },
          { label: "Parlons de votre projet", href: "/contact", variant: "outline" },
        ]}
      />

      <section className="container service-detail-content" id="about">
        <div className="service-detail-layout">
          <div className="detail-copy service-detail-overview">
            <span className="story-section-kicker">Comprendre le besoin · structurer l’action · viser l’impact</span>
            <h2>Présentation</h2>
            <p>{service.overview}</p>
          </div>

          <aside className="detail-side service-detail-aside">
            <h3>Repères</h3>
            <div className="detail-metrics">
              {service.metrics.map((metric, index) => (
                <div className="metric-card service-detail-metric" key={metric.label}>
                  <span>{metric.label}</span>
                  <strong>{metric.value}</strong>
                  <small>{String(index + 1).padStart(2, "0")}</small>
                </div>
              ))}
            </div>
          </aside>
        </div>

        <section className="service-detail-focus" aria-labelledby="service-focus-title">
          <div className="story-section-heading">
            <span className="story-section-kicker">Domaines d’intervention</span>
            <h2 id="service-focus-title">Axes de travail</h2>
            <p>Les points d’appui sont adaptés à la nature du besoin et au contexte du projet.</p>
          </div>
          <div className="service-detail-focus-grid">
            {service.focus.map((item, index) => (
              <article className="service-focus-card" key={item}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{item}</h3>
              </article>
            ))}
          </div>
        </section>

        <section className="service-detail-outcomes" aria-labelledby="service-outcomes-title">
          <div className="service-outcomes-heading">
            <span className="story-section-kicker">Finalité de l’accompagnement</span>
            <h2 id="service-outcomes-title">Résultats recherchés</h2>
          </div>
          <ul>
            {service.outcomes.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </section>

        <nav className="service-related-list" aria-label="Autres services">
          <div><span className="story-section-kicker">Explorer aussi</span><h2>Autres domaines d’intervention</h2></div>
          <div className="service-related-links">
            {serviceDetails.filter((item) => item.slug !== service.slug).slice(0, 3).map((item) => (
              <a href={`/services/${item.slug}`} key={item.slug}>{item.title}<span aria-hidden="true">↗</span></a>
            ))}
          </div>
        </nav>
      </section>
    </main>
  );
}
