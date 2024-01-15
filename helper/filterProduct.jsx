"use client"
import { useState, useEffect, useMemo } from 'react';
import axios from 'axios';
import { ProductContext } from '@/app/context/store';


export function cartProductPrice(cartProduct) {
  let price = cartProduct.basePrice;
  if (cartProduct.size) {
    price += cartProduct.size.price;
  }
  if (cartProduct.extras?.length > 0) {
    for (const extra of cartProduct.extras) {
      price += extra.price;
    }
  }
  return price;
}

export const ProductProvider = ({ children }) => {
  const [pizza, setPizza] = useState([]);
  const [page, setPage] = useState(1);
  const [category, setCategory] = useState('');
  const [show, setShow] = useState(false);
  const [filteredPizzas, setFilteredPizzas] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const originalPizzas = useMemo(() => [...pizza], [pizza]);
  const itemsPerPage = 6;

  const [cartProducts,setCartProducts] = useState([]);

  useEffect(() => {
    getPizza();
  }, []);

  const handleChange = (value) => {
    setCategory(value);
    handleFilter(value);
  };

  const handleFilter = (title) => {
    const lowercasedTitle = title.toLowerCase();
    const newFilteredPizzas = originalPizzas.filter((product) =>
      product.title.toLowerCase().includes(lowercasedTitle)
    );
    console.log("selectfilter", newFilteredPizzas)
    setFilteredPizzas(newFilteredPizzas);
  };

  const handleAllFilter = (price, title, description) => {
    const lowercasedTitle = title.toLowerCase();
    const lowercasedDescription = description.toLowerCase();
    const newFilteredPizzas = originalPizzas.filter((product) =>
      product.price.small <= price &&
      product.title.toLowerCase().includes(lowercasedTitle) &&
      product.description.toLowerCase().includes(lowercasedDescription)
    );
    setFilteredPizzas(newFilteredPizzas);
  };


const handleInputChange = (value) => {
  setSearchTerm(value);
  handlenavbarFilter(value);
  console.log("value", value)
};
const handlenavbarFilter = (title) => {
  const lowercasedTitle = title.toLowerCase();
    const newFilteredPizzas = originalPizzas.filter((product) =>
      product.title.toLowerCase().includes(lowercasedTitle)
    );
    console.log('navbarfiltrer',newFilteredPizzas);
    setFilteredPizzas(newFilteredPizzas);
  };

console.log(" original",originalPizzas)


 




  const itemsToShow = filteredPizzas.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );

console.log("filteredPizzas", filteredPizzas);
console.log("itemsToShow", itemsToShow);

  const getPizza = async () => {
    try {
      const response = await axios.get(`/api/user/product`);
      const data = response.data;
      setPizza(data);
      setFilteredPizzas(data);
      console.log(data);
    } catch (error) {
      console.error("Can't fetch product data. Please try again.", error);
    }
  };

  const ls = typeof window !== 'undefined' ? window.localStorage : null;

  useEffect(() => {
    if (ls && ls.getItem('cart')) {
      setCartProducts( JSON.parse( ls.getItem('cart') ) );
    }
  }, []);

  function clearCart() {
    setCartProducts([]);
    saveCartProductsToLocalStorage([]);
  }

  function removeCartProduct(indexToRemove) {
    setCartProducts(prevCartProducts => {
      const newCartProducts = prevCartProducts
        .filter((v,index) => index !== indexToRemove);
      saveCartProductsToLocalStorage(newCartProducts);
      return newCartProducts;
    });
    toast.success('Product removed');
  }

  function saveCartProductsToLocalStorage(cartProducts) {
    if (ls) {
      ls.setItem('cart', JSON.stringify(cartProducts));
    }
  }

  function addToCart(product, size=null, extras=[]) {
    setCartProducts(prevProducts => {
      const cartProduct = {...product, size, extras};
      const newProducts = [...prevProducts, cartProduct];
      saveCartProductsToLocalStorage(newProducts);
      return newProducts;
    });
  }

  
  

  return (
    <ProductContext.Provider
    value={{
    pizza,
    page,
    category,
    filteredPizzas,
    itemsPerPage,
    itemsToShow,
    handleChange,
    handleFilter,
    handleAllFilter,
    getPizza,
    handlenavbarFilter,
    searchTerm,
    setSearchTerm,
    handleInputChange,
    setFilteredPizzas,
    show,
    setShow,
    cartProducts, 
    setCartProducts,
    addToCart, 
    removeCartProduct, 
    clearCart,
  }}
  >
    {children}
  </ProductContext.Provider>
);
};


