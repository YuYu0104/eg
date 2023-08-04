import React, { useState } from "react";
import axios from "axios";
let nameRef = React.createRef();
let desRef = React.createRef();
let priceRef = React.createRef();
function Addproduct(props) {
  let [file, setFile] = useState();
  let [message, setMessage] = useState();
  let [check, setCheck] = useState(false);
  return (
    <div className=" bg-dark container-fluid p-4">
      <h2>
        <i class="fa-solid fa-circle-plus nav-icon"></i> Addproduct
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
          <label for="exampleInputEmail1">Product Name</label>
          <input
            ref={nameRef}
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter Product Name"
          />
        </div>
        <div class="form-group">
          <label for="exampleInputEmail1">Description</label>

          <textarea
            class="form-control"
            ref={desRef}
            placeholder="Enter Description"
          ></textarea>
        </div>
        <div class="form-group ">
          <label for="exampleInputEmail1">Price</label>
          <input
            ref={priceRef}
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter Price"
          />
        </div>

        <div class="custom-file">
          <label class="custom-file-label" for="customFile">
            Choose Photo of Product
          </label>
          <input
            type="file"
            class="custom-file-input"
            id="customFile"
            onChange={(e) => setFile({ file: e.target.files[0] })}
          />
        </div>
        <br />
        <br />
        <button
          type="submit"
          class="btn btn-primary"
          onClick={(e) => SendData(file, e, setMessage, setCheck)}
        >
          Submit
        </button>
      </form>
    </div>
  );
}
function SendData(file, e, setMessage, setCheck) {
  e.preventDefault();
  let data = {
    name: nameRef.current.value,
    des: desRef.current.value,
    price: priceRef.current.value,
  };
  console.log(data);
  console.log(file.file.name);
  const formData = new FormData();
  formData.append("data", JSON.stringify(data));
  formData.append("image", file.file);
  console.log(formData);
  var reqtoken = localStorage.getItem("pizza");
  axios({
    url: "http://127.0.0.1:7000/product",
    method: "post",
    data: formData,
    headers: {
      Authorization: `Basic ${reqtoken}`,
    },
  }).then(function (response) {
    setCheck(true);
    setMessage(response.data.message);
  });
}
export default Addproduct;
