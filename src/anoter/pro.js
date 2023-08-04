import React, { useState } from "react";
import axios from "axios";
function Pro(props) {
  let [data, setData] = useState([]);
  axios({
    url: "http://127.0.0.1:7000/products",
    method: "get",
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
              <button type="button" class="btn btn-primary">
                View
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default Pro;
