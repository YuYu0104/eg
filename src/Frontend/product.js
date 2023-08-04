import React, { useState } from "react";
import axios from "axios";
function Product(props) {
  let [data, setData] = useState([]);
  var reqtoken = localStorage.getItem("pizza");
  axios({
    url: "http://127.0.0.1:7000/products",
    method: "get",
    headers: {
      Authorization: `Basic ${reqtoken}`,
    },
  })
    .then((response) => {
      setData(response.data);
    })
    .catch((error) => {
      // Handle error
      console.log(error.message); // "Network Error"
      console.log(error.name); // "AxiosError"
    });
  return (
    <div id="productContainer">
      <h2 className="pt-5">Our Products</h2>
      <div class="Procontainer">
        {data.map((e) => {
          return (
            <div class="box">
              <h4>{e.name}</h4>
              <div className="image-wrapper">
                <img
                  src={"http://127.0.0.1:7000/images/" + e.image}
                  alt="Image"
                />
              </div>
              <p>{e.des}</p>
              <div class="productPrice">
                <p>
                  MMK <span>{e.price}</span>{" "}
                </p>
                <p>
                  <i class="fa-sharp fa-solid fa-cart-shopping">
                    <span>0</span>
                  </i>
                </p>
              </div>
              <a href="/product">
                <button type="button" class="btn btn-primary">
                  View
                </button>
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default Product;
