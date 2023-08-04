import Frontend from "./Frontend/frontend";
import Backend from "./Backend/backend";
import Login from "./Frontend/Login";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Logout from "./Frontend/logout";
import ProductList from "./Frontend/BuyProduct/productList";
import Order from "./Frontend/BuyProduct/Order";

function App() {
  if (localStorage.getItem("pizza")) {
    return (
      <>
        <BrowserRouter>
          <Routes>
            <Route path="/logout" element={<Logout />}></Route>
            <Route path="/" element={<Frontend />}></Route>
            <Route path="/admin" element={<Backend />}></Route>
            <Route path="/admin/product" element={<Backend />}></Route>
            <Route path="/admin/products" element={<Backend />}></Route>
            <Route
              path="/admin/products/:id/edit"
              element={
                <Backend
                  action={{ name: "product", update: true, delete: false }}
                  condi={true}
                />
              }
            ></Route>
            <Route
              path="/admin/products/:id/delete"
              element={
                <Backend
                  action={{ name: "product", update: false, delete: true }}
                  condi={true}
                />
              }
            ></Route>
            <Route path="/admin/service" element={<Backend />}></Route>
            <Route path="/admin/services" element={<Backend />}></Route>
            <Route path="/admin/user" element={<Backend />}></Route>
            <Route path="/admin/users" element={<Backend />}></Route>
            <Route
              path="/admin/services/:id/edit"
              element={
                <Backend
                  action={{ name: "service", update: true, delete: false }}
                  condi={true}
                />
              }
            ></Route>
            <Route
              path="/admin/services/:id/delete"
              element={
                <Backend
                  action={{ name: "service", update: false, delete: true }}
                  condi={true}
                />
              }
            ></Route>
            <Route
              path="/admin/users/:id/delete"
              element={
                <Backend
                  action={{ name: "user", update: false, delete: true }}
                  condi={true}
                />
              }
            ></Route>
            <Route
              path="/admin/users/:id/edit"
              element={
                <Backend
                  action={{ name: "user", update: true, delete: false }}
                  condi={true}
                />
              }
            ></Route>
            <Route
              path="/orders"
              element={<Backend action={{ name: "order" }} />}
            ></Route>
            <Route
              path="/customer/:id"
              element={
                <Backend
                  action={{ name: "order", update: true }}
                  condi={true}
                />
              }
            ></Route>
            <Route
              path="/customer/:id/delete"
              element={
                <Backend
                  action={{ name: "order", update: false }}
                  condi={true}
                />
              }
            ></Route>
            <Route path="/product" element={<ProductList />}></Route>
            <Route path="/checkout" element={<Order />}></Route>
          </Routes>
        </BrowserRouter>
      </>
    );
  } else {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Frontend />}></Route>
          <Route path="/product" element={<ProductList />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/checkout" element={<Order />}></Route>
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
