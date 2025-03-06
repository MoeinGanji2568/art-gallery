import "./ProductImage.css";
import Tilt from "react-parallax-tilt";
import React from "react";
import { handleImageError } from "../../../../helpers/imageUtils";

export const ProductImage = ({ selectedProduct }) => {
  return (
    <Tilt
      tiltEnable={false}
      scale={1.15}
      transitionSpeed={1000}
      className="product-details-image"
    >
      {selectedProduct ? (
        <img
          src={selectedProduct?.img}
          alt={selectedProduct.name}
          onError={handleImageError}
        />
      ) : (
        <p>Loading ...</p>
      )}
    </Tilt>
  );
};
