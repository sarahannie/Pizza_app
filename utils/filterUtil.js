// filterUtils.js

const handleTotalFilter = (originalPizzas, price, title, description) => {
    const lowercasedTitle = title.toLowerCase();
    const lowercasedDescription = description.toLowerCase();
  
    return originalPizzas.filter((product) => 
      product.price.small <= price &&  
      product.title.toLowerCase().includes(lowercasedTitle) &&
      product.description.toLowerCase().includes(lowercasedDescription)
    );
  };
  
  export { handleTotalFilter };
  