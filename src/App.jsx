import SearchHeader from "./components/SearchHeader.jsx";
import Products from "./components/Products.jsx";
import ecomLogo from "../assets/ECom-logo.png";

import { useState } from "react";
import React from "react";

import { Layout, Menu } from "antd";
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
const { Header, Footer, Sider, Content } = Layout;

const App = () => {
  const [searchParams, setSearchParams] = useState(["", ""]);
  const passSearch = (params) => {
    setSearchParams(params);
  };

  const items = [
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
    UserOutlined,
  ].map((icon, index) => ({
    key: String(index + 1),
    icon: React.createElement(icon),
    label: `nav ${index + 1}`,
  }));
  return (
    <Layout hasSider>
      <Sider
        width="17%"
        style={{
          position: "fixed",
          left: 0,
          top: 0,
          bottom: 0,
        }}
      >
        <div
          style={{
            height: "100px",
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
            overflow: "hidden",
          }}
        >
          <img src={ecomLogo} />
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["4"]}
          items={items}
        />
      </Sider>
      <Layout style={{ marginLeft: "17%" }}>
        <Header
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.5)",
            position: "sticky",
            top: 0,
            zIndex: 1,
            height: "70px",
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backdropFilter: "blur(5px)",
          }}
        >
          <SearchHeader onSearch={passSearch} />
        </Header>
        <Content style={{ flex: 1 }}>
          <Products searchParams={searchParams} />
        </Content>
      </Layout>
    </Layout>
  );
};

export default App;
