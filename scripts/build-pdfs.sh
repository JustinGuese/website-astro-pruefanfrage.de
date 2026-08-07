#!/usr/bin/env bash
# Renders the free "Starthilfe" markdown templates in public/downloads/ to
# branded, print-ready PDFs next to them.
#
# A Pflegedienst-Geschäftsführung will not open a .md file — the PDFs are what
# we actually link from the landing page. Re-run this after editing any .md:
#   ./scripts/build-pdfs.sh
#
# Requires: pandoc, and a Chrome/Chromium binary for headless printing.
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
DOWNLOADS="$ROOT/public/downloads"
CSS="$ROOT/scripts/pdf.css"
WORK="$(mktemp -d)"
trap 'rm -rf "$WORK"' EXIT

CHROME="$(command -v google-chrome || command -v chromium || command -v chromium-browser || true)"
if [[ -z "$CHROME" ]]; then
  echo "error: no chrome/chromium binary found — cannot print PDFs" >&2
  exit 1
fi

for md in "$DOWNLOADS"/*.md; do
  base="$(basename "$md" .md)"
  html="$WORK/$base.html"

  pandoc "$md" \
    --standalone \
    --from=gfm \
    --to=html5 \
    --metadata title="pruefanfrage.de — $base" \
    --include-in-header="$CSS" \
    --output="$html"

  "$CHROME" \
    --headless \
    --disable-gpu \
    --no-sandbox \
    --no-pdf-header-footer \
    --print-to-pdf="$DOWNLOADS/$base.pdf" \
    "file://$html" 2>/dev/null

  echo "built: public/downloads/$base.pdf"
done
