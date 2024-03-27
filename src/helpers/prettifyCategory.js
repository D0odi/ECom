export const prettifyCategory = (categoryName) => {
  const words = categoryName.split("-");
  const capitalizedWords = words.map((word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  });
  return capitalizedWords.join(" ");
};
