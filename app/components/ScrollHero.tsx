"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useLang } from "../context/LangContext";
import { t } from "../i18n";

const FRAME_COUNT = 241;

function getFrameSrc(index: number): string {
  const padded = String(index + 1).padStart(4, "0");
  return `/frames/frame_${padded}.jpg`;
}

export default function ScrollHero() {
  const { lang } = useLang();
  const T = t[lang].hero;

  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const currentIdxRef = useRef(0);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

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
      if (!img || !img.complete || img.naturalWidth === 0) return;

      const cw = canvas.offsetWidth;
      const ch = canvas.offsetHeight;
      const iw = img.naturalWidth;
      const ih = img.naturalHeight;

      const scale = Math.max(cw / iw, ch / ih);
      const sw = iw * scale;
      const sh = ih * scale;
      const sx = (cw - sw) / 2;
      const sy = (ch - sh) / 2;

      ctx.fillStyle = "#000";
      ctx.fillRect(0, 0, cw, ch);
      ctx.drawImage(img, sx, sy, sw, sh);

      currentIdxRef.current = index;
    }

    const images: HTMLImageElement[] = [];
    let loadedCount = 0;

    for (let i = 0; i < FRAME_COUNT; i++) {
      const img = new Image();
      img.src = getFrameSrc(i);
      img.onload = () => {
        loadedCount++;
        if (loadedCount === 1) {
          resizeCanvas();
          drawFrame(0);
        }
      };
      images.push(img);
    }
    imagesRef.current = images;

    function tick() {
      if (container) {
        const rect = container.getBoundingClientRect();
        const scrollable = container.offsetHeight - window.innerHeight;
        const raw = scrollable > 0 ? -rect.top / scrollable : 0;
        const progress = Math.max(0, Math.min(1, raw));
        const target = Math.round(progress * (FRAME_COUNT - 1));

        if (target !== currentIdxRef.current) {
          drawFrame(target);
        }
      }
      rafRef.current = requestAnimationFrame(tick);
    }
    rafRef.current = requestAnimationFrame(tick);

    const handleResize = () => resizeCanvas();
    window.addEventListener("resize", handleResize);
    resizeCanvas();

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: 0.8 + i * 0.12, duration: 0.7, ease: [0.25, 0, 0, 1] },
    }),
  };

  return (
    <div ref={containerRef} style={{ height: "300vh", position: "relative" }}>
      <div style={{ position: "sticky", top: 0, width: "100vw", height: "100vh", overflow: "hidden", background: "#000" }}>
        <canvas ref={canvasRef} style={{ display: "block", width: "100%", height: "100%" }} />
        <div
          style={{
            position: "absolute", inset: 0, display: "flex", flexDirection: "column",
            justifyContent: "flex-end", padding: "clamp(2rem, 5vw, 5rem)",
            background: "linear-gradient(to top, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.35) 50%, transparent 100%)",
            pointerEvents: "none",
          }}
        >
          <motion.span custom={0} variants={fadeUp} initial="hidden" animate="visible"
            style={{ fontFamily: "var(--font-inter)", fontSize: "0.65rem", letterSpacing: "0.25em", textTransform: "uppercase", color: "#C8A96E", marginBottom: "1rem", display: "block" }}
          >
            {T.eyebrow}
          </motion.span>

          <motion.h1 custom={1} variants={fadeUp} initial="hidden" animate="visible"
            style={{ fontFamily: "var(--font-playfair)", fontWeight: 400, fontSize: "clamp(2.4rem, 6vw, 5.5rem)", lineHeight: 1.08, letterSpacing: "-0.01em", marginBottom: "1.25rem", maxWidth: "12ch" }}
          >
            {T.title}
          </motion.h1>

          <motion.p custom={2} variants={fadeUp} initial="hidden" animate="visible"
            style={{ fontFamily: "var(--font-inter)", fontWeight: 300, fontSize: "clamp(0.95rem, 1.6vw, 1.1rem)", color: "#E5E5E5", maxWidth: "460px", lineHeight: 1.65, marginBottom: "2rem" }}
          >
            {T.body}
          </motion.p>

          <motion.div custom={3} variants={fadeUp} initial="hidden" animate="visible" style={{ pointerEvents: "auto" }}>
            <a href="#features"
              style={{ display: "inline-block", background: "#C8A96E", color: "#000", fontFamily: "var(--font-inter)", fontWeight: 500, fontSize: "0.7rem", letterSpacing: "0.18em", textTransform: "uppercase", textDecoration: "none", padding: "0.9rem 2.6rem", transition: "background 0.2s ease, color 0.2s ease" }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "#E8C98E"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "#C8A96E"; }}
            >
              {T.cta}
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
