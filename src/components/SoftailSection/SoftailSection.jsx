import React from "react";
import "./SoftailSection.css";
import { FiArrowUpRight } from "react-icons/fi";
import Softail from "../../images/softail.png";
import America from "../../images/america.png";
import { TbBike } from "react-icons/tb";

const SoftailSection = () => {
  return (
    <div className="softail-main-section">
      <div className="softail-first-section">
        <div>
          <h5>Cruiser</h5>
          <h3>Softail-980</h3>
        </div>
        <div className="img-container">
          <img src={Softail} alt="bike" className="softail-bike-pic" />
        </div>
        <div>
          <h5>New</h5>
          <button className="softail-btn">
            Harley Davidson Collection
            <FiArrowUpRight />
          </button>
        </div>
      </div>
      <div className="softail-second-section">
        <div className="softail-second-left">
          <img src={America} alt="helmet" height={100} width={100} />
          <h3>Men's Motorcycle Helmets</h3>
        </div>
        <div className="softail-second-center">
          <p>
            Instant power and acceleration with a twist of the throttle. No
            clutch, no gas. Pure performance.
          </p>
        </div>
        <div>
          <button className="softail-second-btn btn-icon">
            <TbBike size={20} />
            See all Bikes
          </button>
        </div>
      </div>
    </div>
  );
};

export default SoftailSection;
