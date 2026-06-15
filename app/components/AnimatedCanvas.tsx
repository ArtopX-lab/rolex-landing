"use client";

import { useEffect, useRef } from "react";

const FRAME_COUNT = 241;

function src(i: number) {
  return `/frames/frame_${String(i + 1).padStart(4, "0")}.jpg`;
}

export default function AnimatedCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const currentIdxRef = useRef(0);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const dpr = window.devicePixelRatio || 1;

    function resize() {
      if (!canvas) return;
      canvas.width = canvas.offsetWidth * dpr;
      canvas.height = canvas.offsetHeight * dpr;
      ctx!.scale(dpr, dpr);
      draw(currentIdxRef.current);
    }

    function draw(index: number) {
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

    // Preload all frames
    const images: HTMLImageElement[] = [];
    let ready = false;
    let loaded = 0;
    for (let i = 0; i < FRAME_COUNT; i++) {
      const img = new Image();
      img.src = src(i);
      img.onload = () => {
        loaded++;
        if (!ready && loaded >= 1) { ready = true; resize(); draw(0); }
      };
      images.push(img);
    }
    imagesRef.current = images;

    function tick() {
      const scrollY = window.scrollY;
      const maxScroll = document.body.scrollHeight - window.innerHeight;
      if (maxScroll > 0) {
        const progress = Math.min(1, scrollY / maxScroll); // 0 → 1

        // Ping-pong: 0→0.5 = forward, 0.5→1 = reverse
        let frameProgress: number;
        if (progress <= 0.5) {
          frameProgress = progress * 2;           // 0 → 1
        } else {
          frameProgress = (1 - progress) * 2;    // 1 → 0
        }

        const target = Math.round(frameProgress * (FRAME_COUNT - 1));
        if (target !== currentIdxRef.current) draw(target);
      }
      rafRef.current = requestAnimationFrame(tick);
    }
    rafRef.current = requestAnimationFrame(tick);

    window.addEventListener("resize", resize);
    resize();
    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", resize);
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
      }}
    />
  );
}
