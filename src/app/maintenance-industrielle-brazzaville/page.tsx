import { CinematicHero } from "@/components/cinematic-hero";
import { createPageMetadata } from "@/lib/site-seo";

export const metadata = createPageMetadata({
  title: "Maintenance industrielle à Brazzaville | Christ Juvalin LESSENGUI",
  description:
    "Maintenance industrielle, mécanique, fiabilité des équipements et innovation technique à Brazzaville, République du Congo."
  ,
  pathname: "/maintenance-industrielle-brazzaville",
});

export default function Page() {
  return (
    <main className="detail-shell">
      <CinematicHero
        eyebrow="Ingénierie · Industrie · Fiabilité"
        title="Maintenance industrielle"
        highlight="à Brazzaville"
        description="Des compétences techniques orientées vers la fiabilité, la performance des équipements et la qualité des processus industriels."
        portraitImage="/img/Lessengui%20img2.jpg"
        portraitAlt="Christ Juvalin LESSENGUI dans un environnement technique"
        links={[
          { label: "Découvrir ses services", href: "/services" },
          { label: "Parler d’un projet", href: "/contact", variant: "outline" },
        ]}
      />

      <section className="container detail-content" id="about">
        <div className="detail-copy">
          <h2>Maintenance industrielle et supervision technique</h2>
          <p>
            La maintenance industrielle constitue un axe central de l’expertise technique de
            Christ Juvalin LESSENGUI. Elle permet de sécuriser les équipements, améliorer la
            disponibilité des lignes de production et réduire les risques de panne ou de
            défaillance.
          </p>
          <p>
            Ce travail repose sur une approche structurée : diagnostic, analyse des causes
            racines, planification des interventions, suivi de la fiabilité et amélioration des
            performances des installations. L’objectif est de créer de la stabilité et de la
            continuité dans des environnements techniques exigeants.
          </p>

          <h2>Pourquoi c’est important au Congo</h2>
          <p>
            Dans un contexte où l’industrie, la logistique et les infrastructures évoluent
            rapidement, la maintenance industrielle est essentielle pour renforcer la productivité,
            la sécurité et la durabilité des performances opérationnelles.
          </p>

          <ul>
            <li>Diagnostique technique et analyse des dysfonctionnements.</li>
            <li>Maintenance préventive, corrective et de suivi.</li>
            <li>Amélioration des performances industrielles.</li>
            <li>Fiabilité des équipements et organisation de la maintenance.</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
