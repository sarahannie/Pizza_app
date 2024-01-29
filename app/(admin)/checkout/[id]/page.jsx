
"use client"


import React, { useEffect, useState } from 'react';
import ProductDetail from "@/pages/ProductDetail/productDetail";
import Paid from "@/pages/Paid/paid";
import axios from "axios";

const ProductPage = ({ params }) => {
  const [order, setOrder] = useState([]);
  const orderId = params.id
  // console.log("productId", productId);
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`/api/order/${orderId}`);
        setOrder(response.data);
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };

    fetchProduct();
  }, [orderId]);

  // console.log("productId", product._id);

  return <Paid order={order} />;
};

export default ProductPage;
