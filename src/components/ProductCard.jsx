import React from "react";
import "../styles/ProductCard.css";

const ProductCard = ({ data }) => {
  const {
    title,
    description,
    price,
    discountPercentage,
    rating,
    stock,
    brand,
    category,
    thumbnail,
  } = data;
  const discountedPrice = price - (price * discountPercentage) / 100;

  return (
    <div className="product-card">
      <img src={thumbnail} alt={title} className="product-image" />
      <div className="product-details">
        <h3 className="product-title">{title}</h3>
        <p className="product-description">{description}</p>
      </div>
    </div>
  );
};

export default ProductCard;
