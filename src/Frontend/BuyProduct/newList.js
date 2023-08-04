import React from "react";
import axios from "axios";
class NewList extends React.Component {
  id = "";
  constructor(props) {
    super(props);
    this.id = props.id;
    this.getData(this.id);
  }
  state = { data: [] };
  getData = (id) => {
    axios({
      url: "http://127.0.0.1:7000/orders/customer/" + id,
      method: "get",
    }).then((response) => {
      this.setState({ data: response.data });
      console.log(this.setState({ data: response.data }));
    });
  };
  render() {
    return (
      <>
        <div className=" bg-dark container-fluid productlist">
          <table class="table table-dark">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Address</th>
                <th scope="col">Phone</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {this.state.data.map((e) => {
                return (
                  <tr>
                    <th scope="row">1</th>
                    <td>{e.cart[0][0].name}</td>
                    <td>{e.cart[0][0].qty}</td>
                    <td>{e.cart[0][0].price}</td>
                    <td>
                      <a href={"/orders/customer/" + e._id}>
                        <i class="fa-regular fa-eye"></i>
                      </a>
                      <a href={"/orders/delete/" + e._id}>
                        <i class="fa-solid fa-trash "></i>
                      </a>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </>
    );
  }
}
export default NewList;
