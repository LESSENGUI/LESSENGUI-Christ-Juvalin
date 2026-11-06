import Link from "next/link";
import { TrainingLibraryGroups } from "@/components/training-library";
import { trainingCategories, trainings } from "@/lib/content";
import { createPageMetadata } from "@/lib/site-seo";

export const metadata = createPageMetadata({
  title: "Autres formations | Christ Juvalin LESSENGUI",
  description:
    "Consultez les formations de Christ Juvalin LESSENGUI, regroupées par domaines, avec leurs organismes et certificats disponibles.",
  pathname: "/formations",
});

export default function TrainingsPage() {
  return (
    <main className="training-catalog-page">
      <section className="section training-catalog-intro">
        <div className="container">
          <Link className="training-back-link" href="/">
            <span aria-hidden="true">←</span> Retour à l’accueil
          </Link>
          <div className="section-heading">
            <span className="eyebrow">Parcours · Apprentissage continu</span>
            <h1>Autres formations</h1>
            <p>
              {trainings.length} formations regroupées par domaines de compétences. Consultez chaque fiche
              pour retrouver les informations et les justificatifs disponibles.
            </p>
          </div>
          <nav className="training-category-nav" aria-label="Parcourir les domaines de formation">
            {trainingCategories.map((category) => (
              <a href={`#${category.slug}`} key={category.slug}>
                {category.title}
              </a>
            ))}
          </nav>
        </div>
      </section>
      <section className="section training-catalog-content">
        <div className="container">
          <TrainingLibraryGroups />
        </div>
      </section>
    </main>
  );
}
