import "./styles.css";
import logo from "../../images/durkalogo.svg";
import logoyazi from "../../images/durkayazımavi.svg";
import { MenuOutlined } from "@ant-design/icons";

function MainNavbar(params) {
  return (
    <div className="maincontainer">
      <div className="brandcontainer">
        <div className="logo">
          <img src={logo} alt="anasayfalogo" />
        </div>
      </div>
      <div className="menucontainer">
        <div className="menutitles">
          <div>
            <a href="/">Anasayfa</a>
          </div>
          <div>
            <a href="/Products">Ürünler</a>
          </div>
          <div>
            <a href="/Communication">İletişim</a>
          </div>
          <div>
            <a href="/Kurumsal">Kurumsal</a>
          </div>
        </div>
        <div className="menuicon">
          <MenuOutlined />
        </div>
      </div>
    </div>
  );
}
export default MainNavbar;
