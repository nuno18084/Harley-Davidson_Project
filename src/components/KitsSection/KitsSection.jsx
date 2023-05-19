import React from "react";
import "./KitsSection.css";
import Suit from "../../images/suit.png";
import Boots from "../../images/boots.png";
import Helmet from "../../images/kit_helmet.png";
import Tires from "../../images/tires.png";

const KitsSection = () => {
  return (
    <div className="kits-main-container">
      <div className="kits-title">
        <h5>Kits</h5>
        <h1>Level up your protection gear</h1>
      </div>
      <div className="kits-img-desc-section">
        <div className="kits-img-desc">
          <img
            src={Suit}
            alt="suit"
            width={260}
            height={300}
            className="kits-img"
          />
          <p>Racing Suit</p>
        </div>
        <div className="kits-img-desc">
          <p>Alpinestars Vented Boots</p>
          <img
            src={Boots}
            alt="boots"
            width={180}
            height={220}
            className="kits-img"
          />
        </div>
        <div className="kits-img-desc">
          <img
            src={Helmet}
            alt="helmet"
            width={200}
            height={180}
            className="kits-img"
          />
          <p>Grappler Helmet</p>
        </div>
        <div className="kits-img-desc">
          <p>Marathon Ultra Tires</p>
          <img
            src={Tires}
            alt="tires"
            width={200}
            height={180}
            className="kits-img"
          />
        </div>
      </div>
    </div>
  );
};

export default KitsSection;
