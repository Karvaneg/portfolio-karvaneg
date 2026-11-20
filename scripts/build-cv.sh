#!/usr/bin/env bash
# Génère le CV PDF (A4) publié par le portfolio à partir de cv/cv.html.
# Usage : pnpm cv   (ou CHROME=/chemin/vers/chrome pnpm cv)
set -euo pipefail

root="$(cd "$(dirname "$0")/.." && pwd)"
out="$root/public/cv/Marie_Le_Carvennec_CV.pdf"

# Chromium : variable CHROME, sinon le navigateur installé par Playwright, sinon le PATH.
chrome="${CHROME:-$(ls -d "$HOME"/.cache/ms-playwright/chromium-*/chrome-linux*/chrome 2>/dev/null | sort -V | tail -1)}"
chrome="${chrome:-$(command -v chromium || command -v google-chrome || true)}"
if [ -z "$chrome" ]; then
  echo "Chromium introuvable : définir CHROME=/chemin/vers/chrome" >&2
  exit 1
fi

mkdir -p "$(dirname "$out")"
"$chrome" --headless=new --no-sandbox --disable-gpu --no-pdf-header-footer \
  --print-to-pdf="$out" "file://$root/cv/cv.html" 2>/dev/null
echo "CV généré : $out"
