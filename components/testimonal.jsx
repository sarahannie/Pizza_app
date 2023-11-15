"use client"
import Image from 'next/image'
import React, { useEffect } from "react"

import { FaAngleRight, FaStar } from "react-icons/fa";
import Link from 'next/link';
import style from './testimonal.module.css'
const Testimonal = () => {
    
    
      
  return (
    <>
    <div>
        <div>
            <Image src="/image/leaf.png" alt="Vacter Image" width={100} height={100} />
        </div>
        
        <>
      {/*<!-- Component: Carousel with controls outside --> */}
      <div className="glide-04 relative w-full pb-[20px]">
      <h2 className={style.cheeseheadH2}>Customer Feedback </h2>
         {/*    <!-- Controls --> */}
         <div className={style.caroHeader}>
          <div>
            <h3 className={style.headH3}>Client Testimonials</h3>
          </div>
         
         </div>
         
        {/*    <!-- Slides --> */}
        <div className="overflow-hidden" data-glide-el="track">
          <ul className="whitespace-no-wrap flex flex-no-wrap  gap-5 [backface-visibility: hidden] [transform-style: preserve-3d] [touch-action: pan-Y] [will-change: transform] relative flex w-full overflow-hidden p-2">
            <li>
              <div className={style.contCheese}>
              <div className={style.clientCont}>
                <Image src="/image/client-1.jpg" width={100} height={100} className={style.clientContImg} alt="Vacter Image"/>
              </div>
              <div className={style.cheese}>
                <h2 className={style.cheeseH2}>Takar Bowa</h2>
              </div>
              
              <p className={style.cheeseText}>“Lorem Ipsum is simply dummy text of the print book. It has survived not only five centuries, but also the leap” </p>
              <div className="flex m-l-5 gap-1 flex justify-center mt-4">
                <FaStar className={style.cheeseStar} color="#fbb200" fontSize={15}/>
                <FaStar className={style.cheeseStar} color="#fbb200" fontSize={15}/>
                <FaStar className={style.cheeseStar} color="#fbb200" fontSize={15}/>
                <FaStar className={style.cheeseStar} color="#fbb200" fontSize={15}/>
                <FaStar className={style.cheeseStar} color="#fbb200" fontSize={15}/>
              </div>
              </div>

            </li>
            <li>
              <div className={style.contCheese}>
              <div className={style.clientCont}>
                <Image src="/image/client-2.jpg" width={100} height={100} className={style.clientContImg} alt="Vacter Image"/>
              </div>
              <div className={style.cheese}>
                <h2 className={style.cheeseH2}>Takar Bowa</h2>
              </div>
              
              <p className={style.cheeseText}>“Lorem Ipsum is simply dummy text of the print book. It has survived not only five centuries, but also the leap” </p>
              <div className="flex m-l-5 gap-1 flex justify-center mt-4">
                <FaStar className={style.cheeseStar} color="#fbb200" fontSize={15}/>
                <FaStar className={style.cheeseStar} color="#fbb200" fontSize={15}/>
                <FaStar className={style.cheeseStar} color="#fbb200" fontSize={15}/>
                <FaStar className={style.cheeseStar} color="#fbb200" fontSize={15}/>
                <FaStar className={style.cheeseStar} color="#fbb200" fontSize={15}/>
              </div>
              </div>

            </li>
            <li>
              <div className={style.contCheese}>
              <div className={style.clientCont}>
                <Image src="/image/client-3.jpg" width={100} height={100} className={style.clientContImg} alt="Vacter Image"/>
              </div>
              <div className={style.cheese}>
                <h2 className={style.cheeseH2}>Takar Bowa</h2>
              </div>
              
              <p className={style.cheeseText}>“Lorem Ipsum is simply dummy text of the print book. It has survived not only five centuries, but also the leap” </p>
              <div className="flex m-l-5 gap-1 flex justify-center mt-4">
                <FaStar className={style.cheeseStar} color="#fbb200" fontSize={15}/>
                <FaStar className={style.cheeseStar} color="#fbb200" fontSize={15}/>
                <FaStar className={style.cheeseStar} color="#fbb200" fontSize={15}/>
                <FaStar className={style.cheeseStar} color="#fbb200" fontSize={15}/>
                <FaStar className={style.cheeseStar} color="#fbb200" fontSize={15}/>
              </div>
              </div>

            </li>
            <li>
              <div className={style.contCheese}>
              <div className={style.clientCont}>
                <Image src="/image/client-4.jpg" width={100} height={100} className={style.clientContImg} alt="Vacter Image"/>
              </div>
              <div className={style.cheese}>
                <h2 className={style.cheeseH2}>Takar Bowa</h2>
              </div>
              
              <p className={style.cheeseText}>“Lorem Ipsum is simply dummy text of the print book. It has survived not only five centuries, but also the leap” </p>
              <div className="flex m-l-5 gap-1 flex justify-center mt-4">
                <FaStar className={style.cheeseStar} color="#fbb200" fontSize={15}/>
                <FaStar className={style.cheeseStar} color="#fbb200" fontSize={15}/>
                <FaStar className={style.cheeseStar} color="#fbb200" fontSize={15}/>
                <FaStar className={style.cheeseStar} color="#fbb200" fontSize={15}/>
                <FaStar className={style.cheeseStar} color="#fbb200" fontSize={15}/>
              </div>
              </div>

            </li>
            
          </ul>
        </div>
       
      </div>
      </>
    </div>
    </>
  )
}

export default Testimonal