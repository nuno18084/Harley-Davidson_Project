import React from "react";
import "./HeroSection.css";
import { FiArrowUpRight } from "react-icons/fi";
import Carousel from "react-bootstrap/Carousel";
import Buttons from "./Buttons/Buttons";

const BikeCard = (props) => {
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
                <img
                  className="d-block w-52"
                  src="https://www.imgtr.ee/images/2023/05/10/llcuJ.png"
                  alt="First slide"
                />
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="w-52 d-flex flex-column justify-content-center align-items-center">
                <img
                  className="d-block w-52"
                  src="https://www.imgtr.ee/images/2023/05/10/llcuJ.png"
                  alt="First slide"
                />
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="w-52 d-flex flex-column justify-content-center align-items-center">
                <img
                  className="d-block w-52"
                  src="https://www.imgtr.ee/images/2023/05/10/llcuJ.png"
                  alt="First slide"
                />
              </div>
            </Carousel.Item>
          </Carousel>
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
      <div>
        <Buttons />
      </div>
    </>
  );
};

export default BikeCard;
