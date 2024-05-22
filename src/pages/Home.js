import React from "react";
import Products from "../components/Products";

const Home = () => {
  return (
    <div>
      <h2 className="heading">Welcome to the redux Toolkt store </h2>

      <section>
        <h2>Products</h2>
        <Products />
      </section>
    </div>
  );
};

export default Home;
