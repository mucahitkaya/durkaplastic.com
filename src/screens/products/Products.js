import "./products.css";
import { DownOutlined, RightOutlined } from "@ant-design/icons";
import { useState } from "react";
import mavibidon from "../../images/mavibidon.png";

function Products(params) {
  const [isActiveOne, setIsActiveOne] = useState(false);
  const [isActiveTwo, setIsActiveTwo] = useState(false);

  return (
    <>
      <div className="productspagecontainer">
        <div className="sidemenu">
          <div
            className={isActiveOne ? "menubaractive" : "menubar"}
            onClick={(e) => setIsActiveOne(!isActiveOne)}
          >
            <a className="menubaritemcategory">
              <p>Tarım Grubu</p>
              <DownOutlined id="productsicon" />
            </a>
          </div>
          {isActiveOne && (
            <div id="fak">
              <div className="submenuitemcontainer">
                <a
                  href="https://www.youtube.com/watch?v=kgOgr3IRg-w"
                  className="submenuitem"
                >
                  <p>Gübre Grubu</p>
                  <RightOutlined id="productsicon" />
                </a>{" "}
              </div>
              <div className="submenuitemcontainer">
                <a
                  href="https://www.w3docs.com/snippets/css/how-to-override-css-styles.html"
                  className="submenuitem"
                >
                  <p>İlaç Şişelerimiz</p>
                  <RightOutlined id="productsicon" />
                </a>{" "}
              </div>
              <div className="submenuitemcontainer">
                <a
                  href="https://www.w3docs.com/snippets/css/how-to-override-css-styles.html"
                  className="submenuitem"
                >
                  <p>Sıvı Gübre Bidonları</p>
                  <RightOutlined id="productsicon" />
                </a>{" "}
              </div>
            </div>
          )}
          <div
            className={isActiveTwo ? "menubaractive" : "menubar"}
            onClick={(e) => setIsActiveTwo(!isActiveTwo)}
          >
            <a className="menubaritemcategory">
              <p>Kimya Grubu</p>
              <DownOutlined id="productsicon" />
            </a>
          </div>
          {isActiveTwo && (
            <div id="fak">
              <div className="submenuitemcontainer">
                <a
                  href="https://www.youtube.com/watch?v=kgOgr3IRg-w"
                  className="submenuitem"
                >
                  <p>Deterjan Bidonlarımız</p>
                  <RightOutlined id="productsicon" />
                </a>{" "}
              </div>
            </div>
          )}
        </div>
        <div className="productscontainer">
          <div className="introcontainer">
            <div className="introtitle">
              <h1 className="ppagetitle">Durka Plastik Ürünler</h1>
            </div>
            <div className="introarticle">
              <p className="ppageparagraph">
                Ulucan Plastik olarak Adana’da Geri Dönüşüm Grubu’nda Rulo Çöp
                Poşeti, Dökme Çöp Poşeti ve Atlet Geri Dönüşüm Poşetleri,
                Ambalaj Grubu’nda da özellikle market, bakkal, manav, pazarlar
                ve fırın gibi işyerlerinde kullanılan Atlet Kesim Poşetler
                üreterek tedarikçilerimizin hizmetine sunuyoruz.
              </p>
            </div>
          </div>

          <div className="productscategorycontainer">
            <div className="productscategory">
              <a href="_blank">
                <div className="productscategoryimagecontainer">
                  <img alt="20lik Bidon " src={mavibidon} />
                </div>
                <div className="productscategorytitlecontainer">
                  <h3 className="productscategorytitle">Tarım Grubu</h3>
                </div>
              </a>
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
        </div>
      </div>
    </>
  );
}

export default Products;
