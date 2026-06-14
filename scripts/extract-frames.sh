#!/bin/bash
# Run this script from the root of the rolex-landing project
# after placing hero.mp4 in the public/ folder.
#
# Usage: bash scripts/extract-frames.sh

set -e

VIDEO="public/hero.mp4"
OUTPUT="public/frames"

if [ ! -f "$VIDEO" ]; then
  echo "❌  $VIDEO not found. Download hero.mp4 from Higgsfield and place it in public/."
  exit 1
fi

mkdir -p "$OUTPUT"

echo "📊  Probing video metadata..."
ffprobe -v error -select_streams v:0 \
  -show_entries stream=duration,r_frame_rate,nb_frames \
  -of default=noprint_wrappers=1 "$VIDEO"

echo ""
echo "🎞   Extracting frames at 24 fps → $OUTPUT ..."
ffmpeg -i "$VIDEO" \
  -vf "fps=24,scale=1920:-1" \
  -q:v 3 \
  "$OUTPUT/frame_%04d.jpg"

FRAME_COUNT=$(ls "$OUTPUT"/frame_*.jpg 2>/dev/null | wc -l | tr -d ' ')
echo ""
echo "✅  Done. $FRAME_COUNT frames extracted to $OUTPUT/"
echo ""
echo "👉  Open app/components/ScrollHero.tsx and set:"
echo "    const FRAME_COUNT = $FRAME_COUNT;"
