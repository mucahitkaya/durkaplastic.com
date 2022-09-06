import "./styles.css";
import logo from "../../images/durkalogo.svg";
import { MenuOutlined } from "@ant-design/icons";
import { Link, NavLink } from "react-router-dom";

function MainNavbar() {
  return (
    <div className="navbarcontainer">
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
        <div className="menuicon">
          <MenuOutlined />
        </div>
      </div>
    </div>
  );
}
export default MainNavbar;
