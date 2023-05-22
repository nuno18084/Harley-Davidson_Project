import React from "react";
import "./HeroSection.css";
import BikeCard from "./BikeCard";
import models from "./BikeModels";
import Sub from "../../images/sub-logo.png";

const HeroSection = () => {
  return (
    <div className="hero-main-section">
      <div className="hero-logo-section">
        <img src={Sub} alt="hero-section" width={500} />
      </div>
      <div>
        <BikeCard
          motor={models[0].motor}
          torque={models[0].torque}
          power={models[0].power}
          imgURL={models[0].imgURL}
        />
      </div>
    </div>
  );
};

export default HeroSection;
