"use client"
import React, { useState } from 'react';
import style from './cartCounter.module.css' 
import { FaAngleDown, FaAngleLeft, FaAngleRight, FaAngleUp } from 'react-icons/fa';


const CartCounter = () => {
    const [count, setCount] = useState(1);
    function incrementCount() {
        setCount(count + 1);
      }
    
      function decrementCount() {
        if (count > 1) {
          setCount(count - 1);
        }
      }
  return (
 
       <div className={style.contain}>
        <FaAngleLeft className={style.icon1} onClick={decrementCount} />
        <div className='mt-2 text-xl'>
            {count}
        </div>
        <FaAngleRight className={style.icon1} onClick={incrementCount} />
       </div>
    
  )
}

export default CartCounter