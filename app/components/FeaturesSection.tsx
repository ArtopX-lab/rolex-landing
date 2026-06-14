"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const features = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="#C8A96E" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="14" cy="14" r="11" />
        <path d="M14 8v6l3.5 3.5" />
        <circle cx="14" cy="14" r="1.5" fill="#C8A96E" stroke="none" />
      </svg>
    ),
    label: "Perpetual Movement",
    copy: "Calibre 3255 — a self-winding mechanical movement developed entirely in-house, beating at 28,800 vibrations per hour with a 70-hour power reserve.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="#C8A96E" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 3 L25 8 L25 20 L14 25 L3 20 L3 8 Z" />
        <path d="M14 9 L20 12 L20 19 L14 22 L8 19 L8 12 Z" />
      </svg>
    ),
    label: "Everose Gold",
    copy: "An exclusive Rolex alloy of 18 ct gold with copper and a trace of platinum — resistant to fading, immune to the passage of time, and owned by no other Maison.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="#C8A96E" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="14" cy="14" rx="10" ry="10" />
        <path d="M4 14 C4 9 14 5 14 5 C14 5 24 9 24 14" />
        <path d="M9 18 C9 21 14 23 14 23 C14 23 19 21 19 18" />
      </svg>
    ),
    label: "Oyster Waterproofing",
    copy: "The world's first waterproof watch case — hermetically sealed with a screw-down crown and caseback, tested to 100 metres of hydrostatic pressure.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="#C8A96E" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="10" width="18" height="8" rx="4" />
        <rect x="9" y="6" width="10" height="4" rx="1" />
        <rect x="9" y="18" width="10" height="4" rx="1" />
        <circle cx="14" cy="14" r="1.5" fill="#C8A96E" stroke="none" />
      </svg>
    ),
    label: "President Bracelet",
    copy: "First created for the Day-Date in 1956 — a three-piece semi-circular link bracelet in solid Everose gold, paired with a concealed Crown-Clasp for an unbroken aesthetic line.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="#C8A96E" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 3 L14 7" />
        <path d="M14 21 L14 25" />
        <path d="M3 14 L7 14" />
        <path d="M21 14 L25 14" />
        <circle cx="14" cy="14" r="6" />
        <path d="M14 11 L15.5 14 L14 14" />
      </svg>
    ),
    label: "Superlative Chronometer",
    copy: "Certified by COSC and then tested further by Rolex to a tolerance of ±2 seconds per day — a standard twice as precise as the official chronometer benchmark.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="#C8A96E" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <rect x="10" y="10" width="8" height="8" rx="1" />
        <path d="M13 10 L13 6 Q14 5 15 6 L15 10" />
        <path d="M10 13 L6 13 Q5 14 6 15 L10 15" />
        <path d="M18 13 L22 13 Q23 14 22 15 L18 15" />
        <path d="M13 18 L13 22 Q14 23 15 22 L15 18" />
      </svg>
    ),
    label: "Cyclops Date",
    copy: "A magnifying lens ground directly into the sapphire crystal above the date aperture, enlarging the date display by 2.5× for immediate legibility at a glance.",
  },
];

export default function FeaturesSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });

  return (
    <section
      id="features"
      ref={ref}
      style={{
        background: "#000",
        padding: "clamp(5rem, 10vw, 9rem) clamp(1.5rem, 6vw, 6rem)",
      }}
    >
      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: [0.25, 0, 0, 1] }}
        style={{ marginBottom: "4rem" }}
      >
        <span
          style={{
            fontFamily: "var(--font-inter)",
            fontSize: "0.65rem",
            letterSpacing: "0.25em",
            textTransform: "uppercase",
            color: "#C8A96E",
            display: "block",
            marginBottom: "1.25rem",
          }}
        >
          Crafted Without Compromise
        </span>
        <h2
          style={{
            fontFamily: "var(--font-playfair)",
            fontWeight: 400,
            fontSize: "clamp(2rem, 4vw, 3.5rem)",
            lineHeight: 1.1,
            maxWidth: "18ch",
          }}
        >
          Six centuries of watchmaking, distilled.
        </h2>
      </motion.div>

      {/* Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
          gap: "0",
        }}
      >
        {features.map((f, i) => (
          <motion.div
            key={f.label}
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 0.7,
              delay: i * 0.1,
              ease: [0.25, 0, 0, 1],
            }}
            style={{
              borderTop: "1px solid rgba(200,169,110,0.2)",
              padding: "2.5rem 2rem 2.5rem 0",
            }}
          >
            <div style={{ marginBottom: "1.25rem" }}>{f.icon}</div>
            <h3
              style={{
                fontFamily: "var(--font-inter)",
                fontWeight: 500,
                fontSize: "0.8rem",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "#C8A96E",
                marginBottom: "0.75rem",
              }}
            >
              {f.label}
            </h3>
            <p
              style={{
                fontFamily: "var(--font-inter)",
                fontWeight: 300,
                fontSize: "0.95rem",
                lineHeight: 1.7,
                color: "#E5E5E5",
                maxWidth: "34ch",
              }}
            >
              {f.copy}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
