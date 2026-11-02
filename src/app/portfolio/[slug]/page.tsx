import { notFound } from "next/navigation";
import { CinematicHero } from "@/components/cinematic-hero";
import { projectDetails } from "@/lib/content";

const projectHeroLines: Record<string, string> = {
  "systeme-gmao-cloud": "Anticiper les pannes. Renforcer la performance.",
  "dashboard-analytics-temps-reel": "Voir clair pour décider plus vite.",
  "plateforme-formation-elearning": "Apprendre autrement. Progresser ensemble.",
  "plateforme-ecommerce-securisee": "Des expériences digitales qui inspirent confiance.",
  "crm-intelligent": "Mieux comprendre. Mieux accompagner.",
  "systeme-erp-modulaire": "Connecter les équipes. Fluidifier l’action.",
  "certificat-idep-gestion-projets": "Structurer les projets. Mesurer le changement.",
  "nomination-au-parlement-ausp": "La jeunesse au cœur des décisions.",
  "leadership-gouvernance-2023": "Le leadership responsable se construit.",
  "certificat-leadership-ausp": "Faire du leadership une force collective.",
  "certificat-leadership-2022": "Grandir en compétences. Servir avec ambition.",
  "perspectives-entrepreneuriales": "L’audace des idées au service de l’impact.",
  "economie-developpement-pad": "Comprendre l’économie pour agir localement.",
};

export function generateStaticParams() {
  return projectDetails.map((project) => ({ slug: project.slug }));
}

export default async function PortfolioDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projectDetails.find((entry) => entry.slug === slug);

  if (!project) {
    notFound();
  }

  const heroImage = project.image.toLowerCase().endsWith(".png")
    ? "/img/christ1.jpg"
    : project.image;

  return (
    <main className="detail-shell">
      <CinematicHero
        eyebrow={`Projet · ${project.category}`}
        title={project.title}
        highlight={projectHeroLines[project.slug] ?? "Des idées concrètes. Un impact durable."}
        description={project.summary}
        portraitImage={heroImage}
        portraitAlt={`Photographie de présentation : ${project.title}`}
        links={[
          { label: "Explorer les réalisations", href: "/projets" },
          { label: "Discuter d’un projet", href: "/contact", variant: "outline" },
        ]}
      />

      <section className="container detail-content" id="about">
        <div className="detail-copy">
          <h2>Détails du projet</h2>
          <ul>
            {project.bullets.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
