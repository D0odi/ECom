import SearchHeader from "./components/SearchHeader.jsx";
import Products from "./components/Products.jsx";
import ecomLogo from "../assets/ECom-logo.png";

import { useState } from "react";
import React from "react";

import { Layout, Menu } from "antd";
import {
  UserOutlined,
  HistoryOutlined,
  NotificationOutlined,
} from "@ant-design/icons";
const { Header, Footer, Sider, Content } = Layout;

const App = () => {
  const [searchParams, setSearchParams] = useState(["", ""]);
  const passSearch = (params) => {
    setSearchParams(params);
  };

  const items = [
    {
      key: 1,
      icon: React.createElement(UserOutlined),
      label: `Profile`,
    },
    {
      key: 3,
      icon: React.createElement(HistoryOutlined),
      label: `Purchase history`,
    },
    {
      key: 2,
      icon: React.createElement(NotificationOutlined),
      label: `Notifications`,
    },
  ];
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
            height: "90px",
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
            overflow: "hidden",
          }}
        >
          <img src={ecomLogo} />
        </div>
        <Menu theme="dark" mode="inline" items={items} />
        {/* <div
          style={{
            height: "100%",
            backgroundColor: "red",
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "end",
          }}
        >
          <div>fdfd</div>
        </div> */}
      </Sider>
      <Layout style={{ marginLeft: "17%" }}>
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
            backdropFilter: "blur(7px)",
          }}
        >
          <SearchHeader onSearch={passSearch} />
        </Header>
        <Content
          style={{
            paddingLeft: "2rem",
          }}
        >
          <Products searchParams={searchParams} />
        </Content>
      </Layout>
    </Layout>
  );
};

export default App;
