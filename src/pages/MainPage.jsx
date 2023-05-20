import React from "react";
import HeroSection from "../components/HeroSection/HeroSection";
import TableSection from "../components/TableSection/TableSection";
import ExperienceSection from "../components/ExperienceSection/ExperienceSection";
import KitsSection from "../components/KitsSection/KitsSection";
import SoftailSection from "../components/SoftailSection/SoftailSection";

const MainPage = () => {
  return (
    <div>
      <HeroSection />
      <TableSection />
      <ExperienceSection />
      <KitsSection />
      <SoftailSection />
    </div>
  );
};

export default MainPage;
