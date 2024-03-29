import SearchHeader from "./components/SearchHeader.jsx";
import ShoppingCart from "./components/ShoppingCart.jsx";
import Products from "./components/Products.jsx";
import ecomLogo from "../assets/ECom-logo.png";

import { useState, useEffect } from "react";

import { Badge, Layout } from "antd";
import {
  UserOutlined,
  TwitterOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
const { Header, Content } = Layout;

const style = {
  icon: {
    fontSize: 30,
    marginInline: 16,
    color: "#1677ff",
  },
};

const App = () => {
  const [searchParams, setSearchParams] = useState(["", ""]);
  const [shoppingCartToggle, setShoppingCarttoggle] = useState(false);
  const [shoppingCartCount, setShoppingCartCount] = useState(0);
  const [shoppingCartProducts, setShoppingCartProducts] = useState([]);

  // useEffect(() => {
  //   console.log("shoppingCartProducts:", shoppingCartProducts);
  // }, [shoppingCartProducts]);

  const addToShoppingCart = (id) => {
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
            quantity: 1,
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
        setShoppingCartProducts((prev) => [...prev, data.products[0]]);
        setShoppingCartCount((prev) => ++prev);
      })
      .catch((error) => console.log(error));
  };

  const passSearch = (params) => {
    setSearchParams(params);
  };

  return (
    <Layout>
      <Header
        style={{
          paddingLeft: "2rem",
          backgroundColor: "rgba(255, 255, 255, 0.5)",
          position: "sticky",
          top: 0,
          zIndex: 1,
          height: "90px",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backdropFilter: "blur(10px)",
        }}
      >
        <SearchHeader onSearch={passSearch} />
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
            <Badge count={shoppingCartCount} offset={[-13, 2]}>
              <ShoppingCartOutlined
                style={style.icon}
                onClick={() => setShoppingCarttoggle((prev) => !prev)}
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
      <Content>
        <ShoppingCart
          shoppingCartToggle={shoppingCartToggle}
          shoppingCartProducts={shoppingCartProducts}
        />
        <Products
          searchParams={searchParams}
          addToShoppingCart={addToShoppingCart}
        />
      </Content>
    </Layout>
  );
};

export default App;
