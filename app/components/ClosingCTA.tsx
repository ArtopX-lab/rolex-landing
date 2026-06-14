"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function ClosingCTA() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });

  return (
    <section
      ref={ref}
      style={{
        background: "#000",
        padding: "clamp(6rem, 12vw, 11rem) clamp(1.5rem, 6vw, 6rem)",
        textAlign: "center",
        borderTop: "1px solid rgba(200,169,110,0.1)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Radial glow */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse 80% 60% at 50% 70%, rgba(200,169,110,0.10) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ position: "relative", zIndex: 1 }}>
        {/* Label */}
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.25, 0, 0, 1] }}
          style={{
            fontFamily: "var(--font-inter)",
            fontSize: "0.65rem",
            letterSpacing: "0.25em",
            textTransform: "uppercase",
            color: "#C8A96E",
            display: "block",
            marginBottom: "2rem",
          }}
        >
          Yours to Command
        </motion.span>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 0, 0, 1] }}
          style={{
            fontFamily: "var(--font-playfair)",
            fontSize: "clamp(2.2rem, 5vw, 4.5rem)",
            lineHeight: 1.1,
            marginBottom: "1.75rem",
          }}
        >
          <span style={{ fontWeight: 400, display: "block" }}>
            A century of mastery.
          </span>
          <span
            style={{
              fontWeight: 400,
              fontStyle: "italic",
              color: "#E5E5E5",
              display: "block",
            }}
          >
            One expression of it.
          </span>
        </motion.h2>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0, 0, 1] }}
          style={{
            fontFamily: "var(--font-inter)",
            fontWeight: 300,
            fontSize: "clamp(0.95rem, 1.5vw, 1.05rem)",
            color: "#E5E5E5",
            maxWidth: "480px",
            margin: "0 auto 3rem",
            lineHeight: 1.7,
          }}
        >
          Every Day-Date is made to order, finished by hand, and certified to
          outlast its owner. Visit an authorised retailer to begin yours.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.25, 0, 0, 1] }}
        >
          <motion.a
            href="#"
            whileHover={{ backgroundColor: "#000", color: "#C8A96E" }}
            style={{
              display: "inline-block",
              background: "#000",
              color: "#C8A96E",
              border: "1px solid #C8A96E",
              fontFamily: "var(--font-inter)",
              fontWeight: 500,
              fontSize: "0.7rem",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              textDecoration: "none",
              padding: "0.9rem 2.6rem",
              transition: "background 0.25s ease, color 0.25s ease",
              cursor: "pointer",
            }}
          >
            Find an Authorised Retailer
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
