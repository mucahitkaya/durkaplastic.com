import "./products.css";
import ProductCategory from "../../components/productscategory/ProductCategory";
import ProductInfo from "../../components/productsintro/ProductInfo";
import SideNav from "../../components/productsidenav/SideNav";

function Products() {
  return (
    <>
      <div className="productspagecontainer">
        <SideNav />
        <div className="productscontainer">
          <ProductInfo />
          <ProductCategory />
        </div>
      </div>
    </>
  );
}

export default Products;
