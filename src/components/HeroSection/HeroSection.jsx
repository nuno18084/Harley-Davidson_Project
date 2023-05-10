import React from "react";
import "./HeroSection.css";
import { FiArrowUpRight } from "react-icons/fi";

const HeroSection = () => {
  return (
    <div className="hero-main-section">
      <div className="hero-logo-section">
        <img
          src="https://www.imgtr.ee/images/2023/05/10/llhII.png"
          alt="hero-section"
          width={500}
        />
      </div>
      <div className="hero-bike-section">
        <div className="hero-bike-info">
          <div>
            <div className="bike-info-title">Electric Motor</div>
            <div className="bike-info-subtitle bike-info-border1">
              Revelation
            </div>
          </div>
          <div>
            <div className="bike-info-title">Torque</div>
            <div className="bike-info-subtitle bike-info-border2">86 FT-LB</div>
          </div>
          <div>
            <div className="bike-info-title">Horsepower</div>
            <div className="bike-info-subtitle">105 HP / X78 KW</div>
          </div>
        </div>
        <div>
          <img
            src="https://www.imgtr.ee/images/2023/05/10/llcuJ.png"
            alt="hero-bike"
            width={640}
            height={370}
          />
        </div>
        <div className="bike-info-button">
          <img
            src="https://www.imgtr.ee/images/2023/05/10/lvpzA.png"
            alt="helmet"
          />
          <div>
            <button className="hero-button">
              Helmet
              <FiArrowUpRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
