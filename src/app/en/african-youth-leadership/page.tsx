import { CinematicHero } from "@/components/cinematic-hero";
import { createPageMetadata } from "@/lib/site-seo";

export const metadata = createPageMetadata({
  title: "African Youth Leadership | Christ Juvalin LESSENGUI",
  description:
    "African youth leadership, civic engagement and development initiatives led by Christ Juvalin LESSENGUI in Congo and across Africa.",
  pathname: "/en/african-youth-leadership",
});

export default function Page() {
  return (
    <main className="detail-shell">
      <CinematicHero
        eyebrow="Leadership · Youth · Development"
        title="African youth"
        highlight="leadership"
        description="A leadership model focused on action, empowerment, education and social transformation."
        portraitImage="/img/christ2.jpg"
        portraitAlt="Youth leadership portrait"
        links={[
          { label: "Read engagements", href: "/engagements" },
          { label: "Contact", href: "/contact", variant: "outline" },
        ]}
      />

      <section className="container detail-content" id="about">
        <div className="detail-copy">
          <h2>Youth leadership and community impact</h2>
          <p>
            Christ Juvalin LESSENGUI believes that leadership is not only about influence, but
            also about responsibility, service and practical action. Youth leadership is one of the
            keys to sustainable social transformation in African societies.
          </p>
          <p>
            Through project work, civic engagement, skill-building and education, he contributes to
            a stronger culture of participation, responsibility and opportunity for young people.
          </p>

          <h2>Impact areas</h2>
          <ul>
            <li>Youth empowerment and skills development.</li>
            <li>STEM education and digital literacy.</li>
            <li>Civic engagement and local leadership.</li>
            <li>Sustainable, inclusive development.</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
