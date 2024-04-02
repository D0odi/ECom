import { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import { filterByCategory } from "../helpers/filterByCategory";
import { Modal, Button, InputNumber } from "antd";

const Products = ({ searchParams, cartUpdate, shoppingCartProducts }) => {
  const [products, setProducts] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [productDetails, setProductDetails] = useState(null);
  const [quantity, setQuantity] = useState(1);

  let isProductInCart =
    productDetails &&
    shoppingCartProducts.some((item) => item.id === productDetails.id);

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

  useEffect(() => {
    if (productDetails) {
      setIsModalOpen(true);
    }
  }, [productDetails]);

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        paddingLeft: "2rem",
        flex: 1,
      }}
    >
      {products.length > 0 &&
        products.map((product) => (
          <div key={product.id} onClick={() => setProductDetails(product)}>
            <ProductCard data={product} />
          </div>
        ))}
      <Modal
        open={isModalOpen}
        onCancel={() => {
          setIsModalOpen(false);
          setProductDetails(null);
        }}
        footer={null}
      >
        {productDetails && (
          <div style={{ display: "flex", flexDirection: "row" }}>
            <img
              src={productDetails.thumbnail}
              alt={productDetails.title}
              style={{
                maxWidth: "60%",
                height: "300px",
                marginRight: "1rem",
                objectFit: "cover",
              }}
            />

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                maxWidth: "60%",
              }}
            >
              <div>
                <h4 style={{ margin: 0 }}>Description: </h4>
                <p style={{ margin: 0 }}>{productDetails.description}</p>
              </div>
              <div style={{ display: "flex", justifyContent: "end" }}>
                <Button
                  type="primary"
                  key="add"
                  style={{
                    color: isProductInCart ? "#1677ff" : "",
                    borderColor: isProductInCart ? "#1677ff" : "",
                  }}
                  disabled={isProductInCart}
                  onClick={() => {
                    cartUpdate(productDetails.id);
                    setIsModalOpen(false);
                    setProductDetails(null);
                  }}
                >
                  {isProductInCart ? "In Cart" : "Add to Cart"}
                </Button>
              </div>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default Products;
