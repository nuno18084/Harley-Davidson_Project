import React from "react";
import "./Buttons.css";
import { TbBike } from "react-icons/tb";
import { BiFileFind } from "react-icons/bi";

const Buttons = () => {
  return (
    <div className="btn-stand">
      <div>
        <button className="btn-stand-dealer btn-icon">
          <BiFileFind size={20} />
          Find a Dealer
        </button>
      </div>
      <div>
        <button className="btn-stand-ride btn-icon">
          <TbBike size={20} />
          Test ride
        </button>
      </div>
    </div>
  );
};

export default Buttons;
