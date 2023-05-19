import React from "react";
import "./TableSection.css";
import { FiArrowUpRight } from "react-icons/fi";
import Max_1250T from "../../images/Max_1250T.png";
import Engine from "../../images/Engine.jpeg";

const TableSection = () => {
  return (
    <div className="main-container">
      <div className="first-container">
        <p>
          New Revolution Max 1250T has liquid cooled powertrain offering amp
          torque and immediate powerband.
        </p>
        <button className="container-btn">
          Learn More
          <FiArrowUpRight />
        </button>
        <div>
          <img
            className="first-img"
            src={Max_1250T}
            width={350}
            height={340}
            alt="1250T"
          />
        </div>
      </div>
      <div className="second-container">
        <div className="second-container-item">
          <img
            src={Engine}
            alt="engine"
            className="item-img"
            width={298}
            height={225}
          />
        </div>
        <div className="second-container-item second-container-item2">
          <h1>90 KW</h1>
          <p>Engine Horsepower</p>
        </div>
        <div className="second-container-item second-container-item2">
          <p>
            Experience our new approach to dynamic torque, fluid cooling engine.
          </p>
          <h1>125 NM</h1>
          <div>
            <h5>Engine Torque</h5>
          </div>
        </div>
        <div className="second-container-item second-container-item2 second-container-gradient">
          <h1>The riders</h1>
          <p>dofvirfv</p>
        </div>
      </div>
    </div>
  );
};

export default TableSection;
