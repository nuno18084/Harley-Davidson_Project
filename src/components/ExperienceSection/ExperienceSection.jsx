import React from "react";
import Buttons from "../HeroSection/Buttons/Buttons";
import "./ExperienceSection.css";
import Road from "../../images/road.jpeg";
import Max from "../../images/Max.png";

const ExperienceSection = () => {
  return (
    <div className="experience-main-container">
      <div className="experience-left-side">
        <h5>Sportster</h5>
        <h1>Riding with Agile Experience</h1>
        <p>
          New Revolution Max 1250T has liquid cooled powertrain offering amp
          torque and immediate powerband.
        </p>
        <Buttons />
      </div>
      <div className="images-section">
        <div>
          <img
            src={Road}
            alt="road"
            width={250}
            height={300}
            className="experience-road-pic"
          />
        </div>
        <div>
          <img
            src={Max}
            alt="bike"
            width={500}
            height={300}
            className="experience-bike-pic"
          />
        </div>
      </div>
    </div>
  );
};

export default ExperienceSection;
