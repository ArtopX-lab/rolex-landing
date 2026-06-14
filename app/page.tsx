"use client";

import { LangProvider } from "./context/LangContext";
import Navbar from "./components/Navbar";
import ScrollHero from "./components/ScrollHero";
import FeaturesSection from "./components/FeaturesSection";
import SpecsSection from "./components/SpecsSection";
import ClosingCTA from "./components/ClosingCTA";

export default function Home() {
  return (
    <LangProvider>
      <Navbar />
      <main style={{ background: "#000" }}>
        <ScrollHero />
        <FeaturesSection />
        <SpecsSection />
        <ClosingCTA />
      </main>
    </LangProvider>
  );
}
