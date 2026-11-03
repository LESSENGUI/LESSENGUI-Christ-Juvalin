import { CinematicHero } from "@/components/cinematic-hero";
import { createPageMetadata } from "@/lib/site-seo";

export const metadata = createPageMetadata({
  title: "Industrial Maintenance and Innovation | Christ Juvalin LESSENGUI",
  description:
    "Industrial maintenance, technical reliability and innovation for organizations and communities across Congo and Africa.",
  pathname: "/en/industrial-maintenance-and-innovation",
});

export default function Page() {
  return (
    <main className="detail-shell">
      <CinematicHero
        eyebrow="Engineering · Industry · Innovation"
        title="Industrial maintenance"
        highlight="and innovation"
        description="Technical solutions built around reliability, operational efficiency and sustainable performance."
        portraitImage="/img/Lessengui%20img2.jpg"
        portraitAlt="Industrial maintenance and innovation"
        links={[
          { label: "Explore services", href: "/services" },
          { label: "Discuss a project", href: "/contact", variant: "outline" },
        ]}
      />

      <section className="container detail-content" id="about">
        <div className="detail-copy">
          <h2>Why industrial maintenance matters</h2>
          <p>
            Industrial maintenance ensures equipment availability, production continuity and
            lower risk of technical failure. It is a pillar of efficiency and organizational
            resilience.
          </p>
          <p>
            In a changing economic context, performance depends on reliability, preventive action
            and continuous improvement. These are the foundations of long-term stability.
          </p>

          <h2>Innovation in practice</h2>
          <p>
            Innovation is not only technological. It also involves diagnosis, process thinking,
            adaptation to local realities and the implementation of sustainable solutions.
          </p>

          <ul>
            <li>Technical diagnosis and root-cause analysis.</li>
            <li>Preventive and corrective maintenance.</li>
            <li>Operational performance improvement.</li>
            <li>Innovation applied to dependable industrial systems.</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
