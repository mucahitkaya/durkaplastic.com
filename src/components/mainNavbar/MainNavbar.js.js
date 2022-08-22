import "./styles.css";
import logo from "../../images/kırmızıdurkalogo.svg";
import logoyazi from "../../images/durkayazımavi.svg";
import { MenuOutlined } from "@ant-design/icons";

function MainNavbar(params) {
  return (
    <div className="maincontainer">
      <div className="brandcontainer">
        <a href="https://durkaplastic.com" target="_blank" rel="noreferrer">
          <div className="durkalogo">
            <div>
              <img id="logoimg" src={logo} alt="20likbidon" />
            </div>
            <div>
              <img id="logoyazi" src={logoyazi} alt="30lukbidon" />
            </div>
          </div>
        </a>
      </div>
      <div className="menucontainer">
        <MenuOutlined id="hamburgermenu" />
        <div className="menu">
          <span className="menuitem">Anasayfa</span>
          <span className="menuitem">Ürünler</span>
          <span className="menuitem">İletişim</span>
        </div>
      </div>
    </div>
  );
}
export default MainNavbar;
