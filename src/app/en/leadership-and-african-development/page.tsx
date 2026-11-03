import { CinematicHero } from "@/components/cinematic-hero";
import { createPageMetadata } from "@/lib/site-seo";

export const metadata = createPageMetadata({
  title: "Leadership and African Development | Christ Juvalin LESSENGUI",
  description:
    "Leadership, youth empowerment and sustainable development in Africa, through the work of Christ Juvalin LESSENGUI.",
  pathname: "/en/leadership-and-african-development",
});

export default function Page() {
  return (
    <main className="detail-shell">
      <CinematicHero
        eyebrow="Leadership · Development · Africa"
        title="Leadership and"
        highlight="development"
        description="A leadership approach centered on community impact, skills-building and sustainable progress."
        portraitImage="/img/christ2.jpg"
        portraitAlt="Leadership and African development"
        links={[
          { label: "Read engagements", href: "/engagements" },
          { label: "Contact", href: "/contact", variant: "outline" },
        ]}
      />

      <section className="container detail-content" id="about">
        <div className="detail-copy">
          <h2>Leadership for transformation</h2>
          <p>
            Leadership is most valuable when it turns into tangible action: teaching, organizing,
            mobilizing talent and designing practical solutions for real community needs.
          </p>
          <p>
            In Africa, youth leadership remains one of the most important levers for change. It
            enables communities to build capacity, create opportunities and embrace a more
            sustainable future.
          </p>

          <ul>
            <li>Responsible youth leadership.</li>
            <li>Education and skill-building.</li>
            <li>Civic engagement and impact-driven action.</li>
            <li>Innovation for sustainable development.</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
