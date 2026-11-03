import { CinematicHero } from "@/components/cinematic-hero";
import { createPageMetadata } from "@/lib/site-seo";

export const metadata = createPageMetadata({
  title: "Industrial Maintenance in Brazzaville | Christ Juvalin LESSENGUI",
  description:
    "Industrial maintenance, technical reliability and engineering support in Brazzaville, Republic of the Congo.",
  pathname: "/en/industrial-maintenance-brazzaville",
});

export default function Page() {
  return (
    <main className="detail-shell">
      <CinematicHero
        eyebrow="Engineering · Industry · Reliability"
        title="Industrial maintenance"
        highlight="in Brazzaville"
        description="Technical expertise devoted to equipment reliability, industrial performance and productive continuity."
        portraitImage="/img/Lessengui%20img2.jpg"
        portraitAlt="Industrial maintenance profile"
        links={[
          { label: "Explore services", href: "/services" },
          { label: "Discuss a project", href: "/contact", variant: "outline" },
        ]}
      />

      <section className="container detail-content" id="about">
        <div className="detail-copy">
          <h2>Industrial maintenance and technical support</h2>
          <p>
            Industrial maintenance is a central pillar of Christ Juvalin LESSENGUI’s technical
            profile. It focuses on equipment reliability, process continuity and the reduction of
            downtime in industrial operations.
          </p>
          <p>
            This approach combines diagnostics, cause analysis, maintenance planning and a strong
            attention to operational quality. The goal is to sustain production performance while
            improving safety and long-term stability.
          </p>

          <h2>Why it matters in Africa</h2>
          <p>
            In contexts where industry and infrastructure are expanding, maintenance remains a key
            lever for productivity, resilience and sustainable economic development.
          </p>

          <ul>
            <li>Preventive and corrective maintenance.</li>
            <li>Equipment diagnosis and performance improvement.</li>
            <li>Technical continuity and industrial efficiency.</li>
            <li>Reliable project execution in technical environments.</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
