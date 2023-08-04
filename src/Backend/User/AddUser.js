import React, { useState } from "react";
import axios from "axios";
let nameRef = React.createRef();
let emailRef = React.createRef();
let passwordRef = React.createRef();
function AddUser(props) {
  let [check, setCheck] = useState(false);
  let [message, setMessage] = useState();
  return (
    <div className=" bg-dark container-fluid p-4">
      <h2>
        <i class="fa-solid fa-circle-plus nav-icon"></i> AddUser
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
      <form>
        <div class="form-group ">
          <label for="exampleInputEmail1">User Name</label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter User Name"
            ref={nameRef}
          />
        </div>

        <div class="form-group ">
          <label for="exampleInputEmail1">User Email</label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter User Email"
            ref={emailRef}
          />
        </div>
        <div class="form-group ">
          <label for="exampleInputEmail1">User Password</label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter User Password"
            ref={passwordRef}
          />
        </div>

        <button
          type="submit"
          class="btn btn-primary"
          onClick={(e) => sendData(e, setCheck, setMessage)}
        >
          Submit
        </button>
      </form>
    </div>
  );
}
function sendData(e, setCheck, setMessage) {
  e.preventDefault();
  let data = {
    name: nameRef.current.value,
    email: emailRef.current.value,
    password: passwordRef.current.value,
  };

  let formData = new FormData();
  formData.append("data", JSON.stringify(data));
  var reqtoken = localStorage.getItem("pizza");
  axios({
    url: "http://127.0.0.1:7000/user",
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
export default AddUser;
