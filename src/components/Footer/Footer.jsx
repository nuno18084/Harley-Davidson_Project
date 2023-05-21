import React from "react";
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
    <div className="footer-main-container">
      <div className="footer-first-container">
        <div className="footer-logo-section">
          <div>
            <img src={Logo} alt="footer-logo" height={35} width={150} />
          </div>
          <div>
            <h5>Stay Connected with us</h5>
          </div>
          <div className="footer-social-media-section">
            <div>
              <AiFillFacebook />
            </div>
            <div>
              <AiFillTwitterSquare />
            </div>
            <div>
              <AiFillLinkedin />
            </div>
          </div>
        </div>
        <div className="footer-nav-section">
          <div>
            <h5>Home</h5>
            <ul>
              <li>About Us</li>
              <li>Events</li>
              <li>News</li>
              <li>Blog</li>
            </ul>
          </div>
          <div>
            <h5>About</h5>
            <ul>
              <li>Company</li>
              <li>Career</li>
              <li>Investors</li>
              <li>News</li>
            </ul>
          </div>
          <div>
            <h5>Bikes</h5>
            <ul>
              <li>Motorcycles</li>
              <li>Collection</li>
              <li>Electronic</li>
              <li>Shop all</li>
            </ul>
          </div>
          <div>
            <h5>Offers</h5>
            <ul>
              <li>Shipping</li>
              <li>Exchanges</li>
              <li>Insurance</li>
              <li>Service</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-second-container">
        <div>
          <h5>Privacy Policy</h5>
          <h5>Disclaimers</h5>
          <h5>Insurance</h5>
        </div>
        <div>
          <button onClick={handleDealer}>
            <BiFileFind size={20} />
            Find a Dealer
          </button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
