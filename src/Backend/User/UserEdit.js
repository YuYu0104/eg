import React, { useState } from "react";
import axios from "axios";
let nameRef = React.createRef();
let emailRef = React.createRef();
let passwordRef = React.createRef();
let id = "";
function EditUser(props) {
  id = props.id;
  let [check, setCheck] = useState(false);
  let [message, setMessage] = useState("");
  let [state, setState] = useState({
    data: { name: "", email: "", password: "" },
  });
  var reqtoken=localStorage.getItem("pizza")
  axios({
    url: "http://127.0.0.1:7000/users/" + id,
    method: "get",
    headers: {
      Authorization: `Basic ${reqtoken}`,
    },
  }).then((response) => {
    setState({
      data: {
        name: response.data[0].name,
        email: response.data[0].email,
        password: response.data[0].password,
      },
    });
  });
  return (
    <div className=" bg-dark container-fluid p-4">
      <h2>
        <i class="fa-solid fa-circle-plus nav-icon"></i> Edit User
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
            ref={nameRef}
            defaultValue={state.data.name}
          />
        </div>

        <div class="form-group ">
          <label for="exampleInputEmail1">User Email</label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            ref={emailRef}
            defaultValue={state.data.email}
          />
        </div>

        <div class="form-group ">
          <label for="exampleInputEmail1">User Password</label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            ref={passwordRef}
            defaultValue={state.data.password}
          />
        </div>

        <button
          type="submit"
          class="btn btn-primary"
          onClick={(e) => sendData(e, id, setCheck, setMessage)}
        >
          Submit
        </button>
      </form>
    </div>
  );
}
function sendData(e, id, setCheck, setMessage) {
  e.preventDefault();
  let data = {
    name: nameRef.current.value,
    email: emailRef.current.value,
    password: passwordRef.current.value,
  };
  console.log(data);
  let formData = new FormData();
  formData.append("data", JSON.stringify(data));
  var reqtoken=localStorage.getItem("pizza")
  axios({
    url: "http://127.0.0.1:7000/users/" + id,
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
export default EditUser;
