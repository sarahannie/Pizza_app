
"use client"


import React, { useEffect, useState } from 'react';
import ProductDetail from "@/pages/ProductDetail/productDetail";
import axios from "axios";

const ProductPage = ({ params }) => {
  const [product, setProduct] = useState([]);
  const productId = params.id
  // console.log("productId", productId);
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`/api/user/product/${productId}`);
        setProduct(response.data);
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };

    fetchProduct();
  }, [productId]);

  // console.log("productId", product._id);

  return <ProductDetail product={product} />;
};

export default ProductPage;



