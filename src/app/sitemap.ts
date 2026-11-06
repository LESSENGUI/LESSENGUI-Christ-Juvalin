import type { MetadataRoute } from "next";
import { projectDetails, serviceDetails, storyDetails, trainings } from "@/lib/content";
import { SITE_URL } from "@/lib/site-seo";

const mainRoutes = [
  "/",
  "/a-propos",
  "/parcours",
  "/experiences",
  "/projets",
  "/formations",
  "/services",
  "/engagements",
  "/contact",
  "/qui-est-christ-juvalin-lessengui",
  "/maintenance-industrielle-brazzaville",
  "/maintenance-industrielle-et-innovation",
  "/jeune-leader-congolais",
  "/leadership-et-developpement-afrique",
  "/african-young-leader-christ-juvalin",
  "/industrial-maintenance-engineer-africa",
  "/engineering-and-innovation-africa",
  "/en/about-christ-juvalin-lessengui",
  "/en/industrial-maintenance-brazzaville",
  "/en/industrial-maintenance-and-innovation",
  "/en/african-youth-leadership",
  "/en/leadership-and-african-development",
  "/posts/fr",
  "/posts/en",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    ...mainRoutes,
    ...projectDetails.map((project) => `/portfolio/${project.slug}`),
    ...serviceDetails.map((service) => `/services/${service.slug}`),
    ...storyDetails.map((story) => `/stories/${story.slug}`),
    ...trainings.map((training) => `/formations/${training.slug}`),
  ];

  return routes.map((route) => ({
    url: new URL(route, SITE_URL).toString(),
    lastModified: new Date(),
    changefreq: route === "/" ? "weekly" : "monthly",
    priority: route === "/" ? 1 : 0.7,
  }));
}
