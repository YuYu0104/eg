import React from "react";
import axios from "axios";
class OrderList extends React.Component {
  constructor(props) {
    super(props);
    this.getData();
  }
  state = { data: [] };
  getData = () => {
    axios({
      url: "http://127.0.0.1:7000/orders",
      method: "get",
    }).then((response) => {
      this.setState({ data: response.data });
    });
  };
  render() {
    const { data } = this.state;
    return (
      <>
        <div className=" bg-dark container-fluid productlist">
          <table class="table table-dark">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Address</th>
                <th scope="col">Phone</th>

                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => (
                <tr key={item._id}>
                  <td>{item.username}</td>
                  <td>{item.address}</td>
                  <td>{item.phone}</td>

                  <td>
                    <a href={"/customer/" + item._id}>
                      <i class="fa-regular fa-eye"></i>
                    </a>
                    <a href={"/customer/" + item._id + "/delete"}>
                      <i class="fa-solid fa-trash "></i>
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </>
    );
  }
}
export default OrderList;
