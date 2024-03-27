export const filterByCategory = (products, category) => {
  return products.filter((product) => product.category === category);
};
