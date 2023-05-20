import React from "react";
// import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const handleClick = () => {
    window.open(
      "https://www.harley-davidson.com/pt/pt/products/bikes.html",
      "_blank"
    );
  };

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
          <a
            href="https://www.harley-davidson.com/pt/pt/products/bikes.html"
            target="_blank"
            rel="noreferrer"
          >
            <div>New Arrivals</div>
          </a>
          <a
            href="https://www.harley-davidson.com/pt/pt/products/bikes.html"
            target="_blank"
            rel="noreferrer"
          >
            <div>Parts</div>
          </a>
          <a
            href="https://www.harley-davidson.com/pt/pt/products/bikes.html"
            target="_blank"
            rel="noreferrer"
          >
            <div>Shop</div>
          </a>
          <a
            href="https://www.harley-davidson.com/pt/pt/products/bikes.html"
            target="_blank"
            rel="noreferrer"
          >
            <div>Services</div>
          </a>
        </div>
        <button onClick={handleClick} className="navbar-button">
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default Navbar;
