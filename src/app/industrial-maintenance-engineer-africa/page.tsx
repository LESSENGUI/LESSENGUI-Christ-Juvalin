import { CinematicHero } from "@/components/cinematic-hero";
import { createPageMetadata } from "@/lib/site-seo";

export const metadata = createPageMetadata({
  title: "Industrial Maintenance Technician Africa | Christ Juvalin LESSENGUI",
  description:
    "Industrial maintenance technician in Africa: technical reliability, optimization and electromechanical practice in the Congolese and African context.",
  pathname: "/industrial-maintenance-engineer-africa",
});

export default function Page() {
  return (
    <main className="detail-shell">
      <CinematicHero
        eyebrow="Industry · Electromechanics · Africa"
        title="Industrial maintenance"
        highlight="technician"
        description="Technical expertise oriented toward reliability, performance, and the modernization of industrial operations."
        portraitImage="/img/Lessengui%20img1.jpg"
        portraitAlt="Christ Juvalin LESSENGUI, higher technician in industrial maintenance"
        links={[
          { label: "View services", href: "/services" },
          { label: "Contact", href: "/contact", variant: "outline" },
        ]}
      />

      <section className="container detail-content" id="about">
        <div className="detail-copy">
          <h2>Industrial maintenance in the African context</h2>
          <p>
            In Africa, industrial maintenance is essential for building resilient, productive and
            efficient technical systems. It helps reduce downtime, improve quality and support the
            continuity of operations in dynamic environments.
          </p>
          <p>
            Christ Juvalin LESSENGUI’s profile reflects this approach by combining technical
            knowledge with practical follow-up, systems thinking and an ongoing effort to improve
            industrial reliability.
          </p>
        </div>
      </section>
    </main>
  );
}
