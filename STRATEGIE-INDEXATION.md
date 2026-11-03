# Étape 3 — Plan de soumission et validation Search Console / Bing

## Objectif
Valider la présence du site sur les moteurs de recherche, contrôler son indexation, et sécuriser les informations de propriété du domaine.

## 1) Pré-requis
- Vérifier que le site est bien déployé sur Vercel.
- Vérifier que /robots.txt, /sitemap.xml et /llms.txt sont accessibles en production.
- Confirmer que les pages critiques sont rendues en HTTP 200.

## 2) Google Search Console
1. Ouvrir Google Search Console.
2. Ajouter la propriété du site Vercel avec la bonne URL.
3. Vérifier la propriété du domaine (DNS ou autre méthode acceptée).
4. Soumettre le sitemap :
   https://lessengui-christ-juvalin.vercel.app/sitemap.xml
5. Contrôler :
   - Indexation
   - Erreurs d’exploration
   - Pages de destination
   - Requêtes et impressions
   - Core Web Vitals

## 3) Bing Webmaster Tools
1. Ajouter la propriété du site sur Bing Webmaster Tools.
2. Vérifier la propriété du domaine.
3. Soumettre le sitemap Bing.
4. Contrôler :
   - couverture d’indexation
   - requêtes de recherche
   - clics et impressions
   - erreurs crawl

## 4) IndexNow (si activé)
- Créer une clé IndexNow seulement si l’équipe décide de l’utiliser.
- Vérifier la configuration côté déploiement Vercel.
- Ne pas activer sans contrôle de la clé et de l’URL dédiée.

## 5) Validation technique
- Tester le JSON-LD avec les outils de validation Schema.org.
- Vérifier les balises Open Graph et Twitter.
- Vérifier les balises canoniques sur les pages de détail.
- Vérifier la présence des pages longues traîne dans le sitemap.

## 6) Checklist mensuelle
- Contrôler les pages indexées.
- Identifier les URLs bloquées ou en erreur.
- Observer les requêtes sur les variantes du nom.
- Vérifier les pages d’entrée et les performances.
- Vérifier les mentions externes et les liens entrants de qualité.

## 7) Règle importante
Aucune présence dans Google, Bing ou les IA n’est garantie par le code seul. L’indexation dépend de la qualité du contenu, de la cohérence du site, et de la réputation numérique établie dans le temps.
