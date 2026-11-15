#!/usr/bin/env bash
# Renders scripts/og/og.html to public/og.png (1200x630) with headless Chrome.
# Edit the name and headline in og.html first when they change in src/data/site.ts.
set -euo pipefail
root="$(cd "$(dirname "$0")/../.." && pwd)"
chrome="${CHROME:-/Applications/Google Chrome.app/Contents/MacOS/Google Chrome}"
# Chrome falls back to a system font without a word if the webfont is missing, so check first.
font="$root/node_modules/@fontsource-variable/ibm-plex-sans/files/ibm-plex-sans-latin-wght-normal.woff2"
[[ -f "$font" ]] || { echo "missing $font: run npm install first" >&2; exit 1; }
profile="$(mktemp -d)"
trap 'rm -rf "$profile"' EXIT
"$chrome" --headless=new --disable-gpu --hide-scrollbars --allow-file-access-from-files \
  --user-data-dir="$profile" --window-size=1200,630 --virtual-time-budget=2000 \
  --screenshot="$root/public/og.png" "file://$root/scripts/og/og.html" 2>/dev/null
echo "wrote public/og.png"
