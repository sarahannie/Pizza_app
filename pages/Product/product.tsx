import React from 'react';
import style from './product.module.css';
import Image from 'next/image';
import { IoFilter } from 'react-icons/io5';
import ProductCard from '@/components/productCard';


const Product = () => {
  return (
    <div className={style.container}>
      <nav className={style.productContainer}>
        <div className={style.btn}>
        <IoFilter className={style.icon} />
          <button className={style.btn1}>Filter</button>
        </div>
        
        <div className={style.productResult}>
        <div className={style.result}> 
          Showing all 9 results
        </div>
          <select className={style.option} >
            <optgroup  className={style.option1} label='select Product'>
              <option value="val">Pizza</option>
              <option value="val">Cheese</option>
              <option value="val">Sea food</option>
              <option value="val"> burger</option>
            </optgroup> 
          </select>
        </div>
      </nav>
      <div>
        <ProductCard />
      </div>
    </div>
  )
}

export default Product