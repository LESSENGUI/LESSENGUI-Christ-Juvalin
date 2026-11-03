import { CinematicHero } from "@/components/cinematic-hero";
import { createPageMetadata } from "@/lib/site-seo";

export const metadata = createPageMetadata({
  title: "About Christ Juvalin LESSENGUI",
  description:
    "Learn about Christ Juvalin LESSENGUI, a Congolese higher technician in industrial maintenance and electromechanic, youth leader and innovation advocate in Africa.",
  pathname: "/en/about-christ-juvalin-lessengui",
});

export default function Page() {
  return (
    <main className="detail-shell">
      <CinematicHero
        eyebrow="Profile · Technician & leader"
        title="About"
        highlight="Christ Juvalin LESSENGUI"
        description="A Congolese professional focused on industrial maintenance, project execution, youth leadership and sustainable innovation."
        portraitImage="/img/christ1.jpg"
        portraitAlt="Christ Juvalin LESSENGUI portrait"
        links={[
          { label: "View journey", href: "/parcours" },
          { label: "Contact", href: "/contact", variant: "outline" },
        ]}
      />

      <section className="container detail-content" id="about">
        <div className="detail-copy">
          <h2>Biography</h2>
          <p>
            Christ Juvalin LESSENGUI is a Congolese higher technician in industrial maintenance
            and electromechanic working at the intersection of technical practice, youth
            leadership and innovation. His work is
            rooted in practical execution, technical understanding and measurable impact.
          </p>
          <p>
            With a strong interest in technical problem-solving and development projects, he
            contributes to initiatives that improve industrial performance, increase skills and
            support the growth of young people in Central Africa.
          </p>
          <p>
            He is especially committed to combining technical expertise with community impact,
            helping to build a more competent and resilient future for Africa.
          </p>

          <h2>Core domains</h2>
          <ul>
            <li>Industrial maintenance and technical reliability.</li>
            <li>Project coordination and execution.</li>
            <li>Youth engagement and leadership.</li>
            <li>STEM education and digital innovation.</li>
            <li>Community development and governance.</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
