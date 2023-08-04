import React from "react";
import axios from "axios";
class ServiceList extends React.Component {
  constructor(props) {
    super(props);
    this.getData();
  }
  state = { data: [] };
  getData = () => {
    axios.get("http://127.0.0.1:7000/services").then((response) => {
      this.setState({ data: response.data });
    });
  };

  render() {
    return (
      <div className=" bg-dark container-fluid productlist">
        <table class="table table-dark">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {this.state.data.map((e) => {
              return (
                <tr>
                  <th scope="row">1</th>
                  <td>{e.name}</td>
                  <td>
                    <a href={"/admin/services/" + e._id + "/edit"}>
                      <i class="fas fa-edit"></i>
                    </a>
                    <a href={"/admin/services/" + e._id + "/delete"}>
                      <i class="fa-solid fa-trash "></i>
                    </a>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
export default ServiceList;
