import React, { useState } from "react";
import axios from "axios";
function Service(props) {
  let [data, setData] = useState([]);
  var reqtoken = localStorage.getItem("pizza");
  axios({
    url: "http://127.0.0.1:7000/services",
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
      <h2 className="pt-5">Our Service</h2>
      <div class="Procontainer">
        {data.map((e) => {
          return (
            <div class="box">
              <div className="image-wrapper">
                <img
                  src={"http://127.0.0.1:7000/images/" + e.image}
                  alt="Image"
                />
              </div>
              <p>{e.des}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default Service;
