import React from "react";
import axios from "axios";
function Productdelete(props) {
  var reqtoken = localStorage.getItem("pizza");
  axios({
    method: "post",
    url: "http://127.0.0.1:7000/products/" + props.id + "/delete",
    headers: {
      Authorization: `Basic ${reqtoken}`,
    },
  }).then((response) => {
    window.location.href = "/admin/products";
  });
  return <div></div>;
}
export default Productdelete;
