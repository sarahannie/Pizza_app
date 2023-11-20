"use client"
import React, { useState } from 'react';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
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
       <FaAngleLeft className={style.icon1} onClick={decrementCount} />
        {count}
      <FaAngleRight className={style.icon1} onClick={incrementCount} />
    </div>
  )
}

export default Counter