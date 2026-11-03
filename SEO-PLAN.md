# Audit SEO, GEO et plan de suivi

Audit du code source réalisé le 2 novembre 2026. Le site officiel configuré est
`https://lessengui-christ-juvalin.vercel.app`.

## Audit technique

- Le site utilise Next.js App Router, avec les pages principales et pages de détail rendues
  depuis `src/app/`.
- Avant cette intervention, les métadonnées étaient limitées au titre, à la description et
  aux icônes du layout. Les pages de sections et de détails n’avaient pas de métadonnées
  spécifiques, de sitemap ou de politique robots explicite.
- Le contenu source contient une biographie, une formation, des expériences, cinq domaines
  de compétences, des engagements et des publications; les profils sociaux sont déjà liés
  depuis le site.
- Les principales pages existent en français. Aucune version anglaise vérifiée n’est
  disponible dans le projet : aucun `hreflang` vers une traduction non publiée n’est ajouté.
- Aucun identifiant Google Search Console, Bing Webmaster Tools, GA4 ou clé IndexNow n’est
  configuré. Aucune donnée de trafic, d’indexation ou de Core Web Vitals n’est disponible
  dans le dépôt; l’indexation et les seuils de performance ne peuvent donc pas être affirmés.

## Changements réalisés

- Métadonnées françaises avec titre, description, canonical, Open Graph, Twitter Cards et
  consignes d’indexation, y compris pour les pages dynamiques.
- Données structurées JSON-LD `WebSite`, `ProfilePage` et `Person`, fondées sur les
  informations et profils présents dans le projet.
- `/sitemap.xml`, `/robots.txt` et `/llms.txt`.
- Autorisation des robots de recherche et de récupération documentés; refus explicite des
  robots nommés comme collecte pour l’entraînement. Les préférences robots sont une demande
  aux crawlers, pas une garantie technique d’exclusion.
- Sur l’accueil, les réalisations reprennent les mêmes projets, certificats et publications
  que la page Projets. Les ouvrages publiés sont différenciés des manuscrits en cours.
- La section Savoir-faire présente ses cinq domaines en cartes plus lisibles et adaptées au
  mobile.

## Robots : choix de visibilité

| Robots | Règle | Usage documenté |
|---|---|---|
| Googlebot, Bingbot | Autorisé | Exploration des moteurs de recherche |
| OAI-SearchBot, ChatGPT-User | Autorisés | Recherche et récupération à la demande |
| GPTBot | Bloqué | Exploration pouvant contribuer à l’entraînement OpenAI |
| Claude-SearchBot, Claude-User | Autorisés | Recherche et récupération à la demande |
| ClaudeBot | Bloqué | Exploration pouvant contribuer à l’entraînement Anthropic |
| PerplexityBot, Perplexity-User | Autorisés | Recherche et récupération à la demande |
| Google-Extended | Bloqué | Préférence de limitation d’usage pour les produits génératifs Google |
| Autres crawlers | Autorisés par défaut | Règle générale `User-agent: *` |

Références officielles consultées :
[Google Search Central — crawlers](https://developers.google.com/crawling/docs/crawlers-fetchers/overview-google-crawlers),
[OpenAI — crawlers](https://developers.openai.com/api/docs/bots),
[Anthropic — crawlers](https://support.claude.com/en/articles/8896518-does-anthropic-crawl-data-from-the-web-and-how-can-site-owners-block-the-crawler),
[Perplexity — crawlers](https://docs.perplexity.ai/docs/resources/perplexity-crawlers.md).

## Actions manuelles après déploiement

1. Vérifier les réponses HTTP et le rendu public de `/robots.txt`, `/sitemap.xml` et
   `/llms.txt`, puis soumettre le sitemap dans Google Search Console et Bing Webmaster Tools.
2. Vérifier la propriété du domaine dans ces outils; ajouter leurs jetons de vérification
   uniquement depuis les comptes du propriétaire.
3. Tester le JSON-LD avec Schema Markup Validator et Rich Results Test. Les données `Person`
   ne garantissent pas la création d’un Knowledge Panel.
4. Si une mesure d’audience est souhaitée, fournir un identifiant GA4 et valider le
   consentement et la politique de confidentialité avant d’ajouter le suivi. Créer une clé
   IndexNow seulement si ce canal est choisi et configuré côté déploiement.
5. Mesurer les Core Web Vitals sur les pages déployées avec PageSpeed Insights et Search
   Console; intervenir seulement à partir de résultats réels.
6. Vérifier trimestriellement les biographies, dates, références de publication, liens
   sociaux et règles de robots. Refaire une vérification des bots lors d’un changement de
   politique des plateformes.

## Calendrier éditorial sur six mois

Publier au plus un contenu de fond par mois, relu et appuyé par des pièces ou des liens
vérifiables. Chaque contenu devra répondre à une question concrète, renvoyer vers les pages
sources du portfolio et être relayé par les profils publics existants.

| Mois | Sujet et requête de longue traîne | Sources de première main à mobiliser |
|---|---|---|
| 1 | Qui est Christ Juvalin LESSENGUI ? Parcours et formation au Congo | Biographie, parcours, CV et diplômes publiables |
| 2 | Maintenance industrielle et diagnostic mécanique à Brazzaville | Expérience de stage BRALICO et réalisations techniques publiables |
| 3 | Structurer et suivre un projet de développement en Afrique centrale | Formation IDEP et expériences de coordination documentées |
| 4 | Initiation STEM, codage et robotique pour les jeunes congolais | Activités de formation et engagements publiés |
| 5 | Publications de Christ Juvalin LESSENGUI : sujets, ISBN et éditeurs | Notices éditeur existantes; vérifier chaque référence avant publication |
| 6 | Leadership des jeunes et engagement communautaire au Congo | Rôles associatifs et récits d’activités datés |

Ne pas créer de faux témoignages, affiliations, citations, profils académiques ni backlinks.
Développer les citations externes par des contributions réelles auprès d’universités,
d’organisations et de médias; ne lier que des profils effectivement détenus et vérifiés.

## Suivi mensuel

Dans Search Console et Bing Webmaster Tools, suivre la couverture et l’indexation, les
impressions, clics, requêtes liées au nom, pages d’entrée, erreurs d’exploration et Core
Web Vitals. Consigner séparément les références externes acquises et les performances
PageSpeed. Les impressions des moteurs IA et citations ne sont mesurables que lorsque la
plateforme fournit des données fiables. Aucun rang, référencement acquis ou citation IA
n’est garanti par les modifications du code.
