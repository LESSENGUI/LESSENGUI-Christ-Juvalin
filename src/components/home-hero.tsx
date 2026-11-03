"use client";

import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";
import { useEffect, useRef, useState, type PointerEvent } from "react";
import { socialLinks, type SocialIconName } from "@/lib/social-links";

const HomeHeroScene = dynamic(
  () => import("@/components/home-hero-scene").then((module) => module.HomeHeroScene),
  { ssr: false },
);

type HeroLink = {
  label: string;
  href: string;
  variant?: "outline";
};

type HeroFact = {
  value: string;
  label: string;
};

const rotatingRoles = [
  "Technicien supérieur en maintenance industrielle",
  "Électromécanicien engagé sur le terrain",
  "Leader engagé pour le développement",
  "Acteur de l’innovation et des STEM",
];

const socialMarks: Record<SocialIconName, string> = {
  facebook: "f",
  linkedin: "in",
  x: "𝕏",
  whatsapp: "↗",
  tiktok: "♪",
};

export function HomeHero({
  eyebrow,
  description,
  links,
  facts,
}: {
  eyebrow: string;
  description: string;
  links: HeroLink[];
  facts: HeroFact[];
}) {
  const [roleIndex, setRoleIndex] = useState(0);
  const profileCardRef = useRef<HTMLElement>(null);
  const reducedMotionRef = useRef(false);

  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    let interval: number | undefined;
    const syncMotionPreference = () => {
      reducedMotionRef.current = preference.matches;
      if (preference.matches) {
        window.clearInterval(interval);
        interval = undefined;
      } else if (interval === undefined) {
        interval = window.setInterval(() => {
          setRoleIndex((current) => (current + 1) % rotatingRoles.length);
        }, 3200);
      }
    };

    syncMotionPreference();
    preference.addEventListener("change", syncMotionPreference);
    return () => {
      window.clearInterval(interval);
      preference.removeEventListener("change", syncMotionPreference);
    };
  }, []);

  function handlePointerMove(event: PointerEvent<HTMLElement>) {
    if (
      reducedMotionRef.current ||
      event.pointerType === "touch" ||
      !profileCardRef.current
    ) {
      return;
    }

    const bounds = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
    const y = (event.clientY - bounds.top) / bounds.height - 0.5;
    profileCardRef.current.style.setProperty(
      "--home-tilt-x",
      `${(y * -8).toFixed(2)}deg`,
    );
    profileCardRef.current.style.setProperty(
      "--home-tilt-y",
      `${(x * 8).toFixed(2)}deg`,
    );
  }

  function resetPointerTilt() {
    profileCardRef.current?.style.setProperty("--home-tilt-x", "0deg");
    profileCardRef.current?.style.setProperty("--home-tilt-y", "0deg");
  }

  return (
    <section className="home-hero" id="hero" aria-labelledby="home-hero-title">
      <div className="home-hero__scene-layer" aria-hidden="true">
        <HomeHeroScene />
      </div>
      <div className="home-hero__ambient home-hero__ambient--one" aria-hidden="true" />
      <div className="home-hero__ambient home-hero__ambient--two" aria-hidden="true" />

      <div className="container home-hero__content">
        <div className="home-hero__cards">
          <div className="home-hero__profile-scene">
            <article
              className="home-hero__profile-card"
              onPointerMove={handlePointerMove}
              onPointerLeave={resetPointerTilt}
              ref={profileCardRef}
            >
              <div className="home-hero__portrait">
                <Image
                  src="/img/Lessengui%20img2.jpg"
                  alt="Portrait de Christ Juvalin LESSENGUI en tenue professionnelle"
                  fill
                  priority
                  sizes="(max-width: 700px) 76vw, 290px"
                />
                <span className="home-hero__portrait-glow" aria-hidden="true" />
                <span className="home-hero__portrait-tag">
                  Brazzaville <i>·</i> Congo
                </span>
              </div>
              <div className="home-hero__profile-copy">
                <div>
                  <h2>Christ Juvalin LESSENGUI</h2>
                  <p>Technicien supérieur · Leader · Innovateur</p>
                </div>
                <span className="home-hero__initials" aria-hidden="true">CJ</span>
              </div>
            </article>
          </div>

          <div className="home-hero__intro-card">
            <div className="home-hero__location">
              <span aria-hidden="true" />
              Basé à Brazzaville, République du Congo
            </div>
            <p className="home-hero__eyebrow">{eyebrow}</p>
            <h1 id="home-hero-title">
              Bonjour, moi c’est
              <span>Christ Juvalin LESSENGUI</span>
            </h1>
            <p
              className="home-hero__role-line"
              aria-label={`${rotatingRoles.join(", ")}`}
            >
              <span className="home-hero__role-prefix">Au croisement de</span>
              <span className="home-hero__role" aria-hidden="true" key={roleIndex}>
                {rotatingRoles[roleIndex]}
              </span>
            </p>
            <p className="home-hero__description">{description}</p>

            <div className="home-hero__socials" aria-label="Réseaux sociaux">
              {socialLinks.map((social) => (
                <a
                  className="home-hero__social"
                  href={social.href}
                  key={social.name}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Ouvrir mon profil ${social.name} dans un nouvel onglet`}
                  title={social.name}
                >
                  <span aria-hidden="true">{socialMarks[social.icon]}</span>
                </a>
              ))}
            </div>

            <div className="home-hero__actions">
              {links.map((link, index) => (
                <Link
                  className={`button ${link.variant === "outline" || index > 0 ? "button-outline" : "button-primary"} home-hero__button`}
                  href={link.href}
                  key={`${link.href}-${link.label}`}
                >
                  {link.label}
                  <span aria-hidden="true">↗</span>
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="home-hero__bottom">
          <div className="home-hero__facts" aria-label="Repères de mon parcours">
            {facts.map((fact) => (
              <div className="home-hero__fact" key={fact.label}>
                <strong>{fact.value}</strong>
                <span>{fact.label}</span>
              </div>
            ))}
          </div>
          <a className="home-hero__scroll" href="#about">
            <span aria-hidden="true">↓</span>
            Défiler pour découvrir
          </a>
        </div>
      </div>
    </section>
  );
}
