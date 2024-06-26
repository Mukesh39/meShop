import React from "react";

import { Link } from "react-router-dom";

import { useSelector } from "react-redux";
import me from "../images/me.png";

//to get the Data from Store

const Navbar = () => {
  const items = useSelector((state) => state.cart);

  ///this is How we Subscbribe to the store

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <span className="logo">
        <img className="imgLogo" src={me} alt="" />
      </span>

      <div>
        <Link className="navLink" to="/">
          Home
        </Link>

        <Link className="navLink" to="/cart">
          Cart
        </Link>

        <span className="cartCount"> Cart Items {items.length} </span>
      </div>
    </div>
  );
};

export default Navbar;
