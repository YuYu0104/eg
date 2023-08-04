import axios from "axios";
import React from "react";

class ServiceEdit extends React.Component {
  nameRef = "";
  desRef = "";
  id = "";

  constructor(props) {
    super(props);
    this.nameRef = React.createRef();
    this.desRef = React.createRef();

    this.id = props.id;
    this.state = {
      data: {
        name: "",
        des: "",
      },
      file: "",
      check: true,
      message: "",
    };

    this.getDataById(this.id);
  }
  getDataById = (id) => {
    var reqtoken = localStorage.getItem("pizza");
    axios({
      method: "get",
      url: "http://127.0.0.1:7000/services/" + id,
      headers: {
        Authorization: `Basic ${reqtoken}`,
      },
    }).then((response) => {
      this.setState({
        data: {
          name: response.data[0].name,
          des: response.data[0].des,
        },
      });
      console.log("hi", this.state);
    });
  };
  setFile = (e) => {
    this.setState({
      file: e,
    });
  };

  sendData = (file, e, check, message) => {
    e.preventDefault();

    let pathData = {
      name: this.nameRef.current.value,
      des: this.desRef.current.value,
    };
    let formData = new FormData();
    formData.append("data", JSON.stringify(pathData));
    formData.append("image", file.file);
    var reqtoken = localStorage.getItem("pizza");
    axios({
      url: "http://127.0.0.1:7000/services/" + this.id,
      method: "post",
      data: formData,
      headers: {
        Authorization: `Basic ${reqtoken}`,
      },
    }).then((response) => {
      console.log(response);
      window.location.href = "/adim/service";
    });
  };
  render() {
    return (
      <>
        <div className=" bg-dark container-fluid p-4">
          <h2>
            <i class="fa-solid fa-circle-plus nav-icon"></i> Edit Product
          </h2>
          {this.check && (
            <div
              class="alert alert-warning alert-dismissible fade show mt-3"
              role="alert"
            >
              {this.message}
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
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                ref={this.nameRef}
                defaultValue={this.state.data.name}
              />
            </div>
            <div class="form-group">
              <label for="exampleInputEmail1">Descriction</label>

              <textarea
                class="form-control"
                ref={this.desRef}
                defaultValue={this.state.data.des}
              />
            </div>

            <div class="custom-file">
              <input
                type="file"
                class="custom-file-input"
                id="customFile"
                onChange={(e) => this.setFile({ file: e.target.files[0] })}
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
              onClick={(e) => this.sendData(this.state.file, e)}
            >
              Submit
            </button>
          </form>
        </div>
      </>
    );
  }
}
export default ServiceEdit;
