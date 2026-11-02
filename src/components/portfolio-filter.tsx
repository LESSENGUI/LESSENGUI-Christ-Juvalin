"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { projects, publications } from "@/lib/content";

const baseCategories = ["Tous", "Applications", "Produits", "Certificats"] as const;

const publicationProjects = publications.map((publication) => ({
  title: publication.title,
  category: "Ouvrages publiés",
  image: publication.image ?? publication.editions[0]?.image,
  href: publication.href,
  description: [
    publication.status,
    publication.publisher !== "En cours" ? publication.publisher : undefined,
    publication.isbn ? `ISBN : ${publication.isbn}` : undefined,
  ]
    .filter(Boolean)
    .join(" · "),
}));

export function PortfolioFilter({ includePublishedWorks = false }: { includePublishedWorks?: boolean }) {
  const categories = includePublishedWorks
    ? [...baseCategories, "Ouvrages publiés"]
    : baseCategories;
  const [activeCategory, setActiveCategory] = useState<string>("Tous");
  const visibleProjects = useMemo(() => {
    const items = includePublishedWorks ? [...projects, ...publicationProjects] : projects;

    if (activeCategory === "Tous") {
      return items;
    }

    return items.filter((project) => project.category === activeCategory);
  }, [activeCategory, includePublishedWorks]);

  return (
    <>
      <div className="portfolio-filters" aria-label="Filtres du portfolio">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            className={category === activeCategory ? "active" : ""}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="project-grid">
        {visibleProjects.map((project) => {
          const card = (
            <>
              <div className={`project-image${project.image ? "" : " project-image-placeholder"}`}>
                {project.image ? (
                  <Image
                    src={project.image}
                    alt=""
                    fill
                    sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 33vw"
                  />
                ) : (
                  <span>Ouvrage en préparation</span>
                )}
                {project.href ? <span className="project-arrow" aria-hidden="true">↗</span> : null}
              </div>
              <div className="project-copy">
                <span>{project.category}</span>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
            </>
          );

          return project.href ? (
            <a
              className="project-card"
              href={project.href}
              key={project.title}
              target={project.href.startsWith("http") ? "_blank" : undefined}
              rel={project.href.startsWith("http") ? "noopener noreferrer" : undefined}
            >
              {card}
            </a>
          ) : (
            <article className="project-card" key={project.title}>
              {card}
            </article>
          );
        })}
      </div>
    </>
  );
}
