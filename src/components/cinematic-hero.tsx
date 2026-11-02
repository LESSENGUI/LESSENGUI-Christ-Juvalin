import Image from "next/image";
import Link from "next/link";

type HeroLink = {
  label: string;
  href: string;
  variant?: "primary" | "outline";
};

type HeroFact = {
  value: string;
  label: string;
};

export function CinematicHero({
  eyebrow,
  title,
  highlight,
  description,
  backgroundImage,
  portraitImage,
  portraitAlt,
  links,
  facts,
}: {
  eyebrow: string;
  title: string;
  highlight?: string;
  description: string;
  backgroundImage?: string;
  portraitImage?: string;
  portraitAlt?: string;
  links: HeroLink[];
  facts?: HeroFact[];
}) {
  return (
    <section className={`cinematic-hero${facts ? " has-facts" : ""}`} id="hero">
      <Image
        className="cinematic-backdrop"
        src={backgroundImage ?? "/assets/img/industrial-hero.jpg"}
        alt=""
        fill
        priority
        sizes="100vw"
      />
      <div className="cinematic-overlay" />
      <div className="cinematic-inner container">
        <div className="cinematic-copy">
          <p className="cinematic-eyebrow"><span />{eyebrow}</p>
          <h1>
            {title}
            {highlight ? <><br /><span>{highlight}</span></> : null}
          </h1>
          <p className="cinematic-description">{description}</p>
          <div className="cinematic-actions">
            {links.map((link, index) => (
              <Link
                className={`button ${link.variant === "outline" || index > 0 ? "button-outline" : "button-primary"} cinematic-button`}
                href={link.href}
                key={`${link.href}-${link.label}`}
              >
                {link.label}<span aria-hidden="true">↗</span>
              </Link>
            ))}
          </div>
          <p className="cinematic-location">BRAZZAVILLE <span>·</span> CONGO <span>·</span> AFRIQUE</p>
        </div>

        {portraitImage ? (
          <div className="cinematic-portrait">
            <Image
              src={portraitImage}
              alt={portraitAlt ?? ""}
              fill
              priority
              sizes="(max-width: 760px) 72vw, 40vw"
            />
            <span className="portrait-frame" aria-hidden="true" />
          </div>
        ) : null}
      </div>

      {facts ? (
        <div className="cinematic-facts container">
          {facts.map((fact) => (
            <div className="cinematic-fact" key={fact.label}>
              <strong>{fact.value}</strong>
              <span>{fact.label}</span>
            </div>
          ))}
        </div>
      ) : null}
      <a className="cinematic-scroll" href="#about">
        <span aria-hidden="true" /> Défiler pour découvrir
      </a>
    </section>
  );
}
