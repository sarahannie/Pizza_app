"use client"
import React from 'react';
import style from './product.module.css';
import Image from 'next/image';

import ProductCard from '@/components/productCard';
import ModalForm from '../getpizza/getpizza';
import  { useState, useEffect, useContext } from 'react'
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { Pagination } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { handleTotalFilter } from '@/utils/filterUtil';

import Filter from '@/components/layout/filter';
import { ProductContext} from "@/app/context/store";


const Product = () => {
  const {
    pizza,
    page,
    category,
    itemsPerPage,
    filteredPizzas,
    itemsToShow,
    handleChange,
    handleAllFilter,
    cartProducts
  } = useContext(ProductContext);
 


  


  return (
    <div className={style.container}>
        
      <nav className={style.productContainer}>
        <div>
                <Filter handleAllFilter={handleAllFilter}  />
                <ModalForm />
        </div>
        
        <div className={style.productResult}>
        <div className={style.result}> 
          Showing Total Of {pizza.length} Product
        </div>
        <FormControl sx={{ m: 1, minWidth: 180 }} size="large">
          <InputLabel id="demo-select-large-label">Food</InputLabel>
          <Select
            labelId="demo-select-small-label"
            id="demo-select-small"
            value={category}
            label="Food"
            onChange={(e) => handleChange(e.target.value)}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
              <MenuItem  value={"pizza"}>Pizza</MenuItem>
              <MenuItem value={"Cheese"}>Cheese</MenuItem>
              <MenuItem value={"Seafood"}>Seafood</MenuItem>
              <MenuItem value="burger">Burger</MenuItem>
          </Select>
        </FormControl>
        </div>
      </nav>
      <div>
        <ProductCard itemsToShow={itemsToShow}  />
      </div>
      <div className='pt-10 pb-8 flex justify-center' >
        <Pagination 
        variant="outlined"
         color="secondary"
        count={Math.ceil(pizza.length / itemsPerPage)} 
        page={page} 
        onChange={(event, value) => setPage(value)}
        />
      </div>
    </div>
  )
}

export default Product