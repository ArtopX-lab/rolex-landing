# Rolex Day-Date 40 — Landing Page

Scroll-driven luxury product landing page with canvas frame scrubbing.

## Setup after Higgsfield generation

### 1. Download the hero video
Save the generated video as `public/hero.mp4`.

### 2. Extract frames
```bash
# Install ffmpeg if needed: brew install ffmpeg
bash scripts/extract-frames.sh
```

The script will print the total frame count. Example output:
```
✅  Done. 240 frames extracted to public/frames/
👉  Open app/components/ScrollHero.tsx and set:
    const FRAME_COUNT = 240;
```

### 3. Update FRAME_COUNT
Open `app/components/ScrollHero.tsx` and update line 9:
```ts
const FRAME_COUNT = 240; // ← replace with your actual count
```

### 4. Install & run
```bash
npm install
npm run dev
```

Open http://localhost:3000

## Verification checklist
- [ ] http://localhost:3000 loads
- [ ] /frames/frame_0001.jpg returns 200
- [ ] Scrolling scrubs from assembled watch → full deconstruction
- [ ] Features section animates in on scroll
- [ ] Specs table animates in on scroll
- [ ] CTA section animates in on scroll
- [ ] Mobile: grid stacks to single column below 768px

## Design tokens
| Token | Value |
|---|---|
| Background | #000000 |
| Text primary | #ffffff |
| Text body | #E5E5E5 |
| Accent gold | #C8A96E |
| Accent hover | #E8C98E |
| Dim text | #888888 |
| Border subtle | rgba(200,169,110,0.2) |
| Display font | Playfair Display |
| Body font | Inter |
