import React from "react";
import { Carousel } from "react-bootstrap";

const ImageSlide = ({ text, imageUrl }) => {
  return (
    <Carousel.Item>
      <img
        className="imageSlide"
        src={`https://img.freepik.com/free-vector/realistic-horizontal-sale-banner-template-with-photo_23-2149017940.jpg`}
        alt="Slide"
      />
      <Carousel.Caption>
        <h3>{text}</h3>
      </Carousel.Caption>
    </Carousel.Item>
  );
};

export default ImageSlide;
