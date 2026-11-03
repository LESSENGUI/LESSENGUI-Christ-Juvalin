import { CinematicHero } from "@/components/cinematic-hero";
import { createPageMetadata } from "@/lib/site-seo";

export const metadata = createPageMetadata({
  title: "Maintenance industrielle et innovation | Christ Juvalin LESSENGUI",
  description:
    "Maintenance industrielle, fiabilité technique et innovation au service des organisations et des communautés au Congo et en Afrique.",
  pathname: "/maintenance-industrielle-et-innovation",
});

export default function Page() {
  return (
    <main className="detail-shell">
      <CinematicHero
        eyebrow="Ingénierie · Industrie · Innovation"
        title="Maintenance industrielle"
        highlight="et innovation"
        description="Des solutions techniques pensées pour la fiabilité, la performance industrielle et la continuité des activités."
        portraitImage="/img/Lessengui%20img2.jpg"
        portraitAlt="Maintenance industrielle et innovation"
        links={[
          { label: "Découvrir les services", href: "/services" },
          { label: "Parler d’un projet", href: "/contact", variant: "outline" },
        ]}
      />

      <section className="container detail-content" id="about">
        <div className="detail-copy">
          <h2>Pourquoi la maintenance industrielle est stratégique</h2>
          <p>
            La maintenance industrielle permet d’assurer la disponibilité des équipements,
            le bon fonctionnement des lignes de production et la réduction des risques liés
            aux pannes et aux défaillances techniques.
          </p>
          <p>
            Dans un environnement économique en évolution, la performance opérationnelle ne se
            limite pas à la production : elle passe par la fiabilité, la prévention, la gestion
            des ressources et la continuité de service.
          </p>

          <h2>Une logique d’innovation</h2>
          <p>
            L’innovation dans le domaine industriel ne se réduit pas à la technologie. Elle
            repose aussi sur la compréhension des processus, la qualité des diagnostics, la
            planification des interventions et l’adaptation aux réalités locales.
          </p>

          <ul>
            <li>Diagnostic technique et analyse des causes racines.</li>
            <li>Maintenance préventive et corrective.</li>
            <li>Amélioration des performances opérationnelles.</li>
            <li>Innovation appliquée à la fiabilité des équipements.</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
