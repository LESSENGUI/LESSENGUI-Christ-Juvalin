import Link from "next/link";
import { SiteLanguage } from "@/components/site-language";

const socialLinks = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/christjuvalin.lessengui",
    icon: "facebook",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/christ-juvalin-lessengui-aa4843299",
    icon: "linkedin",
  },
  {
    name: "X",
    href: "https://x.com/LESSENGUI_C_J",
    icon: "x",
  },
  {
    name: "WhatsApp",
    href: "https://wa.me/message/2VWPINXB6L34A1",
    icon: "whatsapp",
  },
  {
    name: "TikTok",
    href: "https://tiktok.com/@christjuvalin1",
    icon: "tiktok",
  },
] as const;

function SocialIcon({ name }: { name: (typeof socialLinks)[number]["icon"] }) {
  const commonProps = {
    "aria-hidden": true as const,
    fill: "currentColor",
    viewBox: "0 0 24 24",
  };

  switch (name) {
    case "facebook":
      return (
        <svg {...commonProps}>
          <path d="M13.45 21v-8.2h2.76l.41-3.2h-3.17V7.56c0-.93.26-1.56 1.59-1.56h1.7V3.14c-.3-.04-1.33-.14-2.53-.14-2.5 0-4.21 1.52-4.21 4.31V9.6H7.17v3.2H10V21h3.45Z" />
        </svg>
      );
    case "linkedin":
      return (
        <svg {...commonProps}>
          <path d="M5.16 7.54a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM3.44 9h3.43v11H3.44V9Zm5.58 0h3.29v1.5h.05c.46-.87 1.58-1.78 3.25-1.78 3.48 0 4.12 2.29 4.12 5.26V20h-3.43v-5.34c0-1.28-.02-2.92-1.78-2.92-1.78 0-2.05 1.39-2.05 2.83V20H9.02V9Z" />
        </svg>
      );
    case "x":
      return (
        <svg {...commonProps}>
          <path d="M18.9 2H22l-6.78 7.75L23.2 22h-6.25l-4.9-7.4L5.58 22H2.45l7.25-8.3L1.8 2h6.4l4.42 6.75L18.9 2Zm-1.1 18h1.73L7.28 3.9H5.42L17.8 20Z" />
        </svg>
      );
    case "whatsapp":
      return (
        <svg {...commonProps}>
          <path d="M12.04 2a9.86 9.86 0 0 0-8.45 14.96L2 22l5.2-1.36A9.93 9.93 0 1 0 12.04 2Zm0 18.1a8.18 8.18 0 0 1-4.17-1.14l-.3-.18-3.09.81.82-3.01-.2-.31a8.18 8.18 0 1 1 6.94 3.83Zm4.49-6.13c-.25-.13-1.48-.73-1.71-.81-.23-.08-.4-.13-.57.13-.17.25-.65.81-.8.98-.15.17-.3.19-.55.06-.25-.13-1.06-.39-2.02-1.24-.75-.67-1.25-1.49-1.4-1.74-.14-.25-.01-.39.11-.52.11-.11.25-.3.38-.44.12-.15.16-.25.25-.42.08-.17.04-.32-.02-.44-.07-.13-.57-1.37-.78-1.87-.2-.49-.41-.42-.57-.43h-.49c-.17 0-.44.06-.67.32-.23.25-.88.86-.88 2.1 0 1.23.9 2.42 1.02 2.59.13.17 1.77 2.7 4.29 3.79.6.26 1.07.42 1.44.54.61.19 1.16.16 1.59.1.49-.07 1.48-.61 1.69-1.2.21-.59.21-1.1.15-1.2-.06-.1-.23-.16-.49-.29Z" />
        </svg>
      );
    case "tiktok":
      return (
        <svg {...commonProps}>
          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.33V2h-3.45v13.67a2.9 2.9 0 0 1-2.9 2.78 2.9 2.9 0 0 1-2.9-2.9 2.9 2.9 0 0 1 2.9-2.9c.3 0 .6.05.88.14V9.27a6.3 6.3 0 0 0-.88-.06A6.34 6.34 0 0 0 3.13 15.55 6.34 6.34 0 0 0 9.47 21.9a6.34 6.34 0 0 0 6.34-6.34V8.62a8.2 8.2 0 0 0 4.78 1.53V6.72a4.8 4.8 0 0 1-1-.03Z" />
        </svg>
      );
  }
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div className="footer-identity">
          <Link className="footer-brand" href="/" aria-label="Christ Juvalin LESSENGUI — accueil">
            <span className="brand-mark">CJ</span>
            <span>Christ Juvalin <strong>LESSENGUI</strong></span>
          </Link>
          <p>
            Ingénierie, innovation et engagement au service des communautés.
            Basé à Brazzaville, République du Congo.
          </p>
          <a className="footer-email" href="mailto:juvalinlessengui@gmail.com">
            juvalinlessengui@gmail.com <span aria-hidden="true">↗</span>
          </a>
          <SiteLanguage />
        </div>

        <div className="footer-navigation">
          <h2>Navigation</h2>
          <Link href="/a-propos">À propos</Link>
          <Link href="/parcours">Parcours</Link>
          <Link href="/projets">Projets</Link>
          <Link href="/services">Services</Link>
          <Link href="/contact">Contact</Link>
        </div>

        <div className="footer-social">
          <h2>Restons en contact</h2>
          <p>Retrouvez-moi sur les réseaux sociaux.</p>
          <div className="social-links">
            {socialLinks.map((social) => (
              <a
                className={`social-link social-${social.icon}`}
                href={social.href}
                key={social.name}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Ouvrir mon profil ${social.name} dans un nouvel onglet`}
                title={social.name}
              >
                <SocialIcon name={social.icon} />
              </a>
            ))}
            <a
              className="social-link social-gmail"
              href="https://mail.google.com/mail/?view=cm&fs=1&to=juvalinlessengui@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Écrire un e-mail avec Gmail dans un nouvel onglet"
              title="Gmail"
            >
              <svg aria-hidden="true" viewBox="0 0 24 24">
                <path d="M3 6.5V18h2.5V9.1L12 14l6.5-4.9V18H21V6.5c0-1.6-1.8-2.5-3.1-1.5L12 9.5 6.1 5C4.8 4 3 4.9 3 6.5Z" fill="#EA4335" />
                <path d="M3 6.5V18h2.5V9.1L3 7.2v-.7Z" fill="#4285F4" />
                <path d="M18.5 9.1V18H21V6.5c0-1.6-1.8-2.5-3.1-1.5L16 6.4l2.5 1.9v.8Z" fill="#34A853" />
                <path d="m3 6.5 2.5 1.9V9.1L3 7.2v-.7Z" fill="#C5221F" />
                <path d="m16 6.4 1.9-1.4c1.3-1 3.1-.1 3.1 1.5v.7l-2.5 1.9V8.3L16 6.4Z" fill="#FBBC04" />
              </svg>
            </a>
          </div>
          <a className="footer-whatsapp" href="https://wa.me/message/2VWPINXB6L34A1" target="_blank" rel="noopener noreferrer">
            <span aria-hidden="true">↗</span> Me contacter sur WhatsApp
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Christ Juvalin LESSENGUI</span>
        <span>Ingénierie <i>·</i> Innovation <i>·</i> Leadership</span>
        <a href="#top">Retour en haut <span aria-hidden="true">↑</span></a>
      </div>
    </footer>
  );
}
