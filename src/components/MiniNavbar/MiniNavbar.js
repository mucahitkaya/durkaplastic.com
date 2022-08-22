import React from "react";
import "./styles.css";

import { HomeOutlined } from "@ant-design/icons";
function MiniNavbar(params) {
  return (
    <div className="container">
      <div>
        <a
          className="navigation-link first"
          href="https://goo.gl/maps/MisgNoeY7AGQKjGP8"
          target="_blank"
          rel="noreferrer"
        >
          Yeşiloba Mahallesi 46103 sokak Uzun Kavak Sanayi Sitesi D.No: 26/A
          Seyhan/ADANA
        </a>
      </div>
      <div>
        <a
          className="navigation-link second"
          href="tel:0532 643 72 33"
          target="_blank"
          rel="noreferrer"
        >
          <HomeOutlined />
          0532 643 72 33
        </a>
      </div>
    </div>
  );
}

export default MiniNavbar;
