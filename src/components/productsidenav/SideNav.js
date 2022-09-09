import "./sidenav.css";
import { DownOutlined, RightOutlined } from "@ant-design/icons";
import { useState } from "react";
import { Link } from "react-router-dom";

function SideNav() {
  const [isActiveOne, setIsActiveOne] = useState(false);
  const [isActiveTwo, setIsActiveTwo] = useState(false);
  const [isActiveThree, setIsActiveThree] = useState(false);
  const [isActiveFour, setIsActiveFour] = useState(false);

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
      <div
        className={isActiveThree ? "menubaractive" : "menubar"}
        onClick={(e) => setIsActiveThree(!isActiveThree)}
      >
        <a className="menubaritemcategory">
          <p>Mutfak Grubu</p>
          <DownOutlined id="productsicon" />
        </a>
      </div>
      {isActiveThree && (
        <div id="fak">
          <div className="submenuitemcontainer">
            <Link to="/Products" className="submenuitem">
              <p>Yağ Bidonlarımız</p>
              <RightOutlined id="productsicon" />
            </Link>
          </div>
        </div>
      )}
      <div
        className={isActiveFour ? "menubaractive" : "menubar"}
        onClick={(e) => setIsActiveFour(!isActiveFour)}
      >
        <a className="menubaritemcategory">
          <p>Temizlik Grubu</p>
          <DownOutlined id="productsicon" />
        </a>
      </div>
      {isActiveFour && (
        <div id="fak">
          <div className="submenuitemcontainer">
            <Link to="/Products" className="submenuitem">
              <p>5 lik Çanta Bidon</p>
              <RightOutlined id="productsicon" />
            </Link>
          </div>
          <div className="submenuitemcontainer">
            <Link to="/Products" className="submenuitem">
              <p>5 lik Kule Bidon</p>
              <RightOutlined id="productsicon" />
            </Link>
          </div>
          <div className="submenuitemcontainer">
            <Link to="/Products" className="submenuitem">
              <p>1 lik Dezenfektan Şişe</p>
              <RightOutlined id="productsicon" />
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default SideNav;
