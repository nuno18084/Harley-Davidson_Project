import React from "react";
// import { Link } from "react-router-dom";
import "./Navbar.css";
import Logo from "../../images/logo.png";

const Navbar = () => {
  const handleClick = () => {
    window.open(
      "https://www.facebook.com/Harley-Davidson-Portugal-105785147709941/",
      "_blank"
    );
  };

  return (
    <div className="navbar-section">
      <div className="navbar-container">
        <img className="logo" src={Logo} alt="logo" height={45} width={200} />
        <div className="center-nav">
          <a
            href="https://www.harley-davidson.com/pt/pt/products/bikes.html"
            target="_blank"
            rel="noreferrer"
          >
            <div>Bikes</div>
          </a>
          <a
            href="https://www.harley-davidson.com/pt/pt/products/bikes.html"
            target="_blank"
            rel="noreferrer"
          >
            <div>New Arrivals</div>
          </a>
          <a
            href="https://www.harley-davidson.com/pt/pt/shop/c/motorcycle-parts"
            target="_blank"
            rel="noreferrer"
          >
            <div>Parts</div>
          </a>
          <a
            href="https://www.harley-davidson.com/pt/pt/motorcycles/index.html?format=json;i=1;locale=pt_PT;q1=bikes;sp_cs=UTF-8;x1=primaryCategoryCode"
            target="_blank"
            rel="noreferrer"
          >
            <div>Shop</div>
          </a>
          <a
            href="https://serviceinfo.harley-davidson.com/sip/vehicle/lookupForm"
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
