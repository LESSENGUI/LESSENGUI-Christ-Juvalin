import { CinematicHero } from "@/components/cinematic-hero";
import { createPageMetadata } from "@/lib/site-seo";

export const metadata = createPageMetadata({
  title: "12-Week SEO Content Plan | Christ Juvalin LESSENGUI",
  description:
    "Weekly social and SEO publication roadmap for Christ Juvalin LESSENGUI across 12 weeks.",
  pathname: "/posts/en",
});

export default function Page() {
  return (
    <main className="detail-shell">
      <CinematicHero
        eyebrow="SEO · Social media · Visibility"
        title="12-week content"
        highlight="roadmap"
        description="A publishing plan designed to expand online visibility, strengthen authority and support brand credibility."
        portraitImage="/img/christ1.jpg"
        portraitAlt="12-week SEO roadmap for Christ Juvalin LESSENGUI"
        links={[
          { label: "Visit site", href: "/" },
          { label: "Contact", href: "/contact", variant: "outline" },
        ]}
      />

      <section className="container detail-content" id="about">
        <div className="detail-copy">
          <h2>Objective</h2>
          <p>
            Publish useful, professional and consistent content in order to improve search visibility,
            increase engagement and reinforce the credibility of Christ Juvalin LESSENGUI across
            professional networks.
          </p>

          <h2>Key weekly themes</h2>
          <ul>
            <li>Who is Christ Juvalin LESSENGUI?</li>
            <li>Industrial maintenance in Congo</li>
            <li>Youth leadership in Africa</li>
            <li>STEM and innovation</li>
            <li>Project management and development</li>
            <li>Technology and innovation in Africa</li>
            <li>Professional journey</li>
            <li>Civic engagement and local development</li>
            <li>Engineering and community value</li>
            <li>Empowering the youth</li>
            <li>Africa’s future vision</li>
            <li>Leadership, innovation and impact</li>
          </ul>

          <p>
            Each post should be rooted in verifiable information and linked to the official website.
          </p>
        </div>
      </section>
    </main>
  );
}
