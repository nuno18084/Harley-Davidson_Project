import React from "react";
// import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar-section">
      <div className="navbar-container">
        <img
          className="logo"
          src="https://www.imgtr.ee/images/2023/05/10/lJVam.png"
          alt="logo"
          height={45}
          width={200}
        />
        <div className="center-nav">
          {/* <div>Bikes</div> */}
          <select placeholder="BIKES" className="bikes-dropdown">
            <option>Bikes</option>
            <option>Bike 1</option>
            <option>Bike 2</option>
            <option>Bike 3</option>
          </select>
          <div>New Arrivals</div>
          <div>Parts</div>
          <div>Shop</div>
          <div>Services</div>
        </div>
        <button className="navbar-button">Contact Us</button>
      </div>
    </div>
  );
};

export default Navbar;
