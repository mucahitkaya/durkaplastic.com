import React from "react";
import "./styles.css";

import {
  PhoneOutlined,
  EnvironmentOutlined,
  MailOutlined,
} from "@ant-design/icons";
function MiniNavbar(params) {
  return (
    <div className="mininavbarcontainer">
      <div>
        <a
          className="navigation-link"
          href="https://goo.gl/maps/MisgNoeY7AGQKjGP8"
          target="_blank"
          rel="noreferrer"
        >
          <div className="inner-container">
            <div className="detail-container">
              <EnvironmentOutlined id="icon" />
            </div>
            <div className="detail-container">
              Yeşiloba Mah. Başpınar Sanayi
            </div>
          </div>
        </a>
      </div>
      <div className="second-container">
        <a
          className="navigation-link"
          href="tel:0532 643 72 33"
          target="_blank"
          rel="noreferrer"
        >
          <div className="inner-container">
            <div className="detail-container">
              <PhoneOutlined id="icon" />
            </div>
            <div className="detail-container">0532 643 72 33</div>
          </div>
        </a>
        <a
          className="navigation-link"
          href="mailto:durkaplasrikmak@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          <div className="inner-container">
            <div className="detail-container">
              <MailOutlined id="icon" />
            </div>
            <div className="detail-container">durkaplastic@hotmail.com</div>
          </div>
        </a>
      </div>
    </div>
  );
}

export default MiniNavbar;
