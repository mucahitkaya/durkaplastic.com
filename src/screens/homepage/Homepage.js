import ImageSection from "../../components/imageSection/ImageSection";
import mavibidon from "../../images/mavibidon.png";
import "./homepage.css";
function HomePage() {
  return (
    <>
      <ImageSection />
      <div className="productcontainer">
        <div id="titlecontainer">
          <h2 id="maintitle">ÜRÜNLER</h2>
        </div>
        <div className="homepagecategorys">
          <div className="card">
            <div className="card-image">
              <img alt="20lik Bidon " src={mavibidon} />
            </div>
            <div className="card-image-title">
              <h3 className="titlecontainerstitles">Gıda Grubu</h3>
            </div>
          </div>
          <div className="card">
            <div className="card-image">
              <img alt="30lik Bidon" src={mavibidon} />
            </div>
            <div className="card-image-title">
              <h3 className="titlecontainerstitles">Kimya Grubu</h3>
            </div>
          </div>
          <div className="card">
            <div className="card-image">
              <img alt="25lik bidon" src={mavibidon} />
            </div>
            <div className="card-image-title">
              <h3 className="titlecontainerstitles">Temizlik Grubu</h3>
            </div>
          </div>
          <div className="card">
            <div className="card-image">
              <img alt="30luk bidon" src={mavibidon} />
            </div>
            <div className="card-image-title">
              <h3 className="titlecontainerstitles">Tarım Grubu</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
