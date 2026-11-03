import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Christ Juvalin LESSENGUI",
    short_name: "CJ LESSENGUI",
    description:
      "Site officiel de Christ Juvalin LESSENGUI, technicien supérieur congolais en maintenance industrielle et électromécanicien, leader de jeunesse et acteur du développement en Afrique.",
    start_url: "/",
    display: "standalone",
    background_color: "#f5faf7",
    theme_color: "#078c54",
    lang: "fr-CG",
    icons: [
      {
        src: "/assets/img/favicon.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/assets/img/apple-touch-icon.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
