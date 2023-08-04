import React, { useState } from "react";
import axios from "axios";
let emailRef = React.createRef();
let passwordRef = React.createRef();

function Login(props) {
  let [message, setMessage] = useState();
  let [check, setCheck] = useState(false);
  return (
    <div className=" bg-dark container-fluid p-4 loginContainer">
      <h2>
        <i class="fa-solid fa-circle-plus nav-icon"></i> Login
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
          <label for="exampleInputEmail1">User Email</label>
          <input
            ref={emailRef}
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter User Email"
          />
        </div>

        <div class="form-group ">
          <label for="exampleInputEmail1">User Password</label>
          <input
            ref={passwordRef}
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter User Password"
          />
        </div>

        <button
          type="submit"
          class="btn btn-primary"
          onClick={(e) => SendData(e, setMessage, setCheck)}
        >
          Submit
        </button>
      </form>
    </div>
  );
}
function SendData(e, setMessage, setCheck) {
  e.preventDefault();
  let data = {
    email: emailRef.current.value,
    password: passwordRef.current.value,
  };

  const formData = new FormData();
  formData.append("data", JSON.stringify(data));

  axios({
    url: "http://127.0.0.1:7000/login",
    method: "post",
    data: formData,
  }).then(function (response) {
    setCheck(true);
    setMessage(response.data.message);
    if (response.data.status === true) {
      localStorage.setItem("pizza", response.data.token);
      window.location.href = "/admin/products";
    }
  });
}
export default Login;
