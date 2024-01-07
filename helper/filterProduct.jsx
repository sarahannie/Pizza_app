"use client"
import { useState, useEffect, useMemo } from 'react';
import axios from 'axios';

const useProduct = () => {
  const [pizza, setPizza] = useState([]);
  const [page, setPage] = useState(1);
  const [category, setCategory] = useState('');
  const [filteredPizzas, setFilteredPizzas] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const originalPizzas = useMemo(() => [...pizza], [pizza]);
  const itemsPerPage = 6;

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

  // Create a memoized copy of the original pizzas array to prevent unnecessary renders
  

  return {
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
    handleInputChange
  };
};

export default useProduct;
