import Image from "next/image";
import { notFound } from "next/navigation";
import { CinematicHero } from "@/components/cinematic-hero";
import { ContactForm } from "@/components/contact-form";
import { PortfolioFilter } from "@/components/portfolio-filter";
import { ProfileHighlights } from "@/components/profile-highlights";
import { createPageMetadata } from "@/lib/site-seo";
import {
  aiProfiles,
  associativeCommitments,
  education,
  experiences,
  otherAssociativeRoles,
  resumeDocuments,
  services,
  serviceDetails,
  stories,
  trainings,
} from "@/lib/content";

const sectionMetadata: Record<MenuPageSlug, string> = {
  "a-propos":
    "Biographie et profil de Christ Juvalin LESSENGUI, technicien supérieur en maintenance industrielle et électromécanicien à Brazzaville, République du Congo.",
  parcours:
    "Formation scientifique et parcours professionnel de Christ Juvalin LESSENGUI à l’Université Marien Ngouabi et à l’ENSP de Brazzaville.",
  experiences:
    "Expériences professionnelles de Christ Juvalin LESSENGUI en maintenance mécanique, enseignement et gestion documentaire.",
  projets:
    "Projets numériques, certificats et ouvrages publiés de Christ Juvalin LESSENGUI, technicien supérieur et jeune leader congolais.",
  services:
    "Services en maintenance industrielle, innovation technologique, gestion de projets, développement digital et formation STEM.",
  engagements:
    "Engagements associatifs et leadership de Christ Juvalin LESSENGUI en faveur de la jeunesse et du développement au Congo.",
  contact:
    "Contacter Christ Juvalin LESSENGUI à Brazzaville pour une collaboration, un projet technique ou une initiative éducative.",
};

const menuPages = {
  "a-propos": {
    eyebrow: "À propos · parcours & convictions",
    title: "La technique au service",
    highlight: "d’un impact concret.",
    description:
      "Technicien supérieur en maintenance industrielle à Brazzaville, je relie expertise technique, innovation et engagement pour contribuer au développement des jeunes et des communautés.",
    backgroundImage: "/img/christ1.jpg",
    portraitImage: "/img/Lessengui%20img1.jpg",
    portraitAlt: "Portrait de Christ Juvalin LESSENGUI",
    facts: [
      { value: "Brazzaville", label: "République du Congo" },
      { value: "Maintenance", label: "Industrie & électromécanique" },
      { value: "Innovation", label: "Technologie et éducation" },
      { value: "Engagement", label: "Jeunesse et développement" },
    ],
  },
  parcours: {
    eyebrow: "Parcours · Formation & apprentissage",
    title: "Apprendre pour",
    highlight: "mieux construire.",
    description:
      "Une formation scientifique et technique construite à Brazzaville, enrichie par des expériences de terrain et des apprentissages continus.",
    backgroundImage: "/img/christ2.jpg",
    portraitImage: "/img/Lessphoto1.jpg",
    portraitAlt: "Christ Juvalin LESSENGUI lors d’une activité",
    facts: [
      { value: "2017–2025", label: "Un parcours de formation continu" },
      { value: "Licence 3", label: "Maintenance industrielle" },
      { value: "IDEP · OIF", label: "Formations complémentaires" },
      { value: "Brazzaville", label: "Congo · Afrique" },
    ],
  },
  experiences: {
    eyebrow: "Expériences · Terrain & responsabilités",
    title: "Des compétences",
    highlight: "mises en action.",
    description:
      "Stages industriels, coordination de projets et responsabilités associatives : des expériences concrètes au service des équipes et des communautés.",
    backgroundImage: "/assets/img/industrial-hero.jpg",
    portraitImage: "/img/christ1.jpg",
    portraitAlt: "Christ Juvalin LESSENGUI prenant la parole lors d’un événement",
    facts: [
      { value: "Industrie", label: "Maintenance mécanique" },
      { value: "Coordination", label: "Projets communautaires" },
      { value: "AUSP", label: "Représentation étudiante" },
      { value: "STEM", label: "Innovation et formation" },
    ],
  },
  projets: {
    eyebrow: "Projets · Réalisations & ressources",
    title: "Des idées qui deviennent",
    highlight: "des réalisations.",
    description:
      "Découvrez une sélection de projets numériques, de certificats et de ressources autour de l’innovation, de la gestion et du développement.",
    backgroundImage: "/assets/img/portfolio/app-1.jpg",
    portraitImage: "/img/christ1.jpg",
    portraitAlt: "Christ Juvalin LESSENGUI",
    facts: [
      { value: "18", label: "Projets et ressources" },
      { value: "4", label: "Domaines de réalisation" },
      { value: "Numérique", label: "Solutions et innovation" },
      { value: "Impact", label: "Développement durable" },
    ],
  },
  services: {
    eyebrow: "Services · Compétences & accompagnement",
    title: "Des compétences au service",
    highlight: "de vos projets.",
    description:
      "Un accompagnement adapté en innovation technologique, gestion de projets, développement digital, formation STEM et maintenance industrielle.",
    backgroundImage: "/assets/img/services.jpg",
    portraitImage: "/img/Lessengui%20img1.jpg",
    portraitAlt: "Christ Juvalin LESSENGUI lors d’un engagement collectif",
    facts: [
      { value: "6 domaines", label: "Expertise et accompagnement" },
      { value: "Technique", label: "Industrie et numérique" },
      { value: "Méthode", label: "Gestion et suivi de projets" },
      { value: "Humain", label: "Formation et engagement" },
    ],
  },
  engagements: {
    eyebrow: "Engagements · Leadership & citoyenneté",
    title: "Agir avec et pour",
    highlight: "les communautés.",
    description:
      "Des responsabilités associatives et des initiatives tournées vers l’éducation, le leadership, la participation citoyenne et la jeunesse.",
    backgroundImage: "/img/christ1.jpg",
    portraitImage: "/img/christ2.jpg",
    portraitAlt: "Christ Juvalin LESSENGUI engagé dans une activité",
    facts: [
      { value: "7 rôles", label: "Responsabilités associatives" },
      { value: "Jeunesse", label: "Leadership et inclusion" },
      { value: "Éducation", label: "Transmission et STEM" },
      { value: "Congo", label: "Action ancrée localement" },
    ],
  },
  contact: {
    eyebrow: "Contact · Échangeons",
    title: "Construisons ensemble",
    highlight: "la prochaine étape.",
    description:
      "Pour une collaboration, une initiative éducative ou un projet technique, parlons de vos besoins et de la manière d’avancer ensemble.",
    backgroundImage: "/img/Lessphoto1.jpg",
    portraitImage: "/img/christ1.jpg",
    portraitAlt: "Christ Juvalin LESSENGUI",
    facts: [
      { value: "Brazzaville", label: "République du Congo" },
      { value: "E-mail", label: "Réponse directe" },
      { value: "Projets", label: "Collaboration et conseil" },
      { value: "Jeunesse", label: "Éducation et innovation" },
    ],
  },
} as const;

type MenuPageSlug = keyof typeof menuPages;

const trainingMonths: Record<string, number> = {
  janvier: 1,
  février: 2,
  mars: 3,
  avril: 4,
  mai: 5,
  juin: 6,
  juillet: 7,
  août: 8,
  septembre: 9,
  octobre: 10,
  novembre: 11,
  décembre: 12,
};

function trainingDateValue(date: string) {
  const year = Number(date.match(/\b(?:19|20)\d{2}\b/)?.[0] ?? 0);
  const monthName = date.toLocaleLowerCase("fr").match(/\b(?:janvier|février|mars|avril|mai|juin|juillet|août|septembre|octobre|novembre|décembre)\b/)?.[0];
  return year * 12 + (monthName ? trainingMonths[monthName] : 0);
}

function SectionHeading({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="section-heading">
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {children ? <p>{children}</p> : null}
    </div>
  );
}

function TimelineCard({
  date,
  title,
  place,
  details,
}: {
  date: string;
  title: string;
  place: string;
  details?: string[];
}) {
  return (
    <article className="timeline-card">
      <span className="timeline-date">{date}</span>
      <div>
        <h4>{title}</h4>
        <p className="timeline-place">{place}</p>
        {details ? (
          <ul>{details.map((detail) => <li key={detail}>{detail}</li>)}</ul>
        ) : null}
      </div>
    </article>
  );
}

function ProfilePage() {
  return (
    <>
      <section className="section about-section profile-about-section" id="about">
        <div className="container about-grid profile-about-grid">
          <div className="about-photo-wrap">
            <Image
              src="/img/Lessengui%20img2.jpg"
              alt="Portrait de Christ Juvalin LESSENGUI"
              width={1996}
              height={2880}
              sizes="(max-width: 760px) 90vw, 36vw"
              className="about-photo"
            />
            <div className="photo-label">
              <b>CJ</b><span>Engagé pour une Afrique<br />compétente et innovante</span>
            </div>
          </div>
          <div className="about-copy profile-about-copy">
            <SectionHeading eyebrow="Mon profil" title="Technique, innovation et impact">
              Mettre les compétences au service des personnes et des communautés.
            </SectionHeading>
            <div className="profile-story">
              <p>
                Technicien supérieur en maintenance industrielle (ENSP/UMNG), formé
                au pilotage de projets de développement par le Groupe AFD, à la
                négociation climatique et au suivi-évaluation de projets par l’IDEP.
                Depuis trois ans, je coordonne des équipes et des projets dans des
                organisations panafricaines de jeunesse, notamment AUSP Congo, YALI
                Congo Alumni, ONG-BK et Adelphi Holding.
              </p>
              <p>
                Mon expérience de terrain chez BRALICO (Groupe Castel) a renforcé
                ma rigueur en diagnostic, maintenance et fiabilisation des systèmes
                industriels. Écrivain, j’ai publié trois ouvrages consacrés aux
                mathématiques, à la mécanique et à la littérature. Je souhaite mettre
                ces compétences au service des Agendas 2030 de l’ONU et 2063 de l’Union
                africaine.
              </p>
            </div>
            <div className="about-facts profile-facts">
              <div><span>Formation</span><strong>Maintenance industrielle</strong></div>
              <div><span>Implantation</span><strong>Brazzaville, Congo</strong></div>
              <div><span>Engagement</span><strong>Jeunesse & développement</strong></div>
              <div><span>Langues</span><strong>Français, anglais, 4 langues nationales</strong></div>
            </div>
            <a className="button button-primary" href="/documents_pdf/CV%20LESSENGUI%20Christ%20Juvalin_French.pdf">
              CV en français <span aria-hidden="true">↓</span>
            </a>
          </div>
        </div>
      </section>
      <ProfileHighlights />
    </>
  );
}

function JourneyPage() {
  const orderedTrainings = [...trainings].sort(
    (first, second) => trainingDateValue(second.date) - trainingDateValue(first.date),
  );

  return (
    <>
      <section className="section journey-section journey-history-section" id="about">
        <div className="container journey-history">
          <SectionHeading eyebrow="Formation" title="Un parcours tourné vers le terrain">
            Des premières études à la formation professionnelle, retrouvez les étapes de mon parcours académique, sans omettre les expériences et engagements qui l’ont prolongé.
          </SectionHeading>
          <div className="journey-history-group">
            <div className="journey-history-heading">
              <span>01</span>
              <div><h3>Formation initiale</h3><p>Sciences fondamentales et spécialisation en maintenance industrielle.</p></div>
            </div>
            <div className="timeline-grid">
            {education.map((item) => <TimelineCard key={item.title} {...item} />)}
            </div>
          </div>

          <div className="journey-history-group">
            <div className="journey-history-heading">
              <span>02</span>
              <div><h3>Expériences professionnelles</h3><p>Mettre les connaissances en pratique et les transmettre.</p></div>
            </div>
            <div className="experience-list journey-experience-list">
              {experiences.map((item) => <TimelineCard key={`${item.date}-${item.title}`} {...item} />)}
            </div>
          </div>

          <div className="journey-history-group">
            <div className="journey-history-heading">
              <span>03</span>
              <div><h3>Engagements & responsabilités</h3><p>Contribuer à des projets, des programmes et des dynamiques collectives.</p></div>
            </div>
            <div className="experience-list journey-experience-list">
              {associativeCommitments.map((item) => (
                <TimelineCard
                  date={item.date}
                  title={item.title}
                  place={item.organization}
                  details={item.details}
                  key={`${item.organization}-${item.title}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section experiences-section journey-training-section">
        <div className="container journey-history">
          <SectionHeading eyebrow="Apprentissage continu" title="Compléter et actualiser ses compétences">
            Une sélection complète de formations complémentaires en gestion de projets, numérique, leadership, éducation et climat.
          </SectionHeading>
          <div className="journey-history-heading journey-training-heading">
            <span>04</span>
            <div><h3>Formations complémentaires</h3><p>Dates, organismes et attestations disponibles lorsqu’elles sont fournies.</p></div>
          </div>
          <div className="training-grid journey-training-grid">
            {orderedTrainings.map((item, index) => (
              <article className="training-card" key={`${item.date}-${item.title}`}>
                <span className="journey-training-index">{String(index + 1).padStart(2, "0")}</span>
                <span>{item.date}</span>
                <h4>{item.title}</h4>
                <p>{item.organization}</p>
                {item.certificate ? (
                  <a
                    className="text-link"
                    href={`/documents_pdf/${encodeURIComponent(item.certificate)}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Voir l’attestation <span aria-hidden="true">↗</span>
                  </a>
                ) : null}
              </article>
            ))}
          </div>
          <div className="journey-completion-note">
            <span aria-hidden="true">↗</span>
            <p>Les formations attestées sont consultables depuis leur fiche lorsque le document correspondant est disponible.</p>
          </div>
        </div>
      </section>
    </>
  );
}

function ExperiencesPage() {
  return (
    <section className="section experiences-section" id="about">
      <div className="container">
        <SectionHeading eyebrow="Expériences professionnelles" title="Apprendre en faisant">
          Des responsabilités dans la gestion documentaire et l’enseignement, et une expérience technique de terrain en industrie et mécanique.
        </SectionHeading>
        <div className="experience-list">
          {experiences.map((item) => <TimelineCard key={item.title} {...item} />)}
        </div>
      </div>
    </section>
  );
}

function AIProjectSection() {
  return (
    <section className="section ai-section" id="intelligence-artificielle">
      <div className="container">
        <SectionHeading eyebrow="IA & automatisation" title="Des assistants conçus pour des usages précis">
          Les profils, fonctionnalités et résultats attendus des assistants sont désormais regroupés dans cette page Projets.
        </SectionHeading>
        <div className="ai-project-grid">
          {aiProfiles.map((ai) => (
            <article className="ai-project-card" key={ai.slug}>
              <div className="ai-project-heading">
                <Image src={ai.image} alt="" width={72} height={72} />
                <div><span className="eyebrow">Assistant IA</span><h3>{ai.name}</h3></div>
              </div>
              <p>{ai.description}</p>
              <p>{ai.summary}</p>
              <p>{ai.overview}</p>
              <h4>Fonctionnalités clés</h4>
              <ul>{ai.features.map((feature) => <li key={feature}>{feature}</li>)}</ul>
              <h4>Résultats recherchés</h4>
              <ul>{ai.outcomes.map((outcome) => <li key={outcome}>{outcome}</li>)}</ul>
              <div className="ai-project-metrics">
                {ai.metrics.map((metric) => (
                  <div key={metric.label}><span>{metric.label}</span><strong>{metric.value}</strong></div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectsPage() {
  return (
    <>
      <section className="section portfolio-section" id="about">
        <div className="container">
          <SectionHeading eyebrow="Réalisations" title="Projets, certificats et ouvrages publiés">
            Parcourez les réalisations par domaine, puis ouvrez chaque fiche ou ouvrage pour en découvrir les détails.
          </SectionHeading>
          <PortfolioFilter includePublishedWorks />
        </div>
      </section>
      <AIProjectSection />
      <section className="section experiences-section">
        <div className="container">
          <SectionHeading eyebrow="Curriculum vitæ" title="Télécharger les CV">
            Retrouvez les versions française et Union africaine de mon curriculum vitæ.
          </SectionHeading>
          <div className="resume-document-grid">
            {resumeDocuments.map((document) => (
              <a
                className="resume-document-card"
                href={`/documents_pdf/${encodeURIComponent(document.filename)}`}
                key={document.filename}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="document-symbol" aria-hidden="true">▤</span>
                <span><strong>{document.title}</strong><small>{document.description}</small></span>
                <b aria-hidden="true">↓</b>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function ServicesPage() {
  return (
    <section className="section services-section service-page-section" id="about">
      <div className="container service-page-container">
        <SectionHeading eyebrow="Domaines d’intervention" title="Un appui adapté à vos objectifs">
          Des compétences en industrie, numérique, gestion et formation, mobilisées en fonction des besoins de votre organisation ou de votre projet.
        </SectionHeading>
        <div className="service-grid">
          {services.map((service, index) => {
            const slug = service.href.split("/").pop();
            const detail = serviceDetails.find((item) => item.slug === slug);
            return (
              <a className="service-card service-page-card" href={service.href} key={service.title}>
                <div className="service-page-card-top">
                  <span className="service-icon" aria-hidden="true">{service.icon}</span>
                  <span className="service-page-number">{String(index + 1).padStart(2, "0")}</span>
                  <span className="service-arrow" aria-hidden="true">↗</span>
                </div>
                <h3>{service.title}</h3>
                <p>{detail?.summary ?? service.description}</p>
                {detail ? (
                  <ul className="service-page-focus">
                    {detail.focus.slice(0, 2).map((focus) => <li key={focus}>{focus}</li>)}
                  </ul>
                ) : null}
                <span className="text-link">Explorer les axes de travail <b aria-hidden="true">→</b></span>
              </a>
            );
          })}
        </div>
        <div className="service-page-contact">
          <div><span className="eyebrow">Un besoin spécifique ?</span><h3>Parlons de votre projet</h3><p>Présentez votre contexte, vos objectifs et les compétences dont vous avez besoin.</p></div>
          <a className="button button-primary" href="/contact">Échanger sur votre besoin <span aria-hidden="true">→</span></a>
        </div>
      </div>
    </section>
  );
}

function EngagementsPage() {
  return (
    <>
      <section className="section engagement-section" id="about">
        <div className="container">
          <SectionHeading eyebrow="Engagement associatif & leadership" title="Faire grandir l’action collective">
            Des responsabilités panafricaines et communautaires, et des initiatives pour le leadership, l’éducation et le développement durable.
          </SectionHeading>
          <div className="engagement-grid">
            <div className="roles-panel">
              <h3>Autres engagements associatifs</h3>
              <ul>{otherAssociativeRoles.map((role) => <li key={role}><span aria-hidden="true">↗</span>{role}</li>)}</ul>
            </div>
            <div className="stories-panel">
              <h3>Récits et initiatives</h3>
              <p>Découvrez les histoires, activités et engagements qui donnent du contexte à ce parcours.</p>
              <div className="story-link-list">
                {stories.map((story) => (
                  <a href={story.href} key={story.href}>
                    <span>{story.number}</span>{story.title}<b aria-hidden="true">↗</b>
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="experience-list commitment-list">
            {associativeCommitments.map((item) => (
              <TimelineCard
                date={item.date}
                title={item.title}
                place={item.organization}
                details={item.details}
                key={`${item.organization}-${item.title}`}
              />
            ))}
          </div>
        </div>
      </section>
      <section className="section publications-section">
        <div className="container publication-layout">
          <div>
            <SectionHeading eyebrow="Transmission" title="Partager les connaissances">
              Contribution à des ressources pédagogiques sur l’égalité filles-garçons dans l’éducation avec l’IFEF et l’OIF.
            </SectionHeading>
            <a className="button button-outline" href="/stories/impact-developpement">
              Découvrir les actions et leur impact <span aria-hidden="true">→</span>
            </a>
          </div>
          <a className="document-panel" href="/documents_pdf/_Attestation__formation_sur_lgalit_filles-garons_dans_lducation.pdf" target="_blank" rel="noreferrer">
            <div className="document-panel-heading">
              <span className="document-symbol" aria-hidden="true">▤</span>
              <div><strong>Égalité filles-garçons en éducation</strong><span>Consulter l’attestation de formation</span></div>
            </div>
          </a>
        </div>
      </section>
    </>
  );
}

function ContactPage() {
  return (
    <section className="section contact-section" id="about">
      <div className="container contact-grid">
        <div className="contact-intro">
          <SectionHeading eyebrow="Coordonnées" title="Un projet en tête ?">
            Écrivez-moi pour discuter de vos besoins, d’une collaboration ou d’une initiative à impact.
          </SectionHeading>
          <div className="contact-details">
            <a href="mailto:juvalinlessengui@gmail.com">
              <span className="contact-icon" aria-hidden="true">@</span>
              <span><small>E-mail</small><strong>juvalinlessengui@gmail.com</strong></span>
            </a>
            <a href="tel:+242065337815">
              <span className="contact-icon" aria-hidden="true">↗</span>
              <span><small>Téléphone</small><strong>+242 06 533 78 15</strong></span>
            </a>
            <a href="tel:+242053309188">
              <span className="contact-icon" aria-hidden="true">↗</span>
              <span><small>Téléphone secondaire</small><strong>+242 05 330 91 88</strong></span>
            </a>
            <div>
              <span className="contact-icon" aria-hidden="true">⌖</span>
              <span><small>Localisation</small><strong>Makélékélé, Brazzaville, République du Congo</strong></span>
            </div>
          </div>
          <a className="text-link" href="/documents_pdf/CV%20LESSENGUI%20Christ%20Juvalin_French.pdf">
            CV en français <span aria-hidden="true">↓</span>
          </a>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}

function MenuPageContent({ slug }: { slug: MenuPageSlug }) {
  switch (slug) {
    case "a-propos":
      return <ProfilePage />;
    case "parcours":
      return <JourneyPage />;
    case "experiences":
      return <ExperiencesPage />;
    case "projets":
      return <ProjectsPage />;
    case "services":
      return <ServicesPage />;
    case "engagements":
      return <EngagementsPage />;
    case "contact":
      return <ContactPage />;
  }
}

export function generateStaticParams() {
  return Object.keys(menuPages).map((section) => ({ section }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ section: string }>;
}) {
  const { section } = await params;
  if (!Object.hasOwn(menuPages, section)) {
    notFound();
  }

  const slug = section as MenuPageSlug;
  const page = menuPages[slug];

  return createPageMetadata({
    title: page.eyebrow.split(" · ")[0],
    description: sectionMetadata[slug],
    pathname: `/${slug}`,
  });
}

export default async function MenuSectionPage({
  params,
}: {
  params: Promise<{ section: string }>;
}) {
  const { section } = await params;
  if (!Object.hasOwn(menuPages, section)) {
    notFound();
  }

  const slug = section as MenuPageSlug;
  const page = menuPages[slug];

  return (
    <main className="detail-shell">
      <CinematicHero
        eyebrow={page.eyebrow}
        title={page.title}
        highlight={page.highlight}
        description={page.description}
        backgroundImage={page.backgroundImage}
        portraitImage={page.portraitImage}
        portraitAlt={page.portraitAlt}
        links={[
          { label: "Retour à l’accueil", href: "/" },
          { label: "Me contacter", href: "/contact", variant: "outline" },
        ]}
        facts={[...page.facts]}
      />
      <MenuPageContent slug={slug} />
    </main>
  );
}
