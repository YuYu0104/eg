import React from "react";
import Navigation from "./Navigation";
import Header from "./Header";
import Product from "./product";
import Service from "./service";
import Contact from "./contact";

function Frontend(props) {
  return (
    <div>
      <Navigation></Navigation>
      <Header></Header>
      <Product></Product>
      <Service></Service>
      <Contact></Contact>
    </div>
  );
}
export default Frontend;
