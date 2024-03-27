import { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import { filterByCategory } from "../helpers/filterByCategory";
import { Modal } from "antd";

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
        title={productDetails?.title}
        open={isModalOpen}
        onOk={() => setIsModalOpen(false)}
        destroyOnClose
      >
        {productDetails && (
          <>
            <p>Description: {productDetails.description}</p>
            <p>Price: ${productDetails.price}</p>
          </>
        )}
      </Modal>
    </div>
  );
};

export default Products;
