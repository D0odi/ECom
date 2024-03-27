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
    <Layout>
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
      <Content>
        <Products searchParams={searchParams} />
      </Content>
      <Footer>Footer</Footer>
    </Layout>
  );
};

export default App;
