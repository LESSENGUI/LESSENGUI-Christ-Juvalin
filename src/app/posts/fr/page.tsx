import { CinematicHero } from "@/components/cinematic-hero";
import { createPageMetadata } from "@/lib/site-seo";

export const metadata = createPageMetadata({
  title: "Posts SEO 12 semaines | Christ Juvalin LESSENGUI",
  description:
    "Plan hebdomadaire de publications SEO et réseaux sociaux pour Christ Juvalin LESSENGUI sur 12 semaines.",
  pathname: "/posts/fr",
});

export default function Page() {
  return (
    <main className="detail-shell">
      <CinematicHero
        eyebrow="SEO · Réseaux sociaux · Accroissement de visibilité"
        title="Plan de publication"
        highlight="12 semaines"
        description="Un calendrier éditorial orienté vers la visibilité, la notoriété et la cohérence de la marque Christ Juvalin LESSENGUI."
        portraitImage="/img/christ1.jpg"
        portraitAlt="Plan de publication SEO de Christ Juvalin LESSENGUI"
        links={[
          { label: "Voir le site", href: "/" },
          { label: "Contact", href: "/contact", variant: "outline" },
        ]}
      />

      <section className="container detail-content" id="about">
        <div className="detail-copy">
          <h2>Objectif</h2>
          <p>
            Publier régulièrement des contenus utiles, professionnels et cohérents pour renforcer
            la réputation numérique, la visibilité dans les moteurs de recherche et la crédibilité
            de Christ Juvalin LESSENGUI sur les plateformes professionnelles.
          </p>

          <h2>Périodes clés</h2>
          <ul>
            <li>Semaine 1 : Qui est Christ Juvalin LESSENGUI ?</li>
            <li>Semaine 2 : Maintenance industrielle au Congo</li>
            <li>Semaine 3 : Leadership des jeunes en Afrique</li>
            <li>Semaine 4 : Formation STEM et innovation</li>
            <li>Semaine 5 : Gestion de projets et développement</li>
            <li>Semaine 6 : Innovation technologie en Afrique</li>
            <li>Semaine 7 : Parcours professionnel</li>
            <li>Semaine 8 : Engagement citoyen et développement local</li>
            <li>Semaine 9 : Valeur de l’ingénierie pour les communautés</li>
            <li>Semaine 10 : Engager les jeunes dans l’avenir</li>
            <li>Semaine 11 : Vision de l’Afrique</li>
            <li>Semaine 12 : Synthèse impact + leadership</li>
          </ul>

          <p>
            Le contenu doit rester vérifiable, utile, orienté vers les questions réelles des
            internautes et relier chaque publication au site officiel.
          </p>
        </div>
      </section>
    </main>
  );
}
