import React from "react";
import { motion } from "framer-motion";
import { List } from "antd";

const ShoppingCart = ({ shoppingCartToggle, shoppingCartProducts }) => {
  const shoppingCartStyles = {
    visible: { opacity: 1, transform: "translateX(0)", width: "20%" },
    hidden: { opacity: 0, transform: "translateX(20%)", width: 0 },
  };

  return (
    <motion.div
      initial={"hidden"}
      animate={shoppingCartToggle ? "visible" : "hidden"}
      variants={shoppingCartStyles}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      style={{
        backdropFilter: "blur(10px)",
        backgroundColor: "rgba(255, 255, 255, 0.7)",
        overflow: "hidden",
        position: "fixed",
        zIndex: 1,
        right: 0,
        bottom: 0,
        top: "90px",
        padding: 10,
        paddingRight: 0,
      }}
    >
      {shoppingCartProducts.length > 0 ? (
        shoppingCartProducts.map((product) => (
          <div
            key={product.id}
            style={{
              flex: 1,
              flexDirection: "row",
              display: "flex",
              height: "70px",
              backgroundColor: "red",
            }}
          >
            <div>
              <img src={product.thumbnail} style={{ height: 70 }} />
            </div>
            <div style={{ flexDirection: "column" }}>
              <h3>{product.title}</h3>
              <p>Price: ${product.price}</p>
            </div>
          </div>
        ))
      ) : (
        <p>No products in the shopping cart</p>
      )}
    </motion.div>
  );
};

export default ShoppingCart;
