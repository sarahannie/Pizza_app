"use client"
import React, { useState } from 'react';
import { FaAngleDown, FaAngleLeft, FaAngleRight, FaAngleUp } from 'react-icons/fa';
import style from './Counters.module.css'

const Counter = () => {
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
      <div className='mt-2 text-xl'>
        {count}
      </div>
       
       <div>
        <FaAngleUp className={style.icon1} onClick={decrementCount} />
        <FaAngleDown className={style.icon1} onClick={incrementCount} />
       </div>
    </div>
  )
}

export default Counter