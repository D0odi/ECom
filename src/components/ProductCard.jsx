import React, { useState } from "react";

const ProductCard = ({ data }) => {
  const {
    id,
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

  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: "4px",
        overflow: "hidden",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        transition: "box-shadow 0.3s ease",
        display: "flex",
        flexDirection: "column",
        marginRight: "1rem",
        marginBottom: "1rem",
      }}
      onMouseEnter={(e) =>
        (e.currentTarget.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)")
      }
      onMouseLeave={(e) =>
        (e.currentTarget.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.1)")
      }
    >
      <img
        src={thumbnail}
        alt={title}
        style={{
          width: "100%",
          height: "150px",
          objectFit: "cover",
        }}
      />
      <div style={{ flex: 1, padding: "0.5rem" }}>
        <h3
          style={{
            marginBlock: "0.2rem",
            fontSize: "18px",
            fontWeight: 600,
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            overflow: "hidden",
          }}
        >
          {title}
        </h3>
        <p
          style={{
            margin: 0,
            fontSize: "16px",
            fontWeight: 500,
            opacity: 0.8,
          }}
        >
          ${price}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
