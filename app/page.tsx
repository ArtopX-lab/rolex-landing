"use client";

import { LangProvider } from "./context/LangContext";
import Navbar from "./components/Navbar";
import ScrollHero from "./components/ScrollHero";
import ReverseCanvas from "./components/ReverseCanvas";
import FeaturesSection from "./components/FeaturesSection";
import SpecsSection from "./components/SpecsSection";
import ClosingCTA from "./components/ClosingCTA";

export default function Home() {
  return (
    <LangProvider>
      <ReverseCanvas />
      <Navbar />
      <main style={{ background: "#000" }}>
        <ScrollHero />
        <div style={{ position: "relative", zIndex: 1 }}>
          <FeaturesSection />
          <SpecsSection />
          <ClosingCTA />
        </div>
      </main>
    </LangProvider>
  );
}
