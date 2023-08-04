import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function ProductDetail(props) {
  const [data, setData] = useState([]);
  const [cart, setCart] = useState([]);
  const [productQuantities, setProductQuantities] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://127.0.0.1:7000/products")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        // Handle error
        console.log(error.message); // "Network Error"
        console.log(error.name); // "AxiosError"
      });
  }, []);

  const addToCart = (id, name, price, event) => {
    event.preventDefault();
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === id);
      if (existingProduct) {
        return prevCart.map((item) =>
          item.id === id ? { ...item, qty: item.qty + 1 } : item
        );
      } else {
        return [...prevCart, { id: id, name: name, price: price, qty: 1 }];
      }
    });
    setProductQuantities((prevQuantities) => ({
      ...prevQuantities,
      [id]: (prevQuantities[id] || 0) + 1,
    }));
  };

  const cartCount = cart.reduce((total, item) => total + item.qty, 0);

  const redirect = () => {
    navigate("/checkout", { state: cart });
  };

  return (
    <div id="productContainer">
      <h2 className="pt-5">Our Products</h2>
      <div className="Procontainer">
        {data.map((e) => (
          <div className="box" key={e._id}>
            <h4>{e.name}</h4>
            <div className="image-wrapper">
              <img
                src={"http://127.0.0.1:7000/images/" + e.image}
                alt="Image"
              />
            </div>
            <p>{e.des}</p>
            <div className="productPrice">
              <p>
                MMK <span>{e.price}</span>{" "}
              </p>
              <p>
                <i className="fa-sharp fa-solid fa-cart-shopping">
                  <span>{productQuantities[e._id] || 0}</span>
                </i>
              </p>
            </div>
            <a onClick={(event) => addToCart(e._id, e.name, e.price, event)}>
              <button type="button" className="btn btn-primary">
                Add To Cart
              </button>
            </a>
          </div>
        ))}
      </div>
      <button
        onClick={() => {
          redirect(cart);
        }}
        className="btn btn-danger ml-5 mb-5 mt-3"
      >
        <i className="badge bg-light">{cartCount}</i> Check Out
      </button>
    </div>
  );
}

export default ProductDetail;
