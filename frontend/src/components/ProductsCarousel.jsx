"use client";

import React from "react";

import ProductCard1 from "./ProductCard1";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import SlideButton from "./SlideButton";

const ProductsCarousel = ({ products, locale }) => {


  return (
    <div className="hero-image relative max-w-3xl  mx-auto">
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showThumbs={false}
        showIndicators={false}
        showStatus={false}
        // centerMode={true}
        // centerSlidePercentage={60}
        renderArrowPrev={(clickHandler, hasPrev) => (
          <SlideButton
            clickHandler={clickHandler}
            className={{ position: "left-0", rotation: "rotate-0" }}
          />
        )}
        renderArrowNext={(clickHandler, hasNext) => (
          <SlideButton
            clickHandler={clickHandler}
            className={{ position: "right-0", rotation: "rotate-180" }}
          />
        )}
      >
        { products?.data?.map((product) => {
          return (
            <ProductCard1 key={product?.documentId} data={product} locale={locale} />
          );
        })}
      </Carousel>
    </div>
  );
};

export default ProductsCarousel;
