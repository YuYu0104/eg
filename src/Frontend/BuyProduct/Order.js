import React, { useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
let nameRef = React.createRef();
let addressRef = React.createRef();
let phoneRef = React.createRef();

function Order(props) {
  let [check, setCheck] = useState(false);
  let [message, setMessage] = useState();
  const location = useLocation();
  const cartArr = location.state;

  return (
    <div className=" bg-dark container-fluid p-4">
      <h2>
        <i class="fa-solid fa-circle-plus nav-icon"></i> Add Order
      </h2>
      {check && (
        <div
          class="alert alert-warning alert-dismissible fade show mt-3"
          role="alert"
        >
          {message}
          <button
            type="button"
            class="close"
            data-dismiss="alert"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
      )}

      <table class="table">
        <thead class="thead-light">
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Qty</th>
            <th scope="col">Price</th>
            <th scope="col">Sub Amount</th>
          </tr>
        </thead>
        <tbody>
          {cartArr?.map((item, index) => {
            return (
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.qty}</td>
                <td>{item.price}</td>
                <td>{item.price * item.qty}</td>
              </tr>
            );
          })}

          <tr>
            <th colSpan={3}>Total Amount</th>
            <td>
              {cartArr.reduce((pre, next) => pre + next.price * next.qty, 0)}{" "}
              MMK
            </td>
          </tr>
        </tbody>
      </table>
      <form>
        <div class="form-group ">
          <label for="exampleInputEmail1"> Name</label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter Your Name"
            ref={nameRef}
          />
        </div>

        <div class="form-group ">
          <label for="exampleInputEmail1"> Address</label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter Your Adress"
            ref={addressRef}
          />
        </div>
        <div class="form-group ">
          <label for="exampleInputEmail1">Phone</label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter Your Phone"
            ref={phoneRef}
          />
        </div>

        <button
          type="submit"
          class="btn btn-primary"
          onClick={(e) => sendData(e, setCheck, setMessage, cartArr)}
        >
          Submit
        </button>
      </form>
    </div>
  );
}
function sendData(e, setCheck, setMessage, cartArr) {
  e.preventDefault();
  let data = {
    username: nameRef.current.value,
    address: addressRef.current.value,
    phone: phoneRef.current.value,
  };

  let formData = new FormData();
  formData.append("data", JSON.stringify(data));
  formData.append("cart", JSON.stringify({ order: cartArr }));
  var reqtoken = localStorage.getItem("pizza");
  axios({
    url: "http://127.0.0.1:7000/customer",
    method: "post",
    data: formData,
    headers: {
      Authorization: `Basic ${reqtoken}`,
    },
  }).then((response) => {
    setCheck(true);
    setMessage(response.data.message);
  });
}
export default Order;
