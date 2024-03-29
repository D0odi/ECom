import React from "react";
import { motion } from "framer-motion";

const ShoppingCart = ({ shoppingCartToggle, shoppingCartProducts }) => {
  const shoppingCartStyles = {
    visible: { opacity: 1, transform: "translateX(0)" },
    hidden: { opacity: 0, transform: "translateX(20%)" },
  };

  return (
    <motion.div
      initial={"hidden"}
      animate={shoppingCartToggle ? "visible" : "hidden"}
      variants={shoppingCartStyles}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      style={{
        minWidth: "200px",
        width: "20%",
        backdropFilter: "blur(10px)",
        // backgroundColor: "rgba(255, 255, 255, 0.7)",
        backgroundColor: "red",
        overflow: "hidden",
        position: "fixed",
        right: 0,
        bottom: 0,
        top: "90px",
      }}
    >
      {`${shoppingCartProducts}`}
    </motion.div>
  );
};

export default ShoppingCart;
