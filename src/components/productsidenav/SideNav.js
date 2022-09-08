import "./sidenav.css";
import { DownOutlined, RightOutlined } from "@ant-design/icons";
import { useState } from "react";
import { Link } from "react-router-dom";

function SideNav() {
  const [isActiveOne, setIsActiveOne] = useState(false);
  const [isActiveTwo, setIsActiveTwo] = useState(false);

  return (
    <div className="sidemenu">
      <div
        className={isActiveOne ? "menubaractive" : "menubar"}
        onClick={() => setIsActiveOne(!isActiveOne)}
      >
        <a>
          <div className="menubaritemcategory">
            <p>Tarım Grubu</p>
            <DownOutlined id="productsicon" />
          </div>
        </a>
      </div>
      {isActiveOne && (
        <div id="fak">
          <div className="submenuitemcontainer">
            <Link to="/Kurumsal" className="submenuitem">
              <p>Gübre Grubu</p>
              <RightOutlined id="productsicon" />
            </Link>
          </div>
          <div className="submenuitemcontainer">
            <Link to="/Products" className="submenuitem">
              <p>İlaç Şişelerimiz</p>
              <RightOutlined id="productsicon" />
            </Link>
          </div>
          <div className="submenuitemcontainer">
            <Link to="/Products" className="submenuitem">
              <p>Sıvı Gübre Bidonları</p>
              <RightOutlined id="productsicon" />
            </Link>
          </div>
        </div>
      )}
      <div
        className={isActiveTwo ? "menubaractive" : "menubar"}
        onClick={(e) => setIsActiveTwo(!isActiveTwo)}
      >
        <a className="menubaritemcategory">
          <p>Kimya Grubu</p>
          <DownOutlined id="productsicon" />
        </a>
      </div>
      {isActiveTwo && (
        <div id="fak">
          <div className="submenuitemcontainer">
            <Link to="/Products" className="submenuitem">
              <p>Deterjan Bidonlarımız</p>
              <RightOutlined id="productsicon" />
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default SideNav;
