import React, { useState } from "react";
import axios from "axios";
let nameRef = React.createRef();
let desRef = React.createRef();

function AddService(props) {
  let [file, setFile] = useState();
  let [check, setCheck] = useState(false);
  let [message, setMessage] = useState();
  return (
    <div className=" bg-dark container-fluid p-4">
      <h2>
        <i class="fa-solid fa-circle-plus nav-icon"></i> AddService
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
          <label for="exampleInputEmail1">Service Name</label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter Product Name"
            ref={nameRef}
          />
        </div>
        <div class="form-group">
          <label for="exampleInputEmail1">Description</label>

          <textarea
            class="form-control"
            placeholder="Enter Description"
            ref={desRef}
          ></textarea>
        </div>

        <div class="custom-file">
          <input
            type="file"
            class="custom-file-input"
            id="customFile"
            onChange={(e) => setFile({ file: e.target.files[0] })}
          />
          <label class="custom-file-label" for="customFile">
            Choose Photo of Product
          </label>
        </div>
        <br />
        <br />
        <button
          type="submit"
          class="btn btn-primary"
          onClick={(e) => sendData(file, e, setCheck, setMessage)}
        >
          Submit
        </button>
      </form>
    </div>
  );
}
function sendData(file, e, setCheck, setMessage) {
  e.preventDefault();
  let data = {
    name: nameRef.current.value,
    des: desRef.current.value,
  };

  let formData = new FormData();
  formData.append("data", JSON.stringify(data));
  formData.append("image", file.file);
  console.log(data);
  console.log(file.file.name);
  var reqtoken = localStorage.getItem("pizza");
  axios({
    url: "http://127.0.0.1:7000/service",
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
export default AddService;
