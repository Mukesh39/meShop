import React from "react";
import Products from "../components/Products";

const Home = () => {
  return (
    <div>
      <h2 className="heading">Welcome meSHOP </h2>

      <main class="container">
        <p>meShop 👋 Let's</p>
        <section class="animation">
          <div class="first">
            <div>Shop in Greatest Shop</div>
          </div>
          <div class="second">
            <div>Purchase for all</div>
          </div>
          <div class="third">
            <div>enjoy with Familiy and Buy items at cheap</div>
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
