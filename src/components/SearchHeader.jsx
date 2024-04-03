import { useState, useEffect } from "react";
import { Button, Input, Select, Space } from "antd";
import { prettifyCategory } from "../helpers/prettifyCategory";
import { SearchOutlined } from "@ant-design/icons";

const SearchHeader = ({ setSearchParams }) => {
  const [categories, setCategories] = useState([]);

  const [category, setCategory] = useState("");
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    fetch("https://dummyjson.com/products/categories")
      .then((res) => res.json())
      .then((data) =>
        setCategories(() => {
          return data.reduce(
            (options, categoryName) => {
              options.push({
                value: categoryName,
                label: prettifyCategory(categoryName),
              });
              return options;
            },
            [{ value: "", label: "All Categories" }]
          );
        })
      )
      .catch((error) => {
        console.error("Error fetching categories:", error);
      });
  }, []);

  return (
    <Space.Compact style={{ width: "70%" }}>
      <Select
        getPopupContainer={(trigger) => trigger.parentNode}
        defaultValue="All Categories"
        options={categories}
        size="large"
        style={{ minWidth: "9rem" }}
        onChange={(value) => setCategory(value)}
      />
      <Input
        defaultValue=""
        variant="outlined"
        size="large"
        onChange={(event) => {
          setSearchInput(event.target.value);
        }}
      />
      <Button
        type="primary"
        size="large"
        icon={<SearchOutlined />}
        style={{ width: "4rem" }}
        onClick={() => setSearchParams([category, searchInput])}
      />
    </Space.Compact>
  );
};

export default SearchHeader;
