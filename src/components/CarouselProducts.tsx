("use client");

import React from "react";
import { Carousel } from "flowbite-react";

export function CarouselProducts() {
  return (
    <div className="a">
      <div className="h-56px sm:h-64px xl:h-80px 2xl:h-96px color:white">
        <Carousel>
          <img
            src="https://www.gktoday.in/wp-content/uploads/2010/06/products-versus-goods.png"
            alt="..."
          />
          <img
            src="https://uxwing.com/wp-content/themes/uxwing/download/logistics-shipping-delivery/search-product-icon.png"
            alt="..."
          />
          <img
            src="https://flowbite.com/docs/images/carousel/carousel-3.svg"
            alt="..."
          />
          <img
            src="https://flowbite.com/docs/images/carousel/carousel-4.svg"
            alt="..."
          />
          <img
            src="https://flowbite.com/docs/images/carousel/carousel-5.svg"
            alt="..."
          />
        </Carousel>
      </div>
    </div>
  );
}
