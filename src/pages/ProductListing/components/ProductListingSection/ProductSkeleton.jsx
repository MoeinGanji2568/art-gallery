import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const ProductSkeleton = () => {
  return (
    <div className="product-card">
      <div className="product-card-image">
        <Skeleton height={200} />
      </div>
      <div className="product-card-details">
        <h3>
          <Skeleton width={150} />
        </h3>
        <p className="ratings">
          <Skeleton width={100} />
        </p>
        <div className="price-container">
          <p className="original-price">
            <Skeleton width={50} />
          </p>
          <p className="discount-price">
            <Skeleton width={50} />
          </p>
        </div>
        <p>
          <Skeleton width={100} />
        </p>
        <div className="info">
          <Skeleton width={80} />
          <Skeleton width={80} />
        </div>
      </div>
      <div className="product-card-buttons">
        <Skeleton width={100} height={40} />
        <Skeleton width={40} height={40} />
      </div>
    </div>
  );
};

export default ProductSkeleton;
