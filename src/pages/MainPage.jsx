import React from "react";
import HeroSection from "../components/HeroSection/HeroSection";
import TableSection from "../components/TableSection/TableSection";
import ExperienceSection from "../components/ExperienceSection/ExperienceSection";
import KitsSection from "../components/KitsSection/KitsSection";

const MainPage = () => {
  return (
    <div>
      <HeroSection />
      <TableSection />
      <ExperienceSection />
      <KitsSection />
    </div>
  );
};

export default MainPage;
