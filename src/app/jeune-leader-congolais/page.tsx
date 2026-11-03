import { CinematicHero } from "@/components/cinematic-hero";
import { createPageMetadata } from "@/lib/site-seo";

export const metadata = createPageMetadata({
  title: "Jeune leader congolais | Christ Juvalin LESSENGUI",
  description:
    "Découvrez le parcours de Christ Juvalin LESSENGUI en tant que jeune leader congolais, acteur du développement, de l’éducation et de l’innovation.",
  pathname: "/jeune-leader-congolais",
});

export default function Page() {
  return (
    <main className="detail-shell">
      <CinematicHero
        eyebrow="Leadership · Jeunesse · Développement"
        title="Jeune leader"
        highlight="congolais"
        description="Une vision de leadership ancrée dans l’action, la formation, l’engagement citoyen et le développement durable."
        portraitImage="/img/christ2.jpg"
        portraitAlt="Christ Juvalin LESSENGUI engagé dans une initiative de leadership"
        links={[
          { label: "Découvrir ses engagements", href: "/engagements" },
          { label: "Contactez-moi", href: "/contact", variant: "outline" },
        ]}
      />

      <section className="container detail-content" id="about">
        <div className="detail-copy">
          <h2>Leadership au service de la jeunesse</h2>
          <p>
            Christ Juvalin LESSENGUI s’inscrit dans une logique de leadership responsable au
            service des jeunes, des communautés et des institutions. Son engagement vise à
            encourager la participation citoyenne, le développement des compétences et
            l’émergence de talents capables de transformer leur environnement.
          </p>
          <p>
            À travers les initiatives associatives, les formations, la sensibilisation et le
            partage d’expériences, il contribue à faire évoluer les perceptions autour du
            rôle des jeunes dans le développement national et africain.
          </p>

          <h2>Axes d’impact</h2>
          <ul>
            <li>Formation et accompagnement des jeunes.</li>
            <li>Engagement communautaire et service public.</li>
            <li>Gouvernance, éducation et inclusion.</li>
            <li>Innovation sociale et transformation locale.</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
