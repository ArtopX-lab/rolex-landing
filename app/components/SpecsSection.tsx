"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useLang } from "../context/LangContext";
import { t } from "../i18n";

export default function SpecsSection() {
  const { lang } = useLang();
  const T = t[lang].specs;
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });

  return (
    <section ref={ref} style={{ background: "transparent", padding: "clamp(5rem, 10vw, 9rem) clamp(1.5rem, 6vw, 6rem)", borderTop: "1px solid rgba(200,169,110,0.1)" }}>
      <div style={{ maxWidth: "860px", margin: "0 auto" }}>
        <motion.div initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, ease: [0.25, 0, 0, 1] }} style={{ marginBottom: "3.5rem" }}>
          <span style={{ fontFamily: "var(--font-inter)", fontSize: "0.65rem", letterSpacing: "0.25em", textTransform: "uppercase", color: "#C8A96E", display: "block", marginBottom: "1.25rem" }}>
            {T.eyebrow}
          </span>
          <h2 style={{ fontFamily: "var(--font-playfair)", fontWeight: 400, fontStyle: "italic", fontSize: "clamp(2rem, 4vw, 3.5rem)", lineHeight: 1.1 }}>
            {T.heading}
          </h2>
        </motion.div>

        <div>
          {T.rows.map((row, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.55, delay: 0.1 + i * 0.07, ease: [0.25, 0, 0, 1] }}
              style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem 2rem", padding: "1.25rem 0", borderBottom: "1px solid rgba(255,255,255,0.07)", alignItems: "start" }}
            >
              <span style={{ fontFamily: "var(--font-inter)", fontSize: "0.75rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "#C8A96E", paddingTop: "0.05rem" }}>
                {row.label}
              </span>
              <span style={{ fontFamily: "var(--font-inter)", fontWeight: 300, fontSize: "0.95rem", lineHeight: 1.6, color: "#E5E5E5" }}>
                {row.value}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
