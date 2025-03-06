import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const ProductSkeleton = () => {
  return (
    <div className="product-card">
      <div className="product-card-image">
        <Skeleton height={200} /> {/* جایگزین تصویر */}
      </div>
      <div className="product-card-details">
        <h3>
          <Skeleton width={150} /> {/* جایگزین نام محصول */}
        </h3>
        <p className="ratings">
          <Skeleton width={100} /> {/* جایگزین ریتینگ */}
        </p>
        <div className="price-container">
          <p className="original-price">
            <Skeleton width={50} /> {/* جایگزین قیمت اصلی */}
          </p>
          <p className="discount-price">
            <Skeleton width={50} /> {/* جایگزین قیمت تخفیف‌خورده */}
          </p>
        </div>
        <p>
          <Skeleton width={100} /> {/* جایگزین دسته‌بندی */}
        </p>
        <div className="info">
          <Skeleton width={80} /> {/* جایگزین وضعیت موجودی */}
          <Skeleton width={80} /> {/* جایگزین وضعیت ترند بودن */}
        </div>
      </div>
      <div className="product-card-buttons">
        <Skeleton width={100} height={40} /> {/* جایگزین دکمه‌ها */}
        <Skeleton width={40} height={40} />
      </div>
    </div>
  );
};

export default ProductSkeleton;
