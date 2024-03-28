import SearchHeader from "./components/SearchHeader.jsx";
import ShoppingCart from "./components/ShoppingCart.jsx";
import Products from "./components/Products.jsx";
import ecomLogo from "../assets/ECom-logo.png";

import { useState } from "react";

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
            <Badge count={1} offset={[-13, 2]}>
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
      <Content
        style={{
          paddingLeft: "2rem",
        }}
      >
        <div
          style={{
            display: "flex",
            flex: 1,
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <Products searchParams={searchParams} />
          <ShoppingCart shoppingCartToggle={shoppingCartToggle} />
        </div>
      </Content>
    </Layout>
  );
};

export default App;
