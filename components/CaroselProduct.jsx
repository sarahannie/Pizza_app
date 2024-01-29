import React, { useEffect } from "react"
import Glide, { Controls, Breakpoints } from '@glidejs/glide/dist/glide.modular.esm'
import style from './CaroselProduct.module.css';
import {  FaStar } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import Link from 'next/link';
import Image from 'next/image';
import ProductCard from "./productCard";
import { ProductContext} from "@/app/context/store";
import  { useContext } from 'react'
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';

const CaroselProduct = () => {
  const { itemsToShow ,  pizza,} = useContext(ProductContext);
    useEffect(() => {
        const slider= new Glide(".glide-04", {
          type: "carousel",
          focusAt: "center",
          perView: 3,
          autoplay: 3500,
          animationDuration: 700,
          gap: 24,
          className: {
            nav: {
              active: "[&>*]:bg-wuiSlate-700",
            },
          },
          breakpoints: {
            1024: {
              perView: 2,
            },
            640: {
              perView: 1,
            },
          },
        }).mount({ Controls, Breakpoints })
    
        return () => {
          slider.destroy()
        }
      }, [])
  return (
    <>
      {/*<!-- Component: Carousel with controls outside --> */}
      <div className="glide-04 relative w-full ">
      <h2 className={style.cheeseheadH2}>Popular Dishes </h2>
         {/*    <!-- Controls --> */}
         <div className={style.caroHeader}>
          <div>
            <h3 className={style.headH3}>Browse Our Menu</h3>
          </div>
          <div
          className="flex  gap-2 p-4"
          data-glide-el="controls"
        >
          <button
            className="inline-flex p-2 h-8 w-8 items-center justify-center rounded-full border border-[#fbb200] bg-[#fbb200] text-slate-700 transition duration-300 hover:border-white hover:text-slate-900 focus-visible:outline-none lg:h-16 lg:w-16"
            data-glide-dir="<"
            aria-label="prev slide"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-13 w-13 text-white"
            >
              <title>prev slide</title>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
              />
            </svg>
          </button>
          <button
            className="inline-flex p-2 h-8 w-8 bg-[#fbb200] items-center justify-center rounded-full border border-[#fbb200]  text-slate-700 transition duration-300 hover:border-white hover:text-slate-900 focus-visible:outline-none lg:h-16 lg:w-16"
            data-glide-dir=">"
            aria-label="next slide"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-10 w-10 text-white"
            >
              <title>next slide</title>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </button>
        </div>
         </div>
         
        {/*    <!-- Slides --> */}
        <div className="overflow-hidden" data-glide-el="track">
          <ul className="whitespace-no-wrap flex-no-wrap [backface-visibility: hidden] [transform-style: preserve-3d] [touch-action: pan-Y] [will-change: transform] relative flex w-full overflow-hidden p-0">
          {
        itemsToShow.map((item, index) => ( 
          <li key={index}>
          <div   className={style.contCheese}>
              <div className={style.cheeseImg}>
                <Image src={item.image ? item.image : "/image/pizza-1.png"} width={250} height={100} className={style.cheeseImgMain} alt="Vacter Image"/>
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
              <Link href={`/adminproduct/${item?._id}`} className={style.btn} >
              <IoCartOutline fontSize={22} className=""/>
              ORDER NOW
            </Link>
              </div>
        </div>
        </li>
        ))
      }
          </ul>
        </div>
       
      </div>
      </>
  )
}

export default CaroselProduct