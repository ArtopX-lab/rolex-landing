"use client";

import { motion } from "framer-motion";
import { useLang } from "../context/LangContext";
import { t } from "../i18n";

export default function ScrollHero() {
  const { lang } = useLang();
  const T = t[lang].hero;

  const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: (i: number) => ({
      opacity: 1, y: 0,
      transition: { delay: 0.6 + i * 0.12, duration: 0.7, ease: [0.25, 0, 0, 1] },
    }),
  };

  return (
    <div style={{ height: "100vh", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-end" }}>
      <div style={{ position: "relative", padding: "clamp(2rem, 5vw, 5rem)", pointerEvents: "none" }}>
        <motion.span custom={0} variants={fadeUp} initial="hidden" animate="visible"
          style={{ fontFamily: "var(--font-inter)", fontSize: "0.65rem", letterSpacing: "0.25em", textTransform: "uppercase", color: "#C8A96E", marginBottom: "1rem", display: "block", textShadow: "0 1px 8px rgba(0,0,0,0.8)" }}
        >{T.eyebrow}</motion.span>

        <motion.h1 custom={1} variants={fadeUp} initial="hidden" animate="visible"
          style={{ fontFamily: "var(--font-playfair)", fontWeight: 400, fontSize: "clamp(2.4rem, 6vw, 5.5rem)", lineHeight: 1.08, letterSpacing: "-0.01em", marginBottom: "1.25rem", maxWidth: "12ch", textShadow: "0 2px 16px rgba(0,0,0,0.9)" }}
        >{T.title}</motion.h1>

        <motion.p custom={2} variants={fadeUp} initial="hidden" animate="visible"
          style={{ fontFamily: "var(--font-inter)", fontWeight: 300, fontSize: "clamp(0.95rem, 1.6vw, 1.1rem)", color: "#E5E5E5", maxWidth: "460px", lineHeight: 1.65, marginBottom: "2rem", textShadow: "0 1px 8px rgba(0,0,0,0.8)" }}
        >{T.body}</motion.p>

        <motion.div custom={3} variants={fadeUp} initial="hidden" animate="visible" style={{ pointerEvents: "auto" }}>
          <a href="#features"
            style={{ display: "inline-block", background: "#C8A96E", color: "#000", fontFamily: "var(--font-inter)", fontWeight: 500, fontSize: "0.7rem", letterSpacing: "0.18em", textTransform: "uppercase", textDecoration: "none", padding: "0.9rem 2.6rem", transition: "background 0.2s ease" }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "#E8C98E"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "#C8A96E"; }}
          >{T.cta}</a>
        </motion.div>
      </div>
    </div>
  );
}
