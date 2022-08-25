import ImageSection from "../../components/imageSection/ImageSection";
import mavibidon from "../../images/mavibidon.png";
import "./homepage.css";
function HomePage() {
  return (
    <>
      <ImageSection />
      <div className="productcontainer">
        <div className="titlecontainer">
          <h2>ÜRÜNLER</h2>
        </div>
        <div className="productlistcontainer">
          <div className="card">
            <div className="card-image">
              <img alt="20lik Bidon " src={mavibidon} />
            </div>
            <div className="card-image-title">
              <h3>Gıda Grubu</h3>
            </div>
          </div>
          <div className="card">
            <div className="card-image">
              <img alt="30lik Bidon" src={mavibidon} />
            </div>
            <div className="card-image-title">
              <h3>Kimya Grubu</h3>
            </div>
          </div>
          <div className="card">
            <div className="card-image">
              <img alt="25lik bidon" src={mavibidon} />
            </div>
            <div className="card-image-title">
              <h3>Temizlik Grubu</h3>
            </div>
          </div>
          <div className="card">
            <div className="card-image">
              <img alt="30luk bidon" src={mavibidon} />
            </div>
            <div className="card-image-title">
              <h3>Tarım Grubu</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
