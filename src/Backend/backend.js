import React from "react";
import Navigator from "../Navigation";
import Sidebar from "../Sidebar";
import Addproduct from "./Product/AddProduct";
import Productlist from "./Product/ProductList";
import { useLocation, useParams } from "react-router-dom";
import Productdelete from "./Product/ProductDelete";
import Productedit from "./Product/ProductEdit";
import AddService from "./Service/AddService";
import ServiceList from "./Service/ServiceList";
import ServiceDelete from "./Service/DeleteService";
import ServiceEdit from "./Service/EditService";
import AddUser from "./User/AddUser";
import UserList from "./User/UserList";
import DeleteUser from "./User/DeleteUser";
import EditUser from "./User/UserEdit";
import OrderList from "../Frontend/BuyProduct/OrderList";
import OrderDetail from "../Frontend/BuyProduct/OrderDetail";
import NewList from "../Frontend/BuyProduct/newList";
import DeleteOrder from "../Frontend/BuyProduct/deleteOrder";
function Backend(props) {
  let pathLocation = useLocation();
  let param = useParams();
  return (
    <div>
      <div class="wrapper">
        <div class="preloader flex-column justify-content-center align-items-center"></div>
        <Navigator></Navigator>
        <Sidebar></Sidebar>
        <div className="content-wrapper">
          {(() => {
            if (pathLocation.pathname === "/admin/product") {
              return <Addproduct></Addproduct>;
            } else if (pathLocation.pathname === "/admin/products") {
              return <Productlist></Productlist>;
            } else if (pathLocation.pathname === "/orders") {
              return <OrderList></OrderList>;
            } else if (pathLocation.pathname === "/admin/service") {
              return <AddService></AddService>;
            } else if (pathLocation.pathname === "/admin/services") {
              return <ServiceList></ServiceList>;
            } else if (pathLocation.pathname === "/admin/user") {
              return <AddUser></AddUser>;
            } else if (pathLocation.pathname === "/admin/users") {
              return <UserList></UserList>;
            } else if (props.condi === true) {
              if (props.action.name === "product") {
                if (props.action.delete === true) {
                  return <Productdelete id={param.id}></Productdelete>;
                } else if (props.action.update === true) {
                  return <Productedit id={param.id}></Productedit>;
                }
              } else if (props.action.name === "service") {
                if (props.action.delete === true) {
                  return <ServiceDelete id={param.id}></ServiceDelete>;
                } else if (props.action.update === true) {
                  return <ServiceEdit id={param.id}></ServiceEdit>;
                }
              } else if (props.action.name === "user") {
                if (props.action.delete === true) {
                  return <DeleteUser id={param.id}></DeleteUser>;
                } else if (props.action.update === true) {
                  return <EditUser id={param.id}></EditUser>;
                }
              } else if (props.action.name === "order") {
                if (props.action.update === true) {
                  return <OrderDetail id={param.id}></OrderDetail>;
                } else if (props.action.update === false) {
                  return <DeleteOrder id={param.id}></DeleteOrder>;
                }
              }
            }
          })()}
        </div>
        <footer class="main-footer">
          <strong>
            Copyright © 2023-2023 <a href="https://adminlte.io">Yu Yu</a>.
          </strong>
          All rights reserved.
          <div class="float-right d-none d-sm-inline-block">
            <b>Thank You</b>
          </div>
        </footer>

        <aside class="control-sidebar control-sidebar-dark" />

        <div id="sidebar-overlay"></div>
      </div>
    </div>
  );
}
export default Backend;
