import { CinematicHero } from "@/components/cinematic-hero";
import { createPageMetadata } from "@/lib/site-seo";

export const metadata = createPageMetadata({
  title: "African Young Leader Christ Juvalin | LESSENGUI",
  description:
    "African young leader Christ Juvalin LESSENGUI: engineering, youth empowerment, innovation and development in Congo and across Africa.",
  pathname: "/african-young-leader-christ-juvalin",
});

export default function Page() {
  return (
    <main className="detail-shell">
      <CinematicHero
        eyebrow="Leadership · Youth · Africa"
        title="African Young Leader"
        highlight="Christ Juvalin LESSENGUI"
        description="A profile rooted in skills, responsibility and a commitment to African youth development."
        portraitImage="/img/christ1.jpg"
        portraitAlt="African young leader Christ Juvalin LESSENGUI"
        links={[
          { label: "Read biography", href: "/qui-est-christ-juvalin-lessengui" },
          { label: "Contact", href: "/contact", variant: "outline" },
        ]}
      />

      <section className="container detail-content" id="about">
        <div className="detail-copy">
          <h2>Leadership and youth impact</h2>
          <p>
            As an African young leader, Christ Juvalin LESSENGUI stands at the intersection of
            technical ability, civic commitment and youth empowerment. His contribution focuses on
            practical action that helps young people progress through learning, leadership and
            opportunity.
          </p>
          <p>
            This leadership is embodied in mentoring, community engagement, educational initiatives
            and public-interest projects that reinforce local development while contributing to a
            stronger regional outlook.
          </p>
        </div>
      </section>
    </main>
  );
}
