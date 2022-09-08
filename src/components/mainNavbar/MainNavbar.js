import "./styles.css";
import logo from "../../images/durkalogo.svg";
import { MenuOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import PopupNav from "../popup/PopupNav";

function MainNavbar({ activeMenu, setActiveMenu }) {
  return (
    <>
      <div className="navbarcontainer ">
        <div className="brandcontainer">
          <div className="logo">
            <img src={logo} alt="anasayfalogo" />
          </div>
        </div>
        <div className="menucontainer">
          <div className="menutitles">
            <div>
              <Link to="/">Anasayfa </Link>
            </div>
            <div>
              <Link to="/Products">Products </Link>
            </div>
            <div>
              <Link to="/Communication">İletişim</Link>
            </div>
            <div>
              <Link to="Kurumsal"> Kurumsal</Link>
            </div>
          </div>
          <div onClick={() => setActiveMenu(!activeMenu)} className="menuicon">
            <MenuOutlined />
          </div>
        </div>
      </div>
      {activeMenu && <PopupNav />}
    </>
  );
}
export default MainNavbar;
