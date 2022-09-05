import "./products.css";
import {
  DownOutlined,
  RightOutlined,
  DownCircleOutlined,
} from "@ant-design/icons";
import { useState } from "react";

function Products(params) {
  const [isActive, setIsActive] = useState("");
  console.log(isActive);
  return (
    <>
      <div className="productscontainer">
        <div className="sidemenu">
          <div
            className={isActive ? "menubaractive" : "menubar"}
            onClick={(e) => setIsActive(e.target.className)}
          >
            <a className="menubaritemcategory">
              <p>Tarım Grubu</p>
              <DownOutlined id="productsicon" />
            </a>
          </div>
          {isActive && (
            <div id="fak">
              <a className="submenuitem">
                <p>asdasd Grubu</p>
                <RightOutlined id="productsicon" />
              </a>{" "}
              <a className="submenuitem">
                <p>23424 Grubu</p>
                <RightOutlined id="productsicon" />
              </a>{" "}
              <a className="submenuitem">
                <p>asfda23Grubu</p>
                <RightOutlined id="productsicon" />
              </a>{" "}
            </div>
          )}
          <div
            className={isActive ? "menubaractive" : "menubar"}
            onClick={(e) => setIsActive(!isActive)}
          >
            <a className="menubaritemcategory">
              <p>Kimya Grubu</p>
              <DownOutlined id="productsicon" />
            </a>
          </div>
          {isActive && (
            <div>
              <a className="submenuitem">
                <p>asdasd Grubu</p>
                <RightOutlined id="productsicon" />
              </a>{" "}
              <a className="submenuitem">
                <p>23424 Grubu</p>
                <RightOutlined id="productsicon" />
              </a>{" "}
              <a className="submenuitem">
                <p>asfda23Grubu</p>
                <RightOutlined id="productsicon" />
              </a>{" "}
            </div>
          )}
        </div>
        <div className="productspage">secondcontainer</div>
      </div>
    </>
  );
}

export default Products;
