import { CinematicHero } from "@/components/cinematic-hero";
import { createPageMetadata } from "@/lib/site-seo";

export const metadata = createPageMetadata({
  title: "Engineering and Innovation Africa | Christ Juvalin LESSENGUI",
  description:
    "Engineering and innovation in Africa with Christ Juvalin LESSENGUI, focused on practical solutions, development and impactful project execution.",
  pathname: "/engineering-and-innovation-africa",
});

export default function Page() {
  return (
    <main className="detail-shell">
      <CinematicHero
        eyebrow="Innovation · Engineering · Africa"
        title="Engineering and"
        highlight="innovation"
        description="Practical innovation applied to technical challenges, youth development and African growth."
        portraitImage="/img/christ1.jpg"
        portraitAlt="Engineering and innovation in Africa"
        links={[
          { label: "Explore projects", href: "/projets" },
          { label: "Contact", href: "/contact", variant: "outline" },
        ]}
      />

      <section className="container detail-content" id="about">
        <div className="detail-copy">
          <h2>Innovation for development</h2>
          <p>
            Engineering and innovation are central to the work of Christ Juvalin LESSENGUI.
            They are not only technical concerns; they also shape the capacity of African societies
            to solve problems, build skills and create sustainable opportunities.
          </p>
          <p>
            This vision combines technical execution, project thinking and community impact, helping
            convert ideas into useful solutions with visible and lasting value.
          </p>
        </div>
      </section>
    </main>
  );
}
