import React from "react";
import Navigation from "../Navigation";
import ProductDetail from "./productDetail";
function ProductList(props) {
  return (
    <div>
      <Navigation></Navigation>
      <ProductDetail></ProductDetail>
    </div>
  );
}
export default ProductList;
