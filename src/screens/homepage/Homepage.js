import ImageSection from "../../components/imageSection/ImageSection";
import "./homepage.css";
function HomePage(params) {
  return (
    <>
      <ImageSection />
      <div className="productcontainer">
        <div className="titlecontainer">
          <h2>ÜRÜNLER</h2>
        </div>
        <div className="productlistcontainer">
          <div className="card">
            <div className="card-image"></div>
            <div className="card-image"></div>
          </div>
          <div className="card">
            <div className="card-image"></div>
            <div className="card-image"></div>
          </div>
          <div className="card">
            <div className="card-image"></div>
            <div className="card-image"></div>
          </div>
          <div className="card">
            <div className="card-image"></div>
            <div className="card-image"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
