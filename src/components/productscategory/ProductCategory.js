import "./productdetail.css";
import mavibidon from "../../images/mavibidon.png";
import { Link } from "react-router-dom";

function ProductDetail() {
  return (
    <div className="productscategorycontainer">
      <div className="productscategory">
        <Link to="Products/TarimGrubu">
          <div className="productscategoryimagecontainer">
            <img alt="20lik Bidon " src={mavibidon} />
          </div>
          <div className="productscategorytitlecontainer">
            <h3 className="productscategorytitle">Tarım Grubu</h3>
          </div>
        </Link>
      </div>
      <div className="productscategory">
        <a href="_blank">
          <div className="productscategoryimagecontainer">
            <img alt="20lik Bidon " src={mavibidon} />
          </div>
          <div className="productscategorytitlecontainer">
            <h3 className="productscategorytitle">Kimya Grubu</h3>
          </div>
        </a>
      </div>
      <div className="productscategory">
        <a href="_blank">
          <div className="productscategoryimagecontainer">
            <img alt="20lik Bidon " src={mavibidon} />
          </div>
          <div className="productscategorytitlecontainer">
            <h3 className="productscategorytitle">Mutfak Grubu</h3>
          </div>
        </a>
      </div>
      <div className="productscategory">
        <a href="_blank">
          <div className="productscategoryimagecontainer">
            <img alt="20lik Bidon " src={mavibidon} />
          </div>
          <div className="productscategorytitlecontainer">
            <h3 className="productscategorytitle">Temizlik Grubu</h3>
          </div>
        </a>
      </div>
    </div>
  );
}

export default ProductDetail;
