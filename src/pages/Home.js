import React from "react";
import Products from "../components/Products";

const Home = () => {
  return (
    <div>
      <h2 className="heading"> Welcome meSHOP </h2>
      <main class="container">
        <p>meShop 👋 Let's</p>
        <section className="animation">
          <div className="first">
            <div>Shop in Greatest Shop</div>
          </div>
          <div className="second">
            <div>Purchase for all</div>
          </div>
          <div className="third">
            <div>Enjoy with Familiy and Buy items at cheap</div>
          </div>
        </section>
      </main>
      <section>
        <h2>Products</h2>
        <Products />
      </section>
    </div>
  );
};

export default Home;
