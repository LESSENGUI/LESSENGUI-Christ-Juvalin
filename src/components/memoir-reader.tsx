import memoirText from "@/lib/histoire-de-ma-vie.json";

type MemoirSection = {
  id: string;
  title: string;
  paragraphs: string[];
};

type MemoirChapter = MemoirSection & {
  number: string;
};

type MemoirPart = {
  id: string;
  title: string;
  subtitle: string;
  introduction: string[];
  chapters: MemoirChapter[];
};

type MemoirContent = {
  openingSections: MemoirSection[];
  parts: MemoirPart[];
  postface: MemoirSection | null;
};

const partNames = new Set([
  "PREMIÈRE PARTIE",
  "DEUXIÈME PARTIE",
  "TROISIÈME PARTIE",
  "QUATRIÈME PARTIE",
  "CINQUIÈME PARTIE",
]);

const openingSectionNames = new Set([
  "Dédicace",
  "Remerciements",
  "Avant-propos",
  "Préface",
  "Introduction",
]);

function plainHeading(block: string) {
  return block
    .replace(/^#+\s*/, "")
    .replace(/^\*+|\*+$/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function createId(value: string) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function parseMemoir(source: string): MemoirContent {
  const blocks = source
    .replace(/^\uFEFF/, "")
    .split(/\r?\n\s*\r?\n/)
    .map((block) => block.replace(/\s+/g, " ").trim())
    .filter(Boolean);
  const dedicationIndex = blocks.findIndex((block) => plainHeading(block) === "Dédicace");
  const contentBlocks = blocks.slice(Math.max(0, dedicationIndex));
  const openingSections: MemoirSection[] = [];
  const parts: MemoirPart[] = [];
  let postface: MemoirSection | null = null;
  let currentSection: MemoirSection | null = null;
  let currentPart: MemoirPart | null = null;
  let currentChapter: MemoirChapter | null = null;

  for (const block of contentBlocks) {
    const heading = plainHeading(block);
    const normalizedHeading = heading.toLocaleUpperCase("fr-FR");

    if (openingSectionNames.has(heading) || heading === "Postface") {
      currentSection = {
        id: createId(heading),
        title: heading,
        paragraphs: [],
      };
      currentChapter = null;

      if (heading === "Postface") {
        postface = currentSection;
        currentPart = null;
      } else {
        openingSections.push(currentSection);
      }
      continue;
    }

    if (partNames.has(normalizedHeading)) {
      currentPart = {
        id: createId(normalizedHeading),
        title: normalizedHeading,
        subtitle: "",
        introduction: [],
        chapters: [],
      };
      parts.push(currentPart);
      currentChapter = null;
      currentSection = null;
      continue;
    }

    const chapterMatch = heading.match(/^Chapitre\s+(\d+)\b\s*[:—–-]?\s*(.*)$/i);
    if (chapterMatch) {
      currentChapter = {
        id: createId(`chapitre-${chapterMatch[1]}-${chapterMatch[2]}`),
        number: chapterMatch[1],
        title: chapterMatch[2].trim(),
        paragraphs: [],
      };
      currentPart?.chapters.push(currentChapter);
      currentSection = null;
      continue;
    }

    const paragraph = block
      .replace(/^#{1,6}\s*/, "")
      .trim();

    if (currentChapter) {
      currentChapter.paragraphs.push(paragraph);
    } else if (currentPart) {
      if (!currentPart.subtitle) {
        currentPart.subtitle = paragraph.replace(/^\*+|\*+$/g, "").trim();
      } else {
        currentPart.introduction.push(paragraph);
      }
    } else if (postface) {
      postface.paragraphs.push(paragraph);
    } else if (currentSection) {
      currentSection.paragraphs.push(paragraph);
    }
  }

  return { openingSections, parts, postface };
}

function renderInline(text: string) {
  const tokens = /(\*\*\*.+?\*\*\*|\*\*.+?\*\*|\*[^*]+\*)/g;
  return text.split(tokens).map((token, index) => {
    if (token.startsWith("***") && token.endsWith("***")) {
      return <strong key={index}><em>{token.slice(3, -3)}</em></strong>;
    }
    if (token.startsWith("**") && token.endsWith("**")) {
      return <strong key={index}>{token.slice(2, -2)}</strong>;
    }
    if (token.startsWith("*") && token.endsWith("*")) {
      return <em key={index}>{token.slice(1, -1)}</em>;
    }
    return token;
  });
}

function MemoirParagraphs({ paragraphs }: { paragraphs: string[] }) {
  return (
    <div className="memoir-prose">
      {paragraphs.map((paragraph, index) => {
        const isQuote = paragraph.startsWith("«") || paragraph.startsWith("“");
        const className = isQuote ? "memoir-quote-paragraph" : undefined;
        return <p className={className} key={`${index}-${paragraph.slice(0, 24)}`}>{renderInline(paragraph)}</p>;
      })}
    </div>
  );
}

export function MemoirReader() {
  const memoir = parseMemoir(memoirText);

  return (
    <div className="memoir-reader">
      <blockquote className="memoir-opening-quote">
        <p>« Ceux qui renoncent écrivent l'histoire des autres... Mais ceux qui persistent écrivent la leur. »</p>
        <cite>— L.C.J.</cite>
      </blockquote>

      <section className="memoir-contents" aria-labelledby="memoir-contents-title">
        <div className="memoir-contents-heading">
          <span className="story-section-kicker">Parcourir le récit</span>
          <h2 id="memoir-contents-title">Une histoire en cinq temps</h2>
          <p>Des racines de Divenié aux engagements de demain, suivez les étapes du récit ou choisissez un chapitre.</p>
        </div>
        <nav className="memoir-contents-nav" aria-label="Sommaire du récit">
          <div className="memoir-frontmatter-links">
            {memoir.openingSections.map((section) => (
              <a href={`#${section.id}`} key={section.id}>{section.title}</a>
            ))}
          </div>
          <div className="memoir-part-index-grid">
            {memoir.parts.map((part) => (
              <div className="memoir-part-index" key={part.id}>
                <a className="memoir-part-index-title" href={`#${part.id}`}>{part.title}</a>
                <span>{part.subtitle}</span>
                <ul>
                  {part.chapters.map((chapter) => (
                    <li key={chapter.id}><a href={`#${chapter.id}`}>{chapter.number}. {chapter.title}</a></li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          {memoir.postface && <a className="memoir-postface-link" href={`#${memoir.postface.id}`}>Lire la postface</a>}
        </nav>
      </section>

      <div className="memoir-opening-sections">
        {memoir.openingSections.map((section, index) => (
          <section className={`memoir-editorial-section memoir-editorial-${section.id}`} id={section.id} key={section.id}>
            <div className="memoir-section-label">
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h2>{section.title}</h2>
            </div>
            <MemoirParagraphs paragraphs={section.paragraphs} />
          </section>
        ))}
      </div>

      <div className="memoir-parts">
        {memoir.parts.map((part, partIndex) => (
          <section className="memoir-part" id={part.id} key={part.id}>
            <header className="memoir-part-heading">
              <span className="memoir-part-number">Partie {String(partIndex + 1).padStart(2, "0")}</span>
              <h2>{part.title}</h2>
              <p className="memoir-part-subtitle">{part.subtitle}</p>
              <MemoirParagraphs paragraphs={part.introduction} />
            </header>
            <div className="memoir-chapters">
              {part.chapters.map((chapter) => (
                <article className="memoir-chapter" id={chapter.id} key={chapter.id}>
                  <div className="memoir-chapter-heading">
                    <span>Chapitre {chapter.number}</span>
                    <h3>{chapter.title}</h3>
                  </div>
                  <MemoirParagraphs paragraphs={chapter.paragraphs} />
                </article>
              ))}
            </div>
          </section>
        ))}
      </div>

      {memoir.postface && (
        <section className="memoir-editorial-section memoir-postface" id={memoir.postface.id}>
          <div className="memoir-section-label">
            <span>Fin</span>
            <h2>{memoir.postface.title}</h2>
          </div>
          <MemoirParagraphs paragraphs={memoir.postface.paragraphs} />
        </section>
      )}
    </div>
  );
}
