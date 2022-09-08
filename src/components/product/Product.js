import "./product.css";
import SideNav from "../productsidenav/SideNav";
import mavibidon from "../../images/mavibidon.png";

function Product(params) {
  return (
    <div className="productpagecontainer">
      <SideNav />
      <div className="productcardfeature">
        <div className="imagecontainer">
          <div className="bigimagecontainer">
            <img alt="20lik Bidon" src={mavibidon} />
          </div>
        </div>
        <div className="productfeatures">
          <div>
            <h2>30 Lt Bidon</h2>
          </div>
          <div className="featuresdetails">
            <p>
              <strong style={{ color: "rgb(123, 58, 58)" }}>Ürün Kodu:</strong>{" "}
              Ş0801
            </p>
            <br />
            <p>
              <strong style={{ color: "rgb(123, 58, 58)" }}>Hacim:</strong> 25L
            </p>
            <br />
            <p>
              <strong style={{ color: "rgb(123, 58, 58)" }}>Yükseklik:</strong>
              24cm
            </p>
            <br />
            <p>
              <strong style={{ color: "rgb(123, 58, 58)" }}>
                Ürün Ağırlığı:
              </strong>
              1.100gr
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
