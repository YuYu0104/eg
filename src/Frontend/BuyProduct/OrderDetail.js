import axios from "axios";
import React from "react";

class OrderDetail extends React.Component {
  id = "";

  constructor(props) {
    super(props);

    this.id = props.id;
    this.state = {
      data: {
        username: "",
        phone: "",
        cart: [],
      },
    };

    this.getDataById(this.id);
  }
  getDataById = (id) => {
    var reqtoken = localStorage.getItem("pizza");
    axios({
      method: "get",
      url: "http://127.0.0.1:7000/customer/" + id,
      headers: {
        Authorization: `Basic ${reqtoken}`,
      },
    }).then((response) => {
      this.setState({
        data: {
          username: response.data[0].username,
          phone: response.data[0].phone,
          cart: response.data[0].cart,
        },
      });
    });
  };

  render() {
    const { data } = this.state;
    return (
      <>
        <div className=" bg-dark container-fluid productlist">
          <table className="table table-dark">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Qty</th>
                <th scope="col">Price</th>
                <th scope="col">Sub Amount</th>
              </tr>
            </thead>

            <tbody>
              {data.cart.map((item, index) => (
                <tr key={index}>
                  <td>{item.name}</td>
                  <td>{item.qty}</td>
                  <td>{item.price}</td>
                  <td>{item.qty * item.price}</td>
                </tr>
              ))}
              <tr>
                <th colSpan={3}>Total Amount</th>
                <td>
                  {data.cart.reduce(
                    (pre, next) => pre + next.price * next.qty,
                    0
                  )}{" "}
                  MMK
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </>
    );
  }
}
export default OrderDetail;
