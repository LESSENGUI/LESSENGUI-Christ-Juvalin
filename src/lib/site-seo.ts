import type { Metadata } from "next";

export const SITE_URL = "https://lessengui-christ-juvalin.vercel.app";
export const SITE_NAME = "Christ Juvalin LESSENGUI";
export const DEFAULT_SOCIAL_IMAGE = "/img/christ1.jpg";

export const socialProfiles = [
  "https://www.facebook.com/christjuvalin.lessengui",
  "https://www.linkedin.com/in/christ-juvalin-lessengui-aa4843299",
  "https://x.com/LESSENGUI_C_J",
  "https://tiktok.com/@christjuvalin1",
];

export function getCanonicalUrl(pathname: string) {
  return new URL(pathname, SITE_URL).toString();
}

export function getPersonStructuredData() {
  const personId = `${SITE_URL}/#person`;
  const websiteId = `${SITE_URL}/#website`;
  const socialImageUrl = new URL(DEFAULT_SOCIAL_IMAGE, SITE_URL).toString();

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": websiteId,
        url: SITE_URL,
        name: SITE_NAME,
        inLanguage: "fr-CG",
        publisher: { "@id": personId },
        image: socialImageUrl,
        potentialAction: {
          "@type": "SearchAction",
          target: `https://www.google.com/search?q=${encodeURIComponent(SITE_NAME)}`,
          "query-input": "required name=q",
        },
      },
      {
        "@type": "ProfilePage",
        "@id": `${SITE_URL}/#webpage`,
        url: SITE_URL,
        name: `Profil officiel de ${SITE_NAME}`,
        inLanguage: "fr-CG",
        isPartOf: { "@id": websiteId },
        mainEntity: { "@id": personId },
      },
      {
        "@type": "Person",
        "@id": personId,
        name: SITE_NAME,
        alternateName: [
          "LESSENGUI Christ Juvalin",
          "Christ LESSENGUI",
          "LESSENGUI Juvalin",
          "Christ Juvalin Congo",
        ],
        url: SITE_URL,
        image: socialImageUrl,
        description:
          "Technicien supérieur congolais en maintenance industrielle et électromécanicien, engagé dans l’innovation, la formation STEM et le leadership des jeunes au Congo et en Afrique.",
        jobTitle: "Technicien supérieur en maintenance industrielle / Électromécanicien",
        knowsAbout: [
          "Maintenance industrielle",
          "Mécanique industrielle",
          "Gestion de projets",
          "Leadership et gouvernance",
          "Innovation numérique",
          "Formation STEM et développement de la jeunesse",
        ],
        homeLocation: {
          "@type": "Place",
          name: "Brazzaville, République du Congo",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Brazzaville",
            addressCountry: "CG",
          },
        },
        sameAs: socialProfiles,
      },
    ],
  };
}

export function createPageMetadata({
  title,
  description,
  pathname,
}: {
  title: string;
  description: string;
  pathname: string;
}): Metadata {
  const canonicalUrl = getCanonicalUrl(pathname);
  const imageUrl = new URL(DEFAULT_SOCIAL_IMAGE, SITE_URL).toString();
  const image = {
    url: imageUrl,
    alt: `Christ Juvalin LESSENGUI — ${title}`,
  };

  return {
    title,
    description,
    alternates: { canonical: canonicalUrl },
    openGraph: {
      type: "website",
      locale: "fr_CG",
      siteName: SITE_NAME,
      title,
      description,
      url: canonicalUrl,
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },
  };
}
