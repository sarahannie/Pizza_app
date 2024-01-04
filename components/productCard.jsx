
import React, { useState, useEffect } from 'react'
import {  FaStar } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import Link from 'next/link';
import Image from 'next/image';
import style from './productCard.module.css';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';



const ProductCard = ({itemsToShow}) => {

 



  return (
    <>
    <div className={style.container}>
      {
        itemsToShow.map((item, index) => ( 
          <div key={index} className={style.contCheese}>
              <div className={style.cheeseImg}>
                <Image src={item.image} width={250} height={100} className={style.cheeseImgMain} alt="Vacter Image"/>
              </div>
              <div className={style.cheese}>
                <h2 className={style.cheeseH2}>{item.title}</h2>
                <h2 className={style.cheeseH4}>${item?.price?.small}</h2>
              </div>
              <div className="flex m-l-5 gap-2">
              <Stack spacing={1} className='mt-2'>
                <Rating name="half-rating" defaultValue={3.5}  precision={0.5} />
              </Stack>
              </div>
              <div className={style.cheeseText}>{item.description} </div>
              <div>
              <Link href="#" className={style.btn} >
              <IoCartOutline fontSize={22} className=""/>
              ORDER NOW
            </Link>
              </div>
        </div>
        ))
      }
        
        {/* <div className={style.contCheese}>
              <div className={style.cheeseImg}>
                <Image src="/image/pizza-1.png" width={250} height={100} className={style.cheeseImgMain} alt="Vacter Image"/>
              </div>
              <div className={style.cheese}>
                <h2 className={style.cheeseH2}>Shrime Pizza</h2>
                <h2 className={style.cheeseH4}>$35.00</h2>
              </div>
              <div className="flex m-l-5 gap-1">
                <FaStar className={style.cheeseStar} color="#fbb200" fontSize={15}/>
                <FaStar className={style.cheeseStar} color="#fbb200" fontSize={15}/>
                <FaStar className={style.cheeseStar} color="#fbb200" fontSize={15}/>
                <FaStar className={style.cheeseStar} color="#fbb200" fontSize={15}/>
                <FaStar className={style.cheeseStar} color="#fbb200" fontSize={15}/>
              </div>
              <div className={style.cheeseText}>All the Lorem Ipsum generators on to Internet tend to repeat </div>
              <div>
              <Link href="#" className={style.btn} >
              <IoCartOutline fontSize={22} className=""/>
              ORDER NOW
            </Link>
              </div>
        </div> */}
    </div>
    
    </>
  )
}

export default ProductCard