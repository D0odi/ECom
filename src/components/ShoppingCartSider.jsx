import React from "react";
import { motion } from "framer-motion";
import { Button } from "antd";
import ShoppingCartCard from "./cards/ShoppingCartCard";

const ShoppingCartSider = ({
  siderToggle,
  shoppingCartProducts,
  cartUpdate,
}) => {
  const siderOpenAnimation = {
    visible: { opacity: 1, transform: "translateX(0)", width: "24%" },
    hidden: { opacity: 0, transform: "translateX(20%)", width: 0 },
  };

  let total = shoppingCartProducts.reduce((sum, item) => {
    return (sum += item.total);
  }, 0);

  return (
    <motion.div
      initial={"hidden"}
      animate={siderToggle ? "visible" : "hidden"}
      variants={siderOpenAnimation}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      style={{
        minWidth: 250,
        backdropFilter: "blur(10px)",
        backgroundColor: "rgba(255, 255, 255, 1)",
        position: "fixed",
        zIndex: 1,
        right: 0,
        bottom: 0,
        top: "90px",
        display: "flex",
        flexDirection: "column",
        overflowX: "hidden",
        overflowY: "auto",
      }}
    >
      <div style={{ flex: 1, paddingInline: 20 }}>
        {shoppingCartProducts &&
          shoppingCartProducts.length >= 1 &&
          shoppingCartProducts.map((product) => (
            <ShoppingCartCard cartUpdate={cartUpdate} product={product} />
          ))}
      </div>
      <div
        style={{
          position: "sticky",
          bottom: 0,
        }}
      >
        <Button
          type="primary"
          block
          size="large"
          disabled={total <= 0}
          style={{
            color: total <= 0 ? "#1677ff" : "",
            borderRadius: 0,
            height: 50,
            fontSize: 16,
          }}
        >
          {total <= 0 ? `Add items to the cart` : `Checkout ${total}$`}
        </Button>
      </div>
    </motion.div>
  );
};

export default ShoppingCartSider;
