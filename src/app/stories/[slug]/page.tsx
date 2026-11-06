import { notFound } from "next/navigation";
import { CinematicHero } from "@/components/cinematic-hero";
import { ExperienceLogo } from "@/components/experience-logo";
import { MemoirReader } from "@/components/memoir-reader";
import { createPageMetadata } from "@/lib/site-seo";
import {
  activityHighlights,
  associativeCommitments,
  education,
  experiences,
  impactHighlights,
  storyDetails,
  trainings,
} from "@/lib/content";

const storyHeroLines: Record<string, string> = {
  "histoire-de-ma-vie": "Chaque parcours porte une promesse.",
  "engagements-leadership": "Le leadership se prouve par l’action.",
  "activites-realisees": "Des idées concrètes. Un impact durable.",
  "parcours-personnel": "Un parcours construit avec ambition.",
  "transition-ecologique": "Innover sans compromettre demain.",
  "impact-developpement": "Des compétences locales. Un impact durable.",
};

const storyHeroImages: Record<string, string> = {
  "histoire-de-ma-vie": "/img/Lessengui%20img1.jpg",
  "engagements-leadership": "/img/christ1.jpg",
  "activites-realisees": "/img/christ2.jpg",
  "parcours-personnel": "/img/Lessengui%20img2.jpg",
  "transition-ecologique": "/img/christ1.jpg",
  "impact-developpement": "/img/christ2.jpg",
};

export function generateStaticParams() {
  return storyDetails.map((story) => ({ slug: story.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const story = storyDetails.find((entry) => entry.slug === slug);

  if (!story) {
    notFound();
  }

  return createPageMetadata({
    title: story.title,
    description: story.intro,
    pathname: `/stories/${story.slug}`,
  });
}

export default async function StoryDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const story = storyDetails.find((entry) => entry.slug === slug);

  if (!story) {
    notFound();
  }

  return (
    <main className="detail-shell">
      <CinematicHero
        eyebrow={`Récit · ${story.title}`}
        title={story.title}
        highlight={storyHeroLines[story.slug]}
        description={story.intro}
        portraitImage={storyHeroImages[story.slug]}
        portraitAlt={`Photographie liée au récit « ${story.title} »`}
        links={[
          { label: "Tous les récits", href: "/#engagements" },
          { label: "Me contacter", href: "/#contact", variant: "outline" },
        ]}
      />

      <section className="container detail-content detail-story-content" id="about">
        {slug === "histoire-de-ma-vie" ? (
          <MemoirReader />
        ) : (
          <>
            <div className={`detail-copy story-narrative story-narrative-${slug}`}>
              {story.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            {slug === "parcours-personnel" && (
              <section className="story-feature-section" aria-labelledby="story-journey-title">
                <div className="story-section-heading">
                  <span className="story-section-kicker">Formation & expériences</span>
                  <h2 id="story-journey-title">Un parcours construit par l’apprentissage et le terrain</h2>
                  <p>
                    De Divenié aux responsabilités exercées à Brazzaville, ces repères rassemblent les formations
                    et expériences professionnelles de mon parcours.
                  </p>
                </div>
                <div className="personal-journey-columns">
                  <div className="personal-journey-column">
                    <h3>Formation initiale</h3>
                    <div className="personal-journey-list">
                      {education.map((item, index) => (
                        <article className="personal-journey-item" key={`${item.date}-${item.title}`}>
                          <span className="personal-journey-index">{String(index + 1).padStart(2, "0")}</span>
                          <div>
                            <span className="personal-journey-date">{item.date}</span>
                            <h4>{item.title}</h4>
                            <p>{item.place}</p>
                          </div>
                        </article>
                      ))}
                    </div>
                  </div>
                  <div className="personal-journey-column">
                    <h3>Expériences professionnelles</h3>
                    <div className="personal-journey-list">
                      {experiences.map((item, index) => (
                        <article className="personal-journey-item" key={`${item.date}-${item.title}`}>
                          <span className="personal-journey-index">{String(index + 1).padStart(2, "0")}</span>
                          <div className="personal-journey-experience-content">
                            <ExperienceLogo logo={item.logo} name={item.place} initials={item.logoText} />
                            <div>
                              <span className="personal-journey-date">{item.date}</span>
                              <h4>{item.title}</h4>
                              <p>{item.place}</p>
                              {item.details.map((detail) => <p className="personal-journey-detail" key={detail}>{detail}</p>)}
                            </div>
                          </div>
                        </article>
                      ))}
                    </div>
                  </div>
                </div>
              </section>
            )}

            {slug === "activites-realisees" && (
              <section className="story-feature-section" aria-labelledby="story-activities-title">
                <div className="story-section-heading">
                  <span className="story-section-kicker">Éducation · citoyenneté · sciences</span>
                  <h2 id="story-activities-title">Des initiatives ancrées dans leur territoire</h2>
                  <p>
                    Quelques repères datés illustrent la diversité des activités civiques et académiques auxquelles
                    j’ai contribué dans le Niari et à Brazzaville.
                  </p>
                </div>
                <div className="activity-highlight-list">
                  {activityHighlights.map((activity, index) => (
                    <article className="activity-highlight-card" key={activity.title}>
                      <span className="activity-highlight-index">{String(index + 1).padStart(2, "0")}</span>
                      <div className="activity-highlight-body">
                        <div className="activity-highlight-meta">
                          <span>{activity.category}</span>
                          <time>{activity.date}</time>
                        </div>
                        <h3>{activity.title}</h3>
                        <p>{activity.description}</p>
                      </div>
                    </article>
                  ))}
                </div>
              </section>
            )}

            {slug === "transition-ecologique" && (
              <section className="story-feature-section" aria-labelledby="story-ecology-title">
                <div className="story-section-heading">
                  <span className="story-section-kicker">Climat · économie verte · action locale</span>
                  <h2 id="story-ecology-title">Relier les enjeux climatiques aux capacités locales</h2>
                  <p>
                    Un engagement nourri par la formation, le travail associatif et la transmission de compétences
                    pour une transition adaptée aux réalités des jeunes et des communautés.
                  </p>
                </div>
                <div className="ecology-commitment-grid">
                  <article className="ecology-commitment-card">
                    <span className="ecology-commitment-kicker">Se former</span>
                    <h3>Négociations climatiques</h3>
                    <p>
                      Formation aux négociations sur le changement climatique destinée aux jeunes négociateurs
                      africains, suivie auprès de l’IDEP / UNIDEP en octobre 2025.
                    </p>
                    <span className="ecology-commitment-meta">IDEP / UNIDEP · Octobre 2025</span>
                  </article>
                  <article className="ecology-commitment-card">
                    <span className="ecology-commitment-kicker">Agir localement</span>
                    <h3>Économie verte & innovation</h3>
                    <p>
                      Avec l’ONG-BK, contribution aux initiatives climatiques et à la transition écologique locale,
                      notamment par l’appui à la formation des jeunes en économie verte et en innovation.
                    </p>
                    <span className="ecology-commitment-meta">ONG-BK · Engagement depuis 2024</span>
                  </article>
                  <article className="ecology-commitment-card">
                    <span className="ecology-commitment-kicker">Garder le cap</span>
                    <h3>Développement durable</h3>
                    <p>
                      Un intérêt personnel qui rejoint mes engagements en faveur de solutions responsables,
                      attentives à la fois aux besoins sociaux, aux ressources et aux perspectives des générations futures.
                    </p>
                    <span className="ecology-commitment-meta">Centre d’intérêt · Développement durable</span>
                  </article>
                </div>
              </section>
            )}

            {slug === "engagements-leadership" && (
              <section className="story-feature-section" aria-labelledby="story-commitments-title">
                <div className="story-section-heading">
                  <span className="story-section-kicker">Engagement associatif & leadership</span>
                  <h2 id="story-commitments-title">Des responsabilités au service de l’action collective</h2>
                  <p>
                    Gouvernance, mobilisation, formation et organisation : des engagements complémentaires,
                    construits au contact des jeunes et des communautés.
                  </p>
                </div>
                <div className="story-commitment-grid">
                  {associativeCommitments.map((item, index) => (
                    <article className="story-commitment-card" key={`${item.organization}-${item.title}`}>
                      <div className="story-commitment-meta">
                        <span className="story-commitment-index">{String(index + 1).padStart(2, "0")}</span>
                        <span className="story-commitment-date">{item.date}</span>
                      </div>
                      <h3>{item.title}</h3>
                      <p className="story-commitment-organization">{item.organization}</p>
                      <ul>
                        {item.details.map((detail) => <li key={detail}>{detail}</li>)}
                      </ul>
                    </article>
                  ))}
                </div>
              </section>
            )}

            {slug === "impact-developpement" && (
              <section className="story-feature-section impact-story-section" aria-labelledby="story-impact-title">
                <div className="story-section-heading">
                  <span className="story-section-kicker">Des actions, des résultats, des perspectives</span>
                  <h2 id="story-impact-title">L’impact se construit avec les communautés</h2>
                  <p>
                    Chaque initiative répond à un enjeu concret et s’appuie sur les personnes, les institutions
                    et les partenaires déjà engagés sur le terrain.
                  </p>
                </div>
                <div className="impact-highlight-grid">
                  {impactHighlights.map((highlight, index) => (
                    <article className="impact-highlight-card" key={highlight.label}>
                      <span className="impact-highlight-index">{String(index + 1).padStart(2, "0")}</span>
                      <span className="impact-highlight-label">{highlight.label}</span>
                      <h3>{highlight.title}</h3>
                      <p>{highlight.description}</p>
                      <strong>{highlight.metric}</strong>
                    </article>
                  ))}
                </div>
                <div className="impact-alignment-note">
                  <span aria-hidden="true">↗</span>
                  <p>
                    À l’échelle stratégique, les projets portés avec l’AUSP s’inscrivent dans les objectifs de
                    l’Agenda 2030 des Nations Unies et de l’Agenda 2063 de l’Union africaine.
                  </p>
                </div>
              </section>
            )}

            {(slug === "engagements-leadership" || slug === "impact-developpement") && (
              <nav className="story-related-links" aria-label="Récits associés">
                <span>Pour aller plus loin</span>
                <a href={`/stories/${slug === "engagements-leadership" ? "impact-developpement" : "engagements-leadership"}`}>
                  {slug === "engagements-leadership" ? "Découvrir l’impact de ces engagements" : "Lire le récit Engagements & leadership"}
                  <span aria-hidden="true"> →</span>
                </a>
              </nav>
            )}
          </>
        )}
      </section>
    </main>
  );
}
