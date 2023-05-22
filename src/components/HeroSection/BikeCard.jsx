import React from "react";
import "./HeroSection.css";
import { FiArrowUpRight } from "react-icons/fi";
import Carousel from "react-bootstrap/Carousel";
import Buttons from "./Buttons/Buttons";
import Bike from "../../images/BikeCard.png";
import Helmet from "../../images/helmet.png";
import Fat from "../../images/Fat.png";
import Delmar from "../../images/delmar.png";
import Rock from "../../images/Rock.png";

const BikeCard = (props) => {
  const handleClick = () => {
    window.open(
      "https://www.harley-davidson.com/pt/pt/shop/willie-g-x04-2-in-1-helmet/p/98163-22EX",
      "_blank"
    );
  };

  return (
    <>
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
        <div class="container" data-bs-interval="false">
          <Carousel variant="dark" interval={null}>
            <Carousel.Item>
              <div className="w-52 d-flex flex-column justify-content-center align-items-center">
                <img className="d-block w-52" src={Bike} alt="First slide" />
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="w-52 d-flex flex-column justify-content-center align-items-center">
                <img className="d-block w-52" src={Delmar} alt="Second slide" />
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="w-52 d-flex flex-column justify-content-center align-items-center">
                <img className="d-block w-52" src={Rock} alt="Third slide" />
              </div>
            </Carousel.Item>
          </Carousel>
        </div>
        <div className="bike-info-helmet">
          <img src={Helmet} alt="helmet" className="info-helmet" />
          <div className="button-section">
            <button onClick={handleClick} className="hero-button">
              Helmet
              <FiArrowUpRight />
            </button>
          </div>
        </div>
      </div>
      <div>
        <Buttons />
      </div>
    </>
  );
};

export default BikeCard;
