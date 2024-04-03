import SearchHeader from "./components/SearchHeader.jsx";
import ShoppingCartSider from "./components/ShoppingCartSider.jsx";
import Products from "./components/Products.jsx";
import ecomLogo from "../assets/ECom-logo.png";

import { useState } from "react";

import { Badge, Layout } from "antd";
import {
  UserOutlined,
  TwitterOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
const { Header } = Layout;

const style = {
  icon: {
    fontSize: 30,
    marginInline: 16,
    color: "#1677ff",
  },
};

const App = () => {
  const [searchParams, setSearchParams] = useState(["", ""]);
  const [siderToggle, setSiderToggle] = useState(false);
  const [shoppingCartProducts, setShoppingCartProducts] = useState([]);

  const cartUpdate = (id, quantity = 1) => {
    fetch("https://dummyjson.com/carts/1", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        merge: false,
        products: [
          {
            id,
            quantity,
          },
        ],
      }),
    })
      .then((res) => {
        if (!res.ok)
          throw new Error(`Error adding item to shopping cart: ${res.status}`);
        return res.json();
      })
      .then((data) => {
        setShoppingCartProducts((prev) => {
          const updatedProduct = data.products[0];

          if (updatedProduct.quantity === 0) {
            return prev.filter((product) => product.id !== updatedProduct.id);
          }

          const alreadyExists = prev.some(
            (product) => product.id === updatedProduct.id
          );

          if (!alreadyExists) {
            return [...prev, updatedProduct];
          } else {
            return prev.map((product) =>
              product.id === updatedProduct.id ? updatedProduct : product
            );
          }
        });
      })
      .catch((error) => {
        console.log("Error updating cart:", error);
      });
  };

  return (
    <Layout
      style={{ position: "absolute", padding: 0, top: 0, right: 0, left: 0 }}
    >
      <Header
        style={{
          paddingLeft: "2rem",
          backgroundColor: "rgba(255, 255, 255, 0.5)",
          position: "sticky",
          top: 0,
          zIndex: 1,
          height: "90px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backdropFilter: "blur(10px)",
        }}
      >
        <SearchHeader setSearchParams={setSearchParams} />
        <div
          style={{
            height: "90px",
            display: "flex",
            overflow: "hidden",
            flex: 1,
          }}
        >
          <div
            style={{
              display: "flex",
              flex: 1,
              alignItems: "center",
              justifyContent: "end",
            }}
          >
            <Badge count={shoppingCartProducts.length} offset={[-13, 2]}>
              <ShoppingCartOutlined
                style={style.icon}
                onClick={() => setSiderToggle((prev) => !prev)}
              />
            </Badge>
            <UserOutlined style={style.icon} />
            <TwitterOutlined style={style.icon} />
          </div>
          <div
            style={{
              display: "flex",
              flex: 1,
              justifyContent: "end",
            }}
          >
            <img src={ecomLogo} />
          </div>
        </div>
      </Header>
      <ShoppingCartSider
        siderToggle={siderToggle}
        shoppingCartProducts={shoppingCartProducts}
        cartUpdate={cartUpdate}
      />
      <Products
        searchParams={searchParams}
        cartUpdate={cartUpdate}
        shoppingCartProducts={shoppingCartProducts}
      />
    </Layout>
  );
};

export default App;
