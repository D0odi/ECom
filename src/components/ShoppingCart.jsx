import React from "react";
import { motion } from "framer-motion";
import { Button, Flex, InputNumber, List } from "antd";
import Input from "antd/es/input/Input";

const ShoppingCart = ({ shoppingCartToggle, shoppingCartProducts }) => {
  const shoppingCartStyles = {
    visible: { opacity: 1, transform: "translateX(0)", width: "23%" },
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
        backgroundColor: "rgba(255, 255, 255, 1)",
        overflow: "auto",
        position: "fixed",
        zIndex: 1,
        right: 0,
        bottom: 0,
        top: "90px",
        padding: 7,
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
              justifyContent: "center",
              marginBlock: 10,
            }}
          >
            <div
              style={{
                display: "flex",
                flex: 3,
                justifyContent: "center",
                alignItems: "flex-end",
                overflow: "hidden",
              }}
            >
              <img
                src={product.thumbnail}
                style={{
                  height: 60,
                  borderLeft: "3px solid #1677ff",
                  borderRadius: 3,
                }}
              />
            </div>
            <div
              style={{
                marginLeft: 10,
                display: "flex",
                flexDirection: "column",
                flex: 5,
                paddingRight: 20,
                justifyContent: "flex-end",
                overflow: "hidden",
              }}
            >
              <h3
                style={{
                  margin: 0,
                  textOverflow: "ellipsis",
                  overflow: "hidden",
                  whiteSpace: "nowrap",
                }}
              >
                {product.title}
              </h3>
              <h4
                style={{
                  margin: 0,
                  textOverflow: "ellipsis",
                  overflow: "hidden",
                  whiteSpace: "nowrap",
                }}
              >
                {product.title}
              </h4>
              <p
                style={{
                  margin: 0,
                  textOverflow: "ellipsis",
                  overflow: "hidden",
                  whiteSpace: "nowrap",
                }}
              >
                ${product.price}
              </p>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                justifyContent: "flex-end",
              }}
            >
              <InputNumber size="medium" />
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
