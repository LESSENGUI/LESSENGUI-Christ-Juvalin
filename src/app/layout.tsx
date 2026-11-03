import type { Metadata } from "next";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { getCanonicalUrl, getPersonStructuredData, SITE_NAME, SITE_URL } from "@/lib/site-seo";
import "./globals.css";

const homepageUrl = getCanonicalUrl("/");
const ogImageUrl = getCanonicalUrl("/img/christ1.jpg");

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Christ Juvalin LESSENGUI | Technicien supérieur & jeune leader au Congo",
    template: "%s | Christ Juvalin LESSENGUI",
  },
  description:
    "Site officiel de Christ Juvalin LESSENGUI, technicien supérieur congolais en maintenance industrielle et électromécanicien engagé dans l’innovation, les projets et le leadership des jeunes à Brazzaville.",
  applicationName: SITE_NAME,
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  keywords: [
    "LESSENGUI Christ Juvalin",
    "Christ Juvalin LESSENGUI",
    "Christ LESSENGUI",
    "LESSENGUI Congo Brazzaville",
    "Christ Juvalin Congo",
    "technicien supérieur en maintenance industrielle au Congo",
    "électromécanicien à Brazzaville",
    "leadership de la jeunesse congolaise",
    "innovation et formation STEM en Afrique",
    "Brazzaville, République du Congo",
  ],
  alternates: { canonical: homepageUrl },
  openGraph: {
    type: "website",
    locale: "fr_CG",
    siteName: SITE_NAME,
    title: "Christ Juvalin LESSENGUI | Technicien supérieur & jeune leader au Congo",
    description:
      "Parcours, compétences, projets, publications et engagements de Christ Juvalin LESSENGUI à Brazzaville, République du Congo.",
    url: homepageUrl,
    images: [
      {
        url: ogImageUrl,
        alt: "Christ Juvalin LESSENGUI",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Christ Juvalin LESSENGUI | Technicien supérieur & jeune leader au Congo",
    description:
      "Parcours, compétences, projets, publications et engagements de Christ Juvalin LESSENGUI.",
    images: [ogImageUrl],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/assets/img/favicon.png",
    apple: "/assets/img/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr-CG">
      <body id="top">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(getPersonStructuredData()).replace(/</g, "\\u003c"),
          }}
        />
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
