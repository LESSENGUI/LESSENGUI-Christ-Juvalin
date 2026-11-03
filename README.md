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

## SEO et indexation

Les métadonnées par page, URLs canoniques, cartes Open Graph/Twitter, données structurées
`WebSite`/`ProfilePage`/`Person`, sitemap, robots et fichier `llms.txt` sont générés ou
servis par l’application. Les règles robots autorisent les robots de recherche et de
récupération nommés, tout en demandant aux robots identifiés pour l’entraînement de ne pas
accéder au site. Ces règles expriment une préférence de crawl et ne constituent pas une
mesure de contrôle d’accès.

Les contenus SEO ajoutés incluent :
- pages long-tail FR/EN ciblées sur l’identité, l’ingénierie et le leadership ;
- planning éditorial sur 90 jours ;
- bios SEO prêtes à être utilisées sur LinkedIn, X, Facebook et TikTok ;
- checklist de soumission à Google Search Console et Bing Webmaster Tools.

Après déploiement, consulter [SEO-PLAN.md](./SEO-PLAN.md), [CHECKLIST-SEARCH-CONSOLE-BING.md](./CHECKLIST-SEARCH-CONSOLE-BING.md), [SEO-PROFILES-BIO.md](./SEO-PROFILES-BIO.md) et [PLAN-PUBLICATION-90-JOURS.md](./PLAN-PUBLICATION-90-JOURS.md) pour valider l’indexation et la présence publique du site.

## Formulaire de contact et e-mails

Le formulaire existant envoie les données du visiteur à `POST /api/contact`. Le serveur
utilise exclusivement le SDK Resend pour transmettre la notification à
`christlessengui01@gmail.com`, avec l’adresse du visiteur comme `Reply-To`, puis lui
adresser une confirmation. La clé API reste côté serveur. Les messages sont conservés
sans troncature dans la limite technique d’une requête de 1 Mio.

Pour le développement local, renseigner dans `.env.local` :

- `RESEND_API_KEY` : clé API Resend, uniquement côté serveur ;
- l’adresse expéditrice est fixée à `onboarding@resend.dev` dans la route de contact ;
- `CONTACT_EMAIL` : `christlessengui01@gmail.com` ;
- `URL_DU_SITE` : URL HTTPS canonique du site (`SITE_URL` reste accepté en alias).

Ne jamais versionner `.env.local` ni transmettre la clé API dans le code ou le navigateur.
En production, définir ces variables dans les paramètres Vercel (`Production`, ainsi que
`Preview` si nécessaire), puis redéployer. L’adresse de test `onboarding@resend.dev` peut
être limitée par Resend aux destinataires autorisés du compte ; pour envoyer à d’autres
destinataires, vérifier un domaine dans Resend et configurer son adresse expéditrice.

Les profils Facebook, LinkedIn, X, WhatsApp et TikTok réutilisent les liens déjà présents
dans le site. `FACEBOOK_URL`, `LINKEDIN_URL`, `X_URL`, `WHATSAPP_URL` et `TIKTOK_URL`
permettent de les remplacer. Instagram et YouTube ne sont inclus dans la confirmation que
si `INSTAGRAM_URL` et `YOUTUBE_URL` sont renseignés avec leurs véritables URL HTTPS.

La route vérifie les champs existants (nom, e-mail, objet, message), filtre un champ
honeypot, limite les soumissions à cinq par adresse IP et par fenêtre de 15 minutes et
gère les reprises avec une clé d’idempotence. Ces deux protections en mémoire sont
locales à chaque processus Node et ne constituent pas un quota partagé/durable entre
instances serverless ; pour un trafic réparti ou une exigence anti-spam renforcée,
brancher un stockage de limitation/idempotence partagé avant la mise à l’échelle. Le
serveur limite la taille de requête à 1 Mio pour protéger ses ressources, sans limiter
les champs individuellement ni tronquer leur contenu.

Après configuration, tester une soumission depuis le site et vérifier la réception dans
la boîte de réception et les spams, le `Reply-To`, puis la confirmation visiteur. Une
acceptation par l’API Resend confirme sa prise en charge, pas la livraison finale. Le
build du projet ne remplace pas ce test réel.
