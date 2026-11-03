import { CinematicHero } from "@/components/cinematic-hero";
import { createPageMetadata } from "@/lib/site-seo";

export const metadata = createPageMetadata({
  title: "Qui est Christ Juvalin LESSENGUI ?",
  description:
    "Découvrez qui est Christ Juvalin LESSENGUI, technicien supérieur en maintenance industrielle, électromécanicien, jeune leader et acteur du développement au Congo et en Afrique.",
  pathname: "/qui-est-christ-juvalin-lessengui",
});

export default function Page() {
  return (
    <main className="detail-shell">
      <CinematicHero
        eyebrow="Identité · Professionnel & leader"
        title="Qui est"
        highlight="Christ Juvalin LESSENGUI ?"
        description="Technicien supérieur en maintenance industrielle, leader de la jeunesse, acteur du développement et promoteur de l’innovation au Congo."
        portraitImage="/img/christ1.jpg"
        portraitAlt="Portrait de Christ Juvalin LESSENGUI"
        links={[
          { label: "Voir le parcours", href: "/parcours" },
          { label: "Contactez-moi", href: "/contact", variant: "outline" },
        ]}
      />

      <section className="container detail-content" id="about">
        <div className="detail-copy">
          <h2>Biographie</h2>
          <p>
            Christ Juvalin LESSENGUI est un technicien supérieur congolais en maintenance
            industrielle et électromécanicien, engagé dans l’innovation numérique et le
            développement des jeunes.
            Sa trajectoire s’inscrit dans une logique d’action concrète : renforcer les
            compétences, accompagner les projets et participer au développement durable au
            Congo et en Afrique.
          </p>
          <p>
            Fort d’un parcours de formation scientifique et technique, il s’intéresse à la
            compréhension des défis industriels, à la gestion de projets et à la mise en
            place de solutions utiles pour les entreprises, les institutions et les
            communautés.
          </p>
          <p>
            Son engagement dépasse le cadre technique. Il participe à des initiatives de
            leadership, de formation STEM, d’éducation et d’inclusion, avec l’ambition de
            contribuer à une Afrique plus compétente, plus innovante et plus solidaire.
          </p>

          <h2>Axes de sa contribution</h2>
          <ul>
            <li>Maintenance industrielle et optimisation des performances techniques.</li>
            <li>Gestion de projets et suivi de solutions concrètes.</li>
            <li>Leadership et engagement des jeunes en Afrique centrale.</li>
            <li>Innovation, numérique et formation STEM.</li>
            <li>Développement durable, gouvernance et citoyenneté.</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
