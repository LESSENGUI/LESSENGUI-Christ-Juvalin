"use client";

import { useState } from "react";
import { navigation, stories } from "@/lib/content";

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <a
        className="brand"
        href="/"
        aria-label="Christ Juvalin LESSENGUI — accueil"
        onClick={() => setMenuOpen(false)}
      >
        <span className="brand-mark">CJ</span>
        <span className="brand-copy">
          <strong>
            Christ Juvalin <em>LESSENGUI</em>
          </strong>
          <small>Technicien supérieur&nbsp; · &nbsp;Leader&nbsp; · &nbsp;Citoyen du monde</small>
        </span>
      </a>

      <button
        className="menu-toggle"
        type="button"
        aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((open) => !open)}
      >
        <span />
        <span />
        <span />
      </button>

      <nav className={`main-nav${menuOpen ? " is-open" : ""}`} aria-label="Navigation principale">
        {navigation.map((item) => (
          <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>
            {item.label}
          </a>
        ))}
        <details className="story-menu">
          <summary>Récits <span aria-hidden="true">⌄</span></summary>
          <div className="story-menu-panel">
            {stories.map((story) => (
              <a key={story.href} href={story.href}>
                {story.title}
              </a>
            ))}
          </div>
        </details>
        <a className="mobile-cv" href="/documents_pdf/CV%20LESSENGUI%20Christ%20Juvalin_French.pdf">
          CV en français <span aria-hidden="true">↓</span>
        </a>
      </nav>

      <a className="header-cta" href="/documents_pdf/CV%20LESSENGUI%20Christ%20Juvalin_French.pdf">
        CV en français <span aria-hidden="true">↓</span>
      </a>
    </header>
  );
}
