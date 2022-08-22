import "./styles.css";
import logo from "../../images/kırmızıdurkalogo.svg";
import logoyazi from "../../images/durkayazımavi.svg";

function MainNavbar(params) {
  return (
    <div className="maincontainer">
      <div className="brandcontainer">
        <a href="https://durkaplastic.com" target="_blank" rel="noreferrer">
          <div className="durkalogo">
            <img id="logoimg" src={logo} alt="20likbidon" />
            <img id="logoyazi" src={logoyazi} alt="30lukbidon" />
          </div>
        </a>
      </div>
      <div className="menucontainer"></div>
    </div>
  );
}
export default MainNavbar;
