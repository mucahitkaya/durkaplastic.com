import "./products.css";
import { DownOutlined, RightOutlined } from "@ant-design/icons";
import { useState } from "react";

import ProductCategory from "../../components/productscategory/ProductCategory";
import ProductInfo from "../../components/productsintro/ProductInfo";

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
          <ProductInfo />
          <ProductCategory />
        </div>
      </div>
    </>
  );
}

export default Products;
