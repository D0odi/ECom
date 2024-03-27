import { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import "../styles/Products.css";
import { filterByCategory } from "../helpers/filterByCategory";

const Products = ({ searchParams }) => {
  const [products, setProducts] = useState([]);

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

  return (
    <div className="product-list">
      {products.length > 0 &&
        products.map((product) => {
          return <ProductCard key={product.id} data={product} />;
        })}
    </div>
  );
};

export default Products;
