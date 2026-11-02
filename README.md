# Portfolio — Christ Juvalin LESSENGUI

Portfolio construit avec Next.js App Router, React et TypeScript. L’accueil et chaque page
de récit, de projet et de service possèdent un hero cinématique avec une photographie
adaptée, un décor industriel, une accroche et des liens d’action. Le fond industriel est
conservé localement dans `public/assets/img/industrial-hero.jpg`.

## Démarrage

```bash
npm install
npm run dev
```

Ouvrir ensuite [http://localhost:3000](http://localhost:3000).

Depuis le dossier parent du projet, les mêmes commandes sont disponibles via les scripts
racine `npm run dev`, `npm run build` et `npm run typecheck`.

## Vérifications et production

```bash
npm run typecheck
npm run build
npm start
```

Le portfolio principal est organisé en sections dans `src/app/page.tsx`. Les contenus
réutilisables sont centralisés dans `src/lib/content.ts`, et les composants de navigation
et de contact dans `src/components/`. Le composant `src/components/cinematic-hero.tsx`
assure une identité cohérente sur les routes dynamiques de projets, de services et de récits.
Les anciens fichiers HTML des pages converties ont été supprimés ; leurs anciennes URL
redirigent vers les routes Next.js correspondantes. Les pages historiques non converties
restent conservées.
