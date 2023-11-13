"use client"
import React, { useEffect } from "react"
import Glide, { Controls, Breakpoints } from '@glidejs/glide/dist/glide.modular.esm'
import style from './home.module.css';
import { Button } from '@nextui-org/button';
import Link from 'next/link';
import Image from 'next/image';

const Home = () => {

  useEffect(() => {
    const slider = new Glide(".glide-04", {
      type: "carousel",
      focusAt: "center",
      perView: 3,
      autoplay: 3500,
      animationDuration: 700,
      gap: 24,
      classNames: {
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
    <div className={style.body}>
    <div className={style.bodyImg}>
			<img src="./image/header-img.png" alt="Vacter Image"/>
		</div>
      <section className={style.containImg}>
          <div className={style.containText}>
            <h1 className={style.header}>Handmade, <br/> With an Extra <br/> Pinch of <span className={style.headertxt}>Love</span></h1>
            <h3 className={style.headerH3}>Lorem Ipsum is simply dummy text of the <br/> printing and typesetting industry.</h3>
            <Link href="#" className={style.btn} >
            <Image src="/image/cart-icon-white.png"width={20} height={20}  alt="Cart Icon" />
              ORDER NOW
            </Link>
          </div>
          <div>
            <div className='flex' >
                <div className={` ${style.containLeaf}`}>
                <div className={style.leafImg}>
                    <Image src="/image/home-leaf.png" width={200} height={20} alt="home-leaf"/>
                    </div>
                    <div className={style.bannerImg}>
                    <Image src="/image/banner-img.png" width={420} height={20} alt="banner-img"/>
                    </div>
                    
                </div>
                <div className={style.bannerImgBottom}>
                    <Image src="/image/banner-img-bottom.png" width={250} height={20} alt="banner-img-bottom"/>
                </div>
                <div className={style.contImg}>
                <div className={`${style.rounded}  ${style.box}`} >
                    <div className={style.contImg}>
                        <span >.</span>
                        <div className={`${style.boximg} `}>
                            <Image src="/image/buy-one-get.png" width={200} height={20} alt="Vacter Image"/>
                        </div>
                    </div>
                </div>
                </div>
                
            </div>
          </div>
        </section>
        <section className={style.containOnion}>
            <div className={style.headerOnion}>
              <div>
                <Image src="/image/daily-fresh.png" width={300} height={20} alt="Vacter Image"/>
              </div>
              <div className={style.onionHeader}>
                <h2 className={style.onionH2}>Daily fresh and <br/> always tasty</h2>
                <h4 className={style.onionH4}>There are many variations of passages <br/> of Lorem Ipsum  available, but the <br/> majority haved</h4>
              </div>
            </div>
            <div className={style.onionImg}>
              <Image src="/image/daily-fresh-vacter.png" width={150} height={20} alt="Vacter Image" />
            </div>
          </section>
        <section>
          <h2>Popular Dish ---</h2>
          
          <>
      {/*<!-- Component: Carousel with controls outside --> */}
      <div className="glide-04 relative w-full">
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
            className="inline-flex h-8 w-64 items-center justify-center rounded-full border border-slate-700 bg-[#fbb200] text-slate-700 transition duration-300 hover:border-slate-900 hover:text-slate-900 focus-visible:outline-none lg:h-12 lg:w-12"
            data-glide-dir="<"
            aria-label="prev slide"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-10 w-10 "
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
            className="inline-flex h-8 w-32 items-center justify-center rounded-full border border-slate-700 bg-white/20 text-slate-700 transition duration-300 hover:border-slate-900 hover:text-slate-900 focus-visible:outline-none lg:h-12 lg:w-12"
            data-glide-dir=">"
            aria-label="next slide"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-10 w-10"
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
            <li>
              <div className={style.contCheese}>
              <div className={style.cheeseImg}>
                <Image src="/image/pizza-3.png" width={300} height={100} className="" alt="Vacter Image"/>
              </div>
              <div className={style.cheese}>
                <h2 className={style.cheeseH2}>Cheese Pizza</h2>
                <h2 className={style.cheeseH4}>$45.00</h2>
              </div>
              <div></div>
              <div>All the Lorem Ipsum generators on to Internet tend to repeat </div>
              <div>
              <Link href="#" className={style.btn} >
            <Image src="/image/cart-icon-white.png"width={20} height={20}  alt="Cart Icon" />
              ORDER NOW
            </Link>
              </div>
              </div>

            </li>
            <li>
              <img
                src="https://Tailwindmix.b-cdn.net/carousel/carousel-image-02.jpg"
                className="m-auto max-h-full w-full max-w-full"
              />
            </li>
            <li>
              <img
                src="https://Tailwindmix.b-cdn.net/carousel/carousel-image-03.jpg"
                className="m-auto max-h-full w-full max-w-full"
              />
            </li>
            <li>
              <img
                src="https://Tailwindmix.b-cdn.net/carousel/carousel-image-04.jpg"
                className="m-auto max-h-full w-full max-w-full"
              />
            </li>
            <li>
              <img
                src="https://Tailwindmix.b-cdn.net/carousel/carousel-image-05.jpg"
                className="m-auto max-h-full w-full max-w-full"
              />
            </li>
          </ul>
        </div>
       
      </div>
      
    </>
          
        </section>
    </div>
  )
}

export default Home