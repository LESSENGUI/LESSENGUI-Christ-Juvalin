import { CinematicHero } from "@/components/cinematic-hero";
import { createPageMetadata } from "@/lib/site-seo";

export const metadata = createPageMetadata({
  title: "Leadership et développement en Afrique | Christ Juvalin LESSENGUI",
  description:
    "Leadership, jeunesse, développement durable et innovation en Afrique centrale avec Christ Juvalin LESSENGUI.",
  pathname: "/leadership-et-developpement-afrique",
});

export default function Page() {
  return (
    <main className="detail-shell">
      <CinematicHero
        eyebrow="Leadership · Développement · Afrique"
        title="Leadership et"
        highlight="développement"
        description="Un leadership orienté vers l’engagement, les compétences, l’action collective et le développement durable."
        portraitImage="/img/christ2.jpg"
        portraitAlt="Leadership et développement en Afrique"
        links={[
          { label: "Voir les engagements", href: "/engagements" },
          { label: "Contact", href: "/contact", variant: "outline" },
        ]}
      />

      <section className="container detail-content" id="about">
        <div className="detail-copy">
          <h2>Leadership, jeunes et transformation collective</h2>
          <p>
            Le leadership utile ne se limite pas à la gestion de postes ou d’institutions. Il
            consiste à mobiliser les compétences, encourager l’action, soutenir les talents et
            faire avancer des projets à impact réel pour les personnes et les communautés.
          </p>
          <p>
            En Afrique, la jeunesse représente un potentiel majeur pour la transformation sociale,
            économique et technologique. En valorisant l’éducation, l’innovation, la pensée
            collective et la responsabilité citoyenne, on construit des sociétés plus fortes et
            plus résilientes.
          </p>

          <ul>
            <li>Leadership responsable et engagement citoyen.</li>
            <li>Jeunesse, éducation et préparation au futur.</li>
            <li>Innovation sociale et développement durable.</li>
            <li>Participation active à la transformation africaine.</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
