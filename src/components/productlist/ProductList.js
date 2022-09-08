import "./productlist.css";
import mavibidon from "../../images/mavibidon.png";
import { Link } from "react-router-dom";
import SideNav from "../productsidenav/SideNav";

function ProductList(params) {
  return (
    <>
      <SideNav />
      <div className="listcontainer">
        <div className="productcard">
          <Link to="/TarimGrubu/aha">
            <div className="productcardimagecontainer">
              <img alt="20lik Bidon " src={mavibidon} />
            </div>
            <div className="productcardtitlecontainer">
              <h3>20 lt Turuncu Bidon</h3>
            </div>
          </Link>
        </div>
        <div className="productcard">
          <Link to="/TarimGrubu/ahaasd">
            <div className="productcardimagecontainer">
              <img alt="20lik Bidon " src={mavibidon} />
            </div>
            <div className="productcardtitlecontainer">
              <h3>45 lt Deterjan Bidonu</h3>
            </div>
          </Link>
        </div>
        <div className="productcard">
          <Link to="/TarimGrubu">
            <div className="productcardimagecontainer">
              <img alt="20lik Bidon " src={mavibidon} />
            </div>
            <div className="productcardtitlecontainer">
              <h3>5lt Çanta bidon</h3>
            </div>
          </Link>
        </div>
        <div className="productcard">
          <Link to="/TarimGrubu">
            <div className="productcardimagecontainer">
              <img alt="20lik Bidon " src={mavibidon} />
            </div>
            <div className="productcardtitlecontainer">
              <h3>Çok değerli ggkuş</h3>
            </div>
          </Link>
        </div>
        <div className="productcard">
          <Link to="/TarimGrubu">
            <div className="productcardimagecontainer">
              <img alt="20lik Bidon " src={mavibidon} />
            </div>
            <div className="productcardtitlecontainer">
              <h3>Bittt artık bit</h3>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}

export default ProductList;
