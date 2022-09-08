import "./popupnav.css";
import { Link } from "react-router-dom";

function PopupNav() {
  return (
    <div className="popupcontainer">
      <div className="linkscontainer">
        <div>
          <Link id="popuplinks" to="/">
            Anasayfa{" "}
          </Link>
        </div>
        <div>
          <Link id="popuplinks" to="/Products">
            Products{" "}
          </Link>
        </div>
        <div>
          <Link id="popuplinks" to="/Kurumsal">
            Kurumsal{" "}
          </Link>
        </div>
      </div>
    </div>
  );
}
export default PopupNav;
