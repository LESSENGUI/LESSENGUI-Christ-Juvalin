import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      { source: "/index.html", destination: "/", permanent: true },
      { source: "/deep0.html", destination: "/stories/histoire-de-ma-vie", permanent: true },
      { source: "/deep1.html", destination: "/stories/engagements-leadership", permanent: true },
      { source: "/deep2.html", destination: "/stories/activites-realisees", permanent: true },
      { source: "/deep3.html", destination: "/stories/parcours-personnel", permanent: true },
      { source: "/deep4.html", destination: "/stories/transition-ecologique", permanent: true },
      { source: "/deep5.html", destination: "/stories/impact-developpement", permanent: true },
      { source: "/service-consulting.html", destination: "/services/innovation-technologique", permanent: true },
      { source: "/service-gestion.html", destination: "/services/gestion-projets", permanent: true },
      { source: "/service-web.html", destination: "/services/developpement-web-digital", permanent: true },
      { source: "/service-stem.html", destination: "/services/formation-stem-robotique", permanent: true },
      { source: "/service-maintenance.html", destination: "/services/maintenance-industrielle", permanent: true },
      { source: "/service-leadership.html", destination: "/services/leadership-gouvernance", permanent: true },
      { source: "/portfolio-app-1.html", destination: "/portfolio/systeme-gmao-cloud", permanent: true },
      { source: "/portfolio-app-2.html", destination: "/portfolio/dashboard-analytics-temps-reel", permanent: true },
      { source: "/portfolio-app-3.html", destination: "/portfolio/plateforme-formation-elearning", permanent: true },
      { source: "/portfolio-product-1.html", destination: "/portfolio/plateforme-ecommerce-securisee", permanent: true },
      { source: "/portfolio-product-2.html", destination: "/portfolio/crm-intelligent", permanent: true },
      { source: "/portfolio-product-3.html", destination: "/portfolio/systeme-erp-modulaire", permanent: true },
      { source: "/portfolio-details.html", destination: "/portfolio/certificat-idep-gestion-projets", permanent: true },
      { source: "/portfolio-cert-ausp.html", destination: "/portfolio/nomination-au-parlement-ausp", permanent: true },
      { source: "/portfolio-cert-leadership-2023.html", destination: "/portfolio/leadership-gouvernance-2023", permanent: true },
      { source: "/portfolio-cert-ausp-leadership.html", destination: "/portfolio/certificat-leadership-ausp", permanent: true },
      { source: "/portfolio-cert-2022.html", destination: "/portfolio/certificat-leadership-2022", permanent: true },
      { source: "/portfolio-cert-perspectives.html", destination: "/portfolio/perspectives-entrepreneuriales", permanent: true },
      { source: "/portfolio-cert-pad.html", destination: "/portfolio/economie-developpement-pad", permanent: true },
      { source: "/portfolio-book-agile.html", destination: "/projets#publications", permanent: true },
      { source: "/portfolio-book-innovation.html", destination: "/projets#publications", permanent: true },
      { source: "/ai", destination: "/projets#intelligence-artificielle", permanent: true },
      { source: "/ai/:slug", destination: "/projets#intelligence-artificielle", permanent: true },
      { source: "/portfolio/guide-gestion-projets-agiles", destination: "/projets#publications", permanent: true },
      { source: "/portfolio/innovation-technologique-africaine", destination: "/projets#publications", permanent: true },
      { source: "/portfolio/gouvernance-citoyennete", destination: "/projets#publications", permanent: true },
    ];
  },
};

export default nextConfig;
