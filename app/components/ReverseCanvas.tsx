"use client";

import { useEffect, useRef } from "react";

const FRAME_COUNT = 241;

function getFrameSrc(i: number): string {
  return `/frames/frame_${String(i + 1).padStart(4, "0")}.jpg`;
}

export default function ReverseCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const currentIdxRef = useRef(FRAME_COUNT - 1);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const dpr = window.devicePixelRatio || 1;

    function resizeCanvas() {
      if (!canvas) return;
      canvas.width = canvas.offsetWidth * dpr;
      canvas.height = canvas.offsetHeight * dpr;
      ctx!.scale(dpr, dpr);
      drawFrame(currentIdxRef.current);
    }

    function drawFrame(index: number) {
      if (!canvas || !ctx) return;
      const img = imagesRef.current[index];
      if (!img?.complete || !img.naturalWidth) return;
      const cw = canvas.offsetWidth;
      const ch = canvas.offsetHeight;
      const scale = Math.max(cw / img.naturalWidth, ch / img.naturalHeight);
      const sw = img.naturalWidth * scale;
      const sh = img.naturalHeight * scale;
      ctx.fillStyle = "#000";
      ctx.fillRect(0, 0, cw, ch);
      ctx.drawImage(img, (cw - sw) / 2, (ch - sh) / 2, sw, sh);
      currentIdxRef.current = index;
    }

    // Load images — browser cache from ScrollHero, no re-download
    const images: HTMLImageElement[] = [];
    for (let i = 0; i < FRAME_COUNT; i++) {
      const img = new Image();
      img.src = getFrameSrc(i);
      images.push(img);
    }
    imagesRef.current = images;

    // Draw last frame immediately if already cached
    const lastFrame = imagesRef.current[FRAME_COUNT - 1];
    if (lastFrame.complete && lastFrame.naturalWidth) {
      drawFrame(FRAME_COUNT - 1);
    } else {
      lastFrame.onload = () => drawFrame(FRAME_COUNT - 1);
    }

    function tick() {
      const vh = window.innerHeight;
      const heroEnd = vh * 3; // ScrollHero is 300vh
      const scrollY = window.scrollY;
      const totalScrollable = document.body.scrollHeight - vh;

      // Fade in: start at 80% through hero, fully visible at hero end
      const fadeStart = heroEnd - vh * 0.4;
      const opacity = Math.max(0, Math.min(1, (scrollY - fadeStart) / (heroEnd - fadeStart)));
      if (canvas) canvas.style.opacity = String(opacity);

      // Reverse playback mapped to scroll progress after hero
      if (scrollY >= heroEnd) {
        const contentScrollable = totalScrollable - heroEnd;
        const progress = contentScrollable > 0
          ? Math.min(1, (scrollY - heroEnd) / contentScrollable)
          : 0;
        const target = Math.round((1 - progress) * (FRAME_COUNT - 1));
        if (target !== currentIdxRef.current) drawFrame(target);
      }

      rafRef.current = requestAnimationFrame(tick);
    }
    rafRef.current = requestAnimationFrame(tick);

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        inset: 0,
        width: "100vw",
        height: "100vh",
        zIndex: -1,
        opacity: 0,
      }}
    />
  );
}
