import Image from "next/image";
import { ContactForm } from "@/components/contact-form";
import { HomeAboutMotion } from "@/components/home-about-motion";
import { HomeHero } from "@/components/home-hero";
import { PortfolioFilter } from "@/components/portfolio-filter";
import { ScrollTimeline } from "@/components/scroll-timeline";
import {
  certificates,
  education,
  experiences,
  roles,
  services,
  skillCategories,
  stories,
  trainings,
} from "@/lib/content";
import { createPageMetadata } from "@/lib/site-seo";

export const metadata = createPageMetadata({
  title: "Christ Juvalin LESSENGUI | Technicien supérieur, leader et innovateur au Congo",
  description:
    "Christ Juvalin LESSENGUI est technicien supérieur en maintenance industrielle et électromécanicien, jeune leader et acteur du développement au Congo et en Afrique.",
  pathname: "/",
});

function SectionHeading({
  eyebrow,
  title,
  children,
  id,
}: {
  eyebrow: string;
  title: string;
  children?: React.ReactNode;
  id?: string;
}) {
  return (
    <div className="section-heading">
      <span className="eyebrow">{eyebrow}</span>
      <h2 id={id}>{title}</h2>
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
          <ul>
            {details.map((detail) => <li key={detail}>{detail}</li>)}
          </ul>
        ) : null}
      </div>
    </article>
  );
}

type TimelineIconName =
  | "engineering"
  | "digital"
  | "leadership"
  | "education"
  | "certification"
  | "community"
  | "development";

const timelineIconPaths: Record<TimelineIconName, string[]> = {
  engineering: [
    "M12 3.5v2m0 13v2m8.5-8.5h-2m-13 0h-2m13.5-6-1.4 1.4M8.4 15.6 7 17m10 0-1.4-1.4M8.4 8.4 7 7",
    "M15.5 12a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z",
  ],
  digital: ["m8 7-5 5 5 5m8-10 5 5-5 5m-3-13-2 14"],
  leadership: [
    "M16 20v-1.5a3.5 3.5 0 0 0-3.5-3.5h-5A3.5 3.5 0 0 0 4 18.5V20",
    "M10 11a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm6-6a3.5 3.5 0 0 1 0 6.8m2 3.3a3.5 3.5 0 0 1 2 3.2V20",
  ],
  education: [
    "m3 9 9-5 9 5-9 5-9-5Z",
    "M7 11.2v4.3c2.8 2.2 7.2 2.2 10 0v-4.3M21 9v6",
  ],
  certification: [
    "M12 14.5a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11Z",
    "m8.5 13.5-1 7 4.5-2.5 4.5 2.5-1-7",
  ],
  community: [
    "M16 20v-1.5a3.5 3.5 0 0 0-3.5-3.5h-5A3.5 3.5 0 0 0 4 18.5V20",
    "M10 11a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm6-6a3.5 3.5 0 0 1 0 6.8",
  ],
  development: [
    "M20 4c-8 0-13 3.5-13 9a5 5 0 0 0 5 5c5.5 0 8-6 8-14Z",
    "M4 21c2-5 5.5-8.5 11-11",
  ],
};

function TimelineIcon({ name }: { name: TimelineIconName }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      {timelineIconPaths[name].map((path) => (
        <path
          d={path}
          key={path}
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      ))}
    </svg>
  );
}

function educationIcon(title: string): TimelineIconName {
  if (/maintenance|industrielle/i.test(title)) {
    return "engineering";
  }
  return "education";
}

function trainingDomain(title: string) {
  if (/leadership|négociations|négociation|collaboration|action communautaire|organisation communautaire/i.test(title)) {
    return { label: "Leadership & engagement", icon: "leadership" as const, type: "leadership" };
  }
  if (/programmation|informatique|web|python|latex/i.test(title)) {
    return { label: "Informatique & numérique", icon: "digital" as const, type: "technical" };
  }
  if (/projets|project management|pilotage|suivi-évaluation|caisse|paie/i.test(title)) {
    return { label: "Gestion de projets", icon: "engineering" as const, type: "professional" };
  }
  if (/éducation|éducat|pédagogiques|formateurs|égalité/i.test(title)) {
    return { label: "Éducation & citoyenneté", icon: "community" as const, type: "professional" };
  }
  return { label: "Développement professionnel", icon: "development" as const, type: "professional" };
}

function PdfLink({ filename, label = "Consulter le document" }: { filename: string; label?: string }) {
  return (
    <a
      className="text-link"
      href={`/documents_pdf/${encodeURIComponent(filename)}`}
      target="_blank"
      rel="noreferrer"
    >
      {label} <span aria-hidden="true">↗</span>
    </a>
  );
}

export default function Home() {
  return (
    <>
      <main>
        <HomeHero
          eyebrow="Technicien supérieur · Leader · Citoyen du monde"
          description="Technicien supérieur en maintenance industrielle et électromécanicien, je fais grandir les compétences et transforme les idées en solutions utiles pour l’Afrique."
          links={[
            { label: "Découvrir mon parcours", href: "#resume" },
            { label: "Explorer mes projets", href: "#portfolio", variant: "outline" },
          ]}
          facts={[
            { value: "Licence 3", label: "Maintenance industrielle" },
            { value: "6 domaines", label: "Expertise et accompagnement" },
            { value: "7 engagements", label: "Responsabilités associatives" },
            { value: "Brazzaville", label: "Congo · Afrique" },
          ]}
        />
        <section className="section home-about" id="about" aria-labelledby="home-about-title">
          <div className="container">
            <header className="home-about__header">
              <div>
                <span className="home-about__eyebrow"><i /> 01 — À PROPOS</span>
                <h2 id="home-about-title">
                  La technique au service
                  <span>de l’impact collectif.</span>
                </h2>
              </div>
              <p>
                Un parcours qui relie maintenance industrielle, innovation et
                engagement pour les communautés.
              </p>
            </header>

            <div className="home-about__grid">
              <figure className="home-about__visual">
                <div className="home-about__portrait">
                  <Image
                    src="/img/Lessengui%20img2.jpg"
                    alt="Christ Juvalin LESSENGUI en tenue professionnelle à Brazzaville"
                    fill
                    sizes="(max-width: 760px) 90vw, 42vw"
                    className="home-about__image"
                  />
                  <span className="home-about__image-shade" aria-hidden="true" />
                  <span className="home-about__orbit home-about__orbit--one" aria-hidden="true" />
                  <span className="home-about__orbit home-about__orbit--two" aria-hidden="true" />
                  <span className="home-about__portrait-index">CJ <i>·</i> 01</span>
                </div>
                <figcaption className="home-about__caption">
                  <span className="home-about__caption-mark">CJ</span>
                  <span>
                    <strong>Christ Juvalin LESSENGUI</strong>
                    <small>Brazzaville, République du Congo</small>
                  </span>
                  <span className="home-about__caption-dot" aria-label="Basé à Brazzaville" />
                </figcaption>
              </figure>

              <div className="home-about__copy">
                <div className="home-about__profile">
                  <span className="home-about__profile-icon" aria-hidden="true">⌁</span>
                  <div>
                    <span>PROFIL TECHNIQUE</span>
                    <strong>Technicien supérieur en maintenance industrielle</strong>
                    <small>Électromécanicien · ENSP / Université Marien Ngouabi</small>
                  </div>
                </div>
                <p>
                  Je suis un jeune Congolais dont le parcours scientifique et
                  technique s’est construit à Brazzaville, de la physique à la
                  maintenance industrielle. Je m’intéresse à la fiabilité des
                  équipements, au diagnostic et à l’amélioration des systèmes
                  techniques.
                </p>
                <p>
                  En parallèle, je contribue à des initiatives en technologie,
                  business intelligence, cybersécurité, robotique et formation STEM.
                  Mes engagements éducatifs et associatifs sont guidés par une même
                  conviction : développer les compétences pour créer des solutions
                  utiles et durables.
                </p>

                <div className="home-about__facts">
                  <div>
                    <span>01</span>
                    <strong>Maintenance</strong>
                    <small>Électromécanique & fiabilité</small>
                  </div>
                  <div>
                    <span>02</span>
                    <strong>Innovation</strong>
                    <small>Numérique, BI & robotique</small>
                  </div>
                  <div>
                    <span>03</span>
                    <strong>Engagement</strong>
                    <small>Jeunesse, éducation & STEM</small>
                  </div>
                </div>

                <a className="button button-primary home-about__cv" href="/documents_pdf/CV%20LESSENGUI%20Christ%20Juvalin_French.pdf">
                  Découvrir mon parcours <span aria-hidden="true">↗</span>
                </a>
              </div>
            </div>
          </div>
        </section>
        <HomeAboutMotion />

        <section className="section journey-section home-journey-section" id="resume">
          <div className="container">
            <SectionHeading eyebrow="Parcours" title="Une formation tournée vers le terrain">
              Un parcours scientifique et technique construit à Brazzaville, de la physique à la maintenance industrielle.
            </SectionHeading>
            <ScrollTimeline variant="education" label="Timeline du parcours académique">
              {education.map((item, index) => (
                <div
                  className="scroll-timeline-entry"
                  data-timeline-item
                  data-side={["left", "right", "right", "left"][index % 4]}
                  data-timeline-position={index % 8}
                  key={item.title}
                  role="listitem"
                >
                  <span className="scroll-timeline-node">
                    <TimelineIcon name={educationIcon(item.title)} />
                  </span>
                  <span className="scroll-timeline-connector" aria-hidden="true" />
                  <article className="scroll-timeline-card education-timeline-card">
                    <span className="scroll-timeline-date">{item.date}</span>
                    <h3>{item.title}</h3>
                    <p>{item.place}</p>
                    <span className="timeline-step-number" aria-hidden="true">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </article>
                </div>
              ))}
            </ScrollTimeline>
          </div>
        </section>

        <section className="section experiences-section" id="experiences">
          <div className="container">
            <SectionHeading eyebrow="Expériences" title="Mettre les compétences en action">
              Expériences techniques, coordination de projets et responsabilités au sein d’organisations de jeunesse.
            </SectionHeading>
            <div className="experience-list">
              {experiences.map((item) => <TimelineCard key={item.title} {...item} />)}
            </div>
            <div className="training-block home-training-block">
              <div className="subsection-heading">
                <span className="eyebrow">Se former en continu</span>
                <h3>Formations complémentaires</h3>
              </div>
              <ScrollTimeline variant="training" label="Timeline des formations continues">
                {trainings.map((item, index) => {
                  const domain = trainingDomain(item.title);
                  const trainingType = item.certificate ? "certifying" : domain.type;

                  return (
                    <div
                      className="scroll-timeline-entry"
                      data-timeline-item
                      data-side={["left", "right", "right", "left"][index % 4]}
                      data-timeline-position={index % 8}
                      key={item.title}
                      role="listitem"
                    >
                      <span className="scroll-timeline-node">
                        <TimelineIcon name={item.certificate ? "certification" : domain.icon} />
                      </span>
                      <span className="scroll-timeline-connector" aria-hidden="true" />
                      <article className={`scroll-timeline-card training-timeline-card training-type-${trainingType}`}>
                        <div className="training-timeline-meta">
                          <span className="scroll-timeline-date">{item.date}</span>
                          <span className="training-domain">{domain.label}</span>
                          {item.certificate ? <span className="training-certificate-badge">Certifiante</span> : null}
                        </div>
                        <h4>{item.title}</h4>
                        <p>{item.organization}</p>
                        {item.certificate ? <PdfLink filename={item.certificate} label="Voir l’attestation" /> : null}
                      </article>
                    </div>
                  );
                })}
              </ScrollTimeline>
            </div>
          </div>
        </section>

        <section
          className="section skills-section home-skills-section"
          id="skills"
          aria-labelledby="skills-heading"
        >
          <div className="container">
            <div className="skills-intro">
              <SectionHeading
                eyebrow="Savoir-faire"
                title="Relier la technique, les projets et l’engagement"
                id="skills-heading"
              >
                Des compétences construites par la formation, les expériences de terrain et les responsabilités collectives.
              </SectionHeading>
              <p className="skills-context">
                De la maintenance mécanique au suivi de projets, chaque domaine s’appuie sur des expériences et des formations présentées dans ce portfolio.
              </p>
            </div>
            <div className="competency-grid">
              {skillCategories.map((category, index) => (
                <article className="competency-card" key={category.title}>
                  <div className="competency-card-heading">
                    <span className="competency-card-number">Domaine {String(index + 1).padStart(2, "0")}</span>
                    <span className="competency-card-count">{category.skills.length} compétences</span>
                  </div>
                  <h3>{category.title}</h3>
                  <ul>{category.skills.map((skill) => <li key={skill}>{skill}</li>)}</ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section portfolio-section" id="portfolio">
          <div className="container">
            <SectionHeading eyebrow="Réalisations" title="Projets, certificats et ouvrages publiés">
              Parcourez les projets et certificats, puis découvrez les ouvrages publiés et les manuscrits en cours.
            </SectionHeading>
            <PortfolioFilter includePublishedWorks />
            <p className="portfolio-footnote">
              Ouvrez une fiche pour consulter ses détails ou suivez le lien d’un ouvrage publié vers sa page éditeur.
            </p>
          </div>
        </section>

        <section className="section services-section" id="services">
          <div className="container">
            <SectionHeading eyebrow="Services" title="Des compétences au service de vos projets">
              Appui technique et accompagnement dans les domaines couverts par mon parcours.
            </SectionHeading>
            <div className="service-grid">
              {services.map((service) => (
                <a className="service-card" href={service.href} key={service.title}>
                  <span className="service-icon" aria-hidden="true">{service.icon}</span>
                  <span className="service-arrow" aria-hidden="true">↗</span>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <span className="text-link">Découvrir le service <b aria-hidden="true">→</b></span>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="section engagement-section" id="engagements">
          <div className="container">
            <SectionHeading eyebrow="Engagements" title="Agir avec et pour les communautés">
              Des responsabilités associatives et des actions en faveur de l’éducation, du leadership et de la jeunesse.
            </SectionHeading>
            <div className="engagement-grid">
              <div className="roles-panel">
                <h3>Responsabilités</h3>
                <ul>{roles.map((role) => <li key={role}><span aria-hidden="true">↗</span>{role}</li>)}</ul>
              </div>
              <div className="stories-panel">
                <h3>Récits et initiatives</h3>
                <p>Retrouvez les pages consacrées à mon histoire, mes engagements, mes activités, mon parcours, à la transition écologique et à l’impact.</p>
                <div className="story-link-list">
                  {stories.map((story) => (
                    <a href={story.href} key={story.href}>
                      <span>{story.number}</span>{story.title}<b aria-hidden="true">↗</b>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section publications-section" id="publications">
          <div className="container publication-layout">
            <div>
              <SectionHeading eyebrow="Publications & ressources" title="Partager les connaissances">
                Contribution à la rédaction de fiches pédagogiques pour l’IFEF, en partenariat avec l’OIF, sur l’égalité entre les filles et les garçons dans l’éducation.
              </SectionHeading>
              <a className="button button-outline" href={stories[5].href}>
                Découvrir les actions et leur impact <span aria-hidden="true">→</span>
              </a>
            </div>
            <div className="document-panel">
              <div className="document-panel-heading">
                <span className="document-symbol" aria-hidden="true">▤</span>
                <div><strong>Documents et attestations</strong><span>CV et certificats disponibles en PDF</span></div>
              </div>
              <ul>
                {certificates.map((filename) => (
                  <li key={filename}>
                    <PdfLink filename={filename} label={filename.replace(/\.pdf$/i, "").replace(/[_]/g, " ")} />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="section contact-section" id="contact">
          <div className="container contact-grid">
            <div className="contact-intro">
              <SectionHeading eyebrow="Contact" title="Parlons de votre prochain projet">
                Pour une collaboration, une initiative éducative ou un projet technique, vous pouvez me contacter directement.
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
            </div>
            <ContactForm />
          </div>
        </section>
      </main>

      <nav className="section-rail" aria-label="Accès rapide aux sections">
        <a href="#hero" aria-label="Accueil"><span>⌂</span></a>
        <a href="#resume" aria-label="Parcours"><span>▤</span></a>
        <a href="#portfolio" aria-label="Projets"><span>◇</span></a>
        <a href="#contact" aria-label="Contact"><span>@</span></a>
      </nav>
    </>
  );
}
