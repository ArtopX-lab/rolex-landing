"use client";

import { LangProvider } from "./context/LangContext";
import Navbar from "./components/Navbar";
import AnimatedCanvas from "./components/AnimatedCanvas";
import ScrollHero from "./components/ScrollHero";
import FeaturesSection from "./components/FeaturesSection";
import SpecsSection from "./components/SpecsSection";
import ClosingCTA from "./components/ClosingCTA";

export default function Home() {
  return (
    <LangProvider>
      <AnimatedCanvas />
      <Navbar />
      <main>
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
