import SearchHeader from "./components/SearchHeader.jsx";
import Products from "./components/Products.jsx";

import { useState } from "react";

import { Layout } from "antd";

const { Header, Footer, Sider, Content } = Layout;

const App = () => {
  const [searchParams, setSearchParams] = useState(["", ""]);
  const passSearch = (params) => {
    setSearchParams(params);
  };
  return (
    <Layout
      style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
    >
      <Header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 1,
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <SearchHeader onSearch={passSearch} />
      </Header>
      <Content style={{ flex: 1 }}>
        <Products searchParams={searchParams} />
      </Content>
    </Layout>
  );
};

export default App;
