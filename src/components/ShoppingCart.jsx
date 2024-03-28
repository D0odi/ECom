import React from "react";
import { motion } from "framer-motion";

const ShoppingCart = ({ shoppingCartToggle }) => {
  return (
    <motion.div
      animate={{
        width: shoppingCartToggle ? "20%" : 0,
        opacity: shoppingCartToggle ? 1 : 0,
      }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      style={{
        width: 0,
        backgroundColor: "red",
        overflow: "hidden",
        position: "fixed",
        right: 0,
        bottom: 0,
        top: "90px",
      }}
    >
      list
    </motion.div>
  );
};

export default ShoppingCart;
