import React from "react";
import "./Footer.css";
import Logo from "../../images/logo.png";
import { AiFillFacebook } from "react-icons/ai";
import { AiFillTwitterSquare } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { BiFileFind } from "react-icons/bi";

const Footer = () => {
  const handleDealer = () => {
    window.open(
      "https://www.harley-davidson.com/pt/pt/tools/find-a-dealer.html",
      "_blank"
    );
  };

  return (
    <div className="background-container">
      <div className="footer-main-container">
        <div className="footer-first-container">
          <div className="footer-logo-section">
            <div>
              <img
                className="logo-image"
                src={Logo}
                alt="footer-logo"
                height={35}
                width={150}
              />
            </div>
            <div>
              <h5 className="first-h5">Stay Connected with us</h5>
            </div>
            <div className="footer-social-media-section">
              <div>
                <AiFillFacebook size={20} />
              </div>
              <div>
                <AiFillTwitterSquare size={20} />
              </div>
              <div>
                <AiFillLinkedin size={20} />
              </div>
            </div>
          </div>
          <div className="footer-nav-section">
            <div>
              <h5>Home</h5>
              <ul className="footer-nav-list">
                <li>About Us</li>
                <li>Events</li>
                <li>News</li>
                <li>Blog</li>
              </ul>
            </div>
            <div>
              <h5>About</h5>
              <ul className="footer-nav-list">
                <li>Company</li>
                <li>Career</li>
                <li>Investors</li>
                <li>News</li>
              </ul>
            </div>
            <div>
              <h5>Bikes</h5>
              <ul className="footer-nav-list">
                <li>Motorcycles</li>
                <li>Collection</li>
                <li>Electronic</li>
                <li>Shop all</li>
              </ul>
            </div>
            <div>
              <h5>Offers</h5>
              <ul className="footer-nav-list">
                <li>Shipping</li>
                <li>Exchanges</li>
                <li>Insurance</li>
                <li>Service</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-second-container">
          <div className="footer-second-links">
            <h5>Privacy Policy</h5>
            <h5>Disclaimers</h5>
            <h5>Insurance</h5>
          </div>
          <div className="btn-container">
            <button
              className="footer-dealer-btn btn-icon"
              onClick={handleDealer}
            >
              <div>
                <BiFileFind size={20} className="dealer-icon btn-icon" />
              </div>
              Find a Dealer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
