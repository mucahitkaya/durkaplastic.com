import "./productlist.css";
import mavibidon from "../../images/mavibidon.png";
import { Link } from "react-router-dom";
import SideNav from "../productsidenav/SideNav";
import { useEffect, useState } from "react";

function ProductList(params) {
  const [selectedType, setSelectedType] = useState("Sisirme");
  const [typeData, setTypeData] = useState();

  // useEffect(() => {
  //   const getList = async () => {
  //     const response = await fetch("http://localhost:3000/" + selectedType);
  //     const parsedResponse = await response.json();
  //     setTypeData(parsedResponse);
  //   };
  //   getList();
  // }, [selectedType]);

  // const handleClick = (e) => {
  //   setSelectedType(e.key);
  // };

  // const renderType = () => {
  //   if (typeData === null) return null;

  //   const { info, products } = typeData;
  //   return (
  //     <>
  //       {info ? (
  //         <div>
  //           <p>{info}</p>
  //         </div>
  //       ) : null}

  //       {Object.keys(products).map((pName) => {
  //         const { img, desc } = typeData.products[pName];
  //         return (
  //           <div className="productcard">
  //             <Link to="/TarimGrubu/aha">
  //               <div className="productcardimagecontainer">
  //                 <img alt="20lik Bidon " src={mavibidon} />
  //               </div>
  //               <div className="productcardtitlecontainer">
  //                 <h3>20 lt Turuncu Bidon</h3>
  //               </div>
  //             </Link>
  //           </div>
  //         );
  //       })}
  //     </>
  //   );
  // };

  return (
    <>
      <SideNav />
      <div className="listcontainer">
        {/* {renderType()} */}
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
