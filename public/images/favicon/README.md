# Favicon Karvaneg

Astérisque rouge crayon (`#c4392a`) sur pastille `#15120d` — le signe `*` du wordmark.

## Fichiers
| Fichier | Usage |
|---|---|
| `icon.svg` | Source vectorielle (favicon moderne, net à toute taille) |
| `favicon-16/32/48.png` | Favicons classiques (coins arrondis) |
| `apple-touch-icon.png` (180) | iOS — plein cadre, iOS applique son propre masque arrondi |
| `icon-192/512.png` | Android / PWA — plein cadre |
| `site.webmanifest` | Manifeste PWA |

## Intégration — Next.js App Router (le plus simple)
Pose simplement les fichiers dans le dossier `app/` et Next génère les balises tout seul :

```
app/
  icon.svg              → favicon principal (renomme icon.svg ici)
  apple-icon.png        → renomme apple-touch-icon.png
  manifest.ts (ou .json) → reprends site.webmanifest
```

Next.js détecte `app/icon.svg` et `app/apple-icon.png` automatiquement — aucune balise `<link>` à écrire.

## Intégration — HTML classique
Dans le `<head>` :
```html
<link rel="icon" href="/favicon/icon.svg" type="image/svg+xml">
<link rel="icon" href="/favicon/favicon-32.png" sizes="32x32">
<link rel="apple-touch-icon" href="/favicon/apple-touch-icon.png">
<link rel="manifest" href="/favicon/site.webmanifest">
<meta name="theme-color" content="#15120d">
```
