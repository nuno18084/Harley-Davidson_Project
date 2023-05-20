import React from "react";
import "./Buttons.css";
import { TbBike } from "react-icons/tb";
import { BiFileFind } from "react-icons/bi";

const Buttons = () => {
  const handleDealer = () => {
    window.open(
      "https://www.harley-davidson.com/pt/pt/tools/find-a-dealer.html",
      "_blank"
    );
  };

  const handleRide = () => {
    window.open("https://testrides.harley-davidson.com/pt_PT/", "_blank");
  };

  return (
    <div className="btn-stand">
      <div>
        <button onClick={handleDealer} className="btn-stand-dealer btn-icon">
          <BiFileFind size={20} />
          Find a Dealer
        </button>
      </div>
      <div>
        <button onClick={handleRide} className="btn-stand-ride btn-icon">
          <TbBike size={20} />
          Test ride
        </button>
      </div>
    </div>
  );
};

export default Buttons;
