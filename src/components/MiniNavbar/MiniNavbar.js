import React from "react";
import "./mininavbar.css";

import {
  PhoneOutlined,
  MailOutlined,
  FacebookOutlined,
  InstagramOutlined,
  WhatsAppOutlined,
  EnvironmentOutlined,
} from "@ant-design/icons";

function MiniNavbar() {
  return (
    <div className="mininavcontainer">
      <div className="shortcutcontainer">
        <div>
          <a id="mininavbaradres" href="https://goo.gl/maps/MisgNoeY7AGQKjGP8">
            <EnvironmentOutlined id="mininavbaricon" />
          </a>
        </div>
        <div>
          <a href="mailto:durkaplastic@hotmail.com">
            <MailOutlined id="mininavbaricon" />
            <span> durkaplastic@hotmail.com</span>
          </a>
        </div>
        <div>
          <a href="tel:0532 643 72 33">
            <PhoneOutlined id="mininavbaricon" />
            <span>0532 643 72 33</span>
          </a>
        </div>
      </div>
      <div className="socialshortcutscontainer">
        <a href="https://youtube.com">
          <FacebookOutlined id="socialicons" />
        </a>
        <a href="https://youtube.com">
          <InstagramOutlined id="socialicons" />
        </a>
        <a href="https://youtube.com">
          <WhatsAppOutlined id="socialicons" />
        </a>
      </div>
    </div>
  );
}

export default MiniNavbar;
