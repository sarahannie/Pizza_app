"use client"
import { useState, useEffect, useMemo } from 'react';
import axios from 'axios';
import { CartContext } from '@/app/context/store';

export const CartProvider = ({ children }) => {
    const [cart,setCart] = useState([]);
    
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
        <CartContext.Provider
        value={{
        cart,
        addItemToCart,
        deleteItemFromCart,
      }}
      >
        {children}
      </CartContext.Provider>
    );

}
