
"use client"


import React, { useEffect, useState } from 'react';
import ProductDetail from "@/pages/ProductDetail/productDetail";
import axios from "axios";

const ProductPage = ({ params }) => {
  const [product, setProduct] = useState([]);
  const poductId = params.id
  console.log("productId", poductId);
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`/api/user/product/${poductId}`);
        setProduct(response.data);
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };

    fetchProduct();
  }, [poductId]);

  console.log("productId", product._id);

  return <ProductDetail product={product} />;
};

export default ProductPage;



