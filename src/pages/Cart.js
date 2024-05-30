import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { remove } from "../store/cartSlice";

const Cart = () => {
  const products = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  const handleRemove = (productId) => {
    dispatch(remove(productId));
  };

  return (
    <div>
      <h3 className="cardHeading ">Your Cart</h3>
      <div className="cartWrapper">
        {products.map((product) => (
          <div className="cartCard" key={product.id}>
            <img className="imgCart" src={product.image} alt="" />
            <h5 className="cartTitle">{product.title}</h5>
            <h5 className="cartPrice">{product.price}</h5>
            <button className="btn" onClick={() => handleRemove(product.id)}>
              Remove{" "}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
