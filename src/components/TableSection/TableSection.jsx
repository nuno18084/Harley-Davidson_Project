import React from "react";
import "./TableSection.css";
import { FiArrowUpRight } from "react-icons/fi";
// import Max_1250T from "../../images/Max_1250T.png";
import Engine from "../../images/Engine.jpeg";
import riders from "../../images/riders.png";
import iron from "../../images/iron.png";

const TableSection = () => {
  const handleClick = () => {
    window.open(
      "https://www.harley-davidson.com/pt/pt/motorcycles/pan-america-1250.html",
      "_blank"
    );
  };

  return (
    <div className="main-container">
      <div className="first-container">
        <p className="container-paragraph">
          New Revolution Max 1250T has liquid cooled powertrain offering amp
          torque and immediate powerband.
        </p>
        <button onClick={handleClick} className="container-btn">
          Learn More
          <FiArrowUpRight />
        </button>
        <div>
          <img className="first-img" src={iron} height={300} alt="1250T" />
        </div>
      </div>
      <div className="second-container">
        <div className="second-container-item">
          <img
            src={Engine}
            alt="engine"
            className="item-img"
            width="100%"
            height={225}
          />
        </div>
        <div className="second-container-item second-container-item2">
          <div className="second-container-item2-special2">
            <h1>90</h1>
            <p>KW</p>
          </div>
          <p className="container-paragraph">Engine Horsepower</p>
        </div>
        <div className="second-container-item second-container-item2">
          <p className="container-paragraph">
            Experience our new approach to dynamic torque, fluid cooling engine.
          </p>
          <div className="second-container-item2-special">
            <div className="second-container-item2-special2">
              <h1>125</h1>
              <p>NM</p>
            </div>
            <h5 className="container-paragraph">Engine Torque</h5>
          </div>
        </div>
        <div className="second-container-item second-container-item2 second-container-gradient">
          <h1>The riders</h1>
          <img src={riders} alt="riders" width={160} height={110} />
        </div>
      </div>
    </div>
  );
};

export default TableSection;
