import { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import { filterByCategory } from "../helpers/filterByCategory";
import { Divider, Modal, Row } from "antd";

const Products = ({ searchParams }) => {
  const [products, setProducts] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [productDetails, setProductDetails] = useState(null);

  useEffect(() => {
    const category = searchParams[0];
    const searchInput = searchParams[1];

    let url = "https://dummyjson.com/products";
    if (searchInput) {
      url = `https://dummyjson.com/products/search?q=${searchInput}`;
    } else if (category) {
      url = `https://dummyjson.com/products/category/${category}`;
    }

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        if (searchInput && category) {
          setProducts(filterByCategory(data.products, category));
        } else {
          setProducts(data.products);
        }
      });
  }, [searchParams]);

  const handleProductClick = (product) => {
    setProductDetails(product);
  };
  useEffect(() => {
    if (productDetails) {
      setIsModalOpen(true);
    }
  }, [productDetails]);

  const modalStyles = {
    header: {},
    mask: {
      backdropFilter: "blur(5px)",
    },
    footer: {
      backgroundColor: "#f0f0f0",
      padding: "0.5rem",
      borderTopWidth: "1px",
      borderTopStyle: "solid",
      borderTopColor: "#e0e0e0",
      display: "flex",
      justifyContent: "flex-end",
    },
    content: {
      flex: 1,
    },
  };

  return (
    <div
      style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
    >
      {products.length > 0 &&
        products.map((product) => (
          <div key={product.id} onClick={() => handleProductClick(product)}>
            <ProductCard data={product} />
          </div>
        ))}
      <Modal
        width={1000}
        styles={modalStyles}
        title={productDetails?.title}
        open={isModalOpen}
        onOk={() => {
          setIsModalOpen(false);
          setProductDetails(null);
        }}
        destroyOnClose
      >
        {productDetails && (
          <div style={{ display: "flex", flexDirection: "row" }}>
            <img
              src={productDetails.thumbnail}
              alt={productDetails.title}
              style={{
                maxWidth: "50%",
                marginRight: "1rem",
                objectFit: "cover",
              }}
            />

            <div
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <h4 style={{ margin: 0 }}>Description: </h4>
              <p style={{ margin: 0 }}>{productDetails.description}</p>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default Products;
