import React from "react";
import "./HeroSection.css";
import { FiArrowUpRight } from "react-icons/fi";

const BikeCard = (props) => {
  return (
    <div className="hero-bike-section">
      <div className="hero-bike-info">
        <div>
          <div className="bike-info-title">Electric Motor</div>
          <div className="bike-info-subtitle bike-info-border1">
            {props.motor}
          </div>
        </div>
        <div>
          <div className="bike-info-title">Torque</div>
          <div className="bike-info-subtitle bike-info-border2">
            {props.torque}
          </div>
        </div>
        <div>
          <div className="bike-info-title">Horsepower</div>
          <div className="bike-info-subtitle">{props.power}</div>
        </div>
      </div>
      <div>
        <img src={props.imgURL} alt="hero-bike" width={640} height={370} />
      </div>
      <div className="bike-info-helmet">
        <img
          src="https://www.imgtr.ee/images/2023/05/10/lvpzA.png"
          alt="helmet"
          className="info-helmet"
        />
        <div className="button-section">
          <button className="hero-button">
            Helmet
            <FiArrowUpRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default BikeCard;
