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

  const [cart,setCart] = useState([]);

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
};
const handlenavbarFilter = (title) => {
  const lowercasedTitle = title.toLowerCase();
    const newFilteredPizzas = originalPizzas.filter((product) =>
      product.title.toLowerCase().includes(lowercasedTitle)
    );
    setFilteredPizzas(newFilteredPizzas);
  };


  const itemsToShow = filteredPizzas.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );



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

  // useEffect(() => {
  //   if (ls && ls.getItem('cart')) {
  //     setCartProducts( JSON.parse( ls.getItem('cart') ) );
  //   }
  // }, []);

  // function clearCart() {
  //   setCartProducts([]);
  //   saveCartProductsToLocalStorage([]);
  // }

  // function removeCartProduct(indexToRemove) {
  //   setCartProducts(prevCartProducts => {
  //     const newCartProducts = prevCartProducts
  //       .filter((v,index) => index !== indexToRemove);
  //     saveCartProductsToLocalStorage(newCartProducts);
  //     return newCartProducts;
  //   });
  //   toast.success('Product removed');
  // }

  // function saveCartProductsToLocalStorage(cartProducts) {
  //   if (ls) {
  //     ls.setItem('cart', JSON.stringify(cartProducts));
  //   }
  // }

  // function addToCart(product, size=null, extras=[]) {
  //   setCartProducts(prevProducts => {
  //     const cartProduct = {...product, size, extras};
  //     const newProducts = [...prevProducts, cartProduct];
  //     saveCartProductsToLocalStorage(newProducts);
  //     return newProducts;
  //   });
  // }


  useEffect(() => {
    setCartToState();
  }, []);

  const setCartToState = () => {
    setCart(
      localStorage.getItem("cart")
        ? JSON.parse(localStorage.getItem("cart"))
        : []
    );
  };

  const addItemToCart = async ({
    product,
    name,
    price,
    image,
    extra,
    title,
    description,
    quantity = 1,
  }) => {
    const item = {
      product,
      name,
      price,
      image,
      extra,
      title,
      description,
      quantity,
    };

    const isItemExist = cart?.cartItems?.find(
      (i) => i.product === item.product
    );

    let newCartItems;

    if (isItemExist) {
      newCartItems = cart?.cartItems?.map((i) =>
        i.product === isItemExist.product ? item : i
      );
    } else {
      newCartItems = [...(cart?.cartItems || []), item];
    }

    localStorage.setItem("cart", JSON.stringify({ cartItems: newCartItems }));
    setCartToState();
  };

  const deleteItemFromCart = (id) => {
    const newCartItems = cart?.cartItems?.filter((i) => i.product !== id);

    localStorage.setItem("cart", JSON.stringify({ cartItems: newCartItems }));
    setCartToState();
  };

  
  

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
    cart,
    addItemToCart,
    deleteItemFromCart,
  }}
  >
    {children}
  </ProductContext.Provider>
);
};


