"use client";

import { useLang } from "../context/LangContext";
import { t } from "../i18n";

export default function Navbar() {
  const { lang, toggle } = useLang();

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "1.25rem clamp(1.5rem, 5vw, 4rem)",
        background: "linear-gradient(to bottom, rgba(0,0,0,0.6) 0%, transparent 100%)",
        pointerEvents: "none",
      }}
    >
      {/* Logo / Wordmark */}
      <span
        style={{
          fontFamily: "var(--font-inter)",
          fontSize: "0.6rem",
          letterSpacing: "0.35em",
          textTransform: "uppercase",
          color: "#C8A96E",
          pointerEvents: "auto",
        }}
      >
        Rolex · Day-Date 40
      </span>

      {/* Language toggle */}
      <button
        onClick={toggle}
        style={{
          pointerEvents: "auto",
          background: "transparent",
          border: "1px solid rgba(200,169,110,0.5)",
          color: "#C8A96E",
          fontFamily: "var(--font-inter)",
          fontSize: "0.6rem",
          fontWeight: 500,
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          padding: "0.45rem 1rem",
          cursor: "pointer",
          transition: "border-color 0.2s ease, color 0.2s ease, background 0.2s ease",
          display: "flex",
          alignItems: "center",
          gap: "0.5rem",
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLButtonElement).style.background = "rgba(200,169,110,0.1)";
          (e.currentTarget as HTMLButtonElement).style.borderColor = "#C8A96E";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLButtonElement).style.background = "transparent";
          (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(200,169,110,0.5)";
        }}
        aria-label="Toggle language"
      >
        {/* Active lang */}
        <span style={{ opacity: 0.45 }}>{lang.toUpperCase()}</span>
        <span style={{ opacity: 0.3, fontSize: "0.5rem" }}>|</span>
        {/* Target lang */}
        <span>{t[lang].nav.lang}</span>
      </button>
    </nav>
  );
}
