import Link from "next/link";

export default function NotFound() {
  return (
    <main className="detail-shell">
      <section className="container detail-content not-found-box">
        <p className="eyebrow">Page introuvable</p>
        <h1>Cette page n’existe pas.</h1>
        <p>Le contenu a été déplacé dans la nouvelle version dynamique du portfolio.</p>
        <Link className="button button-primary" href="/">
          Revenir à l’accueil
        </Link>
      </section>
    </main>
  );
}
