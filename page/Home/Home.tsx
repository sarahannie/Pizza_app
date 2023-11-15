"use client"
import React, { useEffect } from "react"

import style from './home.module.css';
import { Button } from '@nextui-org/button';
import Link from 'next/link';
import Image from 'next/image';
import { FaAngleRight } from "react-icons/fa";
import Testimonal from '../../components/testimonal';
import Bestsell from '../../components/bestsell';
import CaroselProduct from '../../components/CaroselProduct'

const Home = () => {
  



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
                <div>
                <Image src="/image/onion.png" className={style.onionStory1} width={100} height={100} alt="Vacter Image" />
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
          
         <CaroselProduct /> 
       

      <>
      <div className={style.ourStory}>
        <div className="flex">
          <div >
            <Image src="/image/black-jamun.png" className={style.ourStoryDot} width={100} height={100} alt="Black Jamun"/>
          </div>
          <div>
            <Image src="/image/our-story.png" alt="Our Story" className={style.ourStoryImg} width={800} height={100} />
          </div>
          <div>
          <Image src="/image/onion.png" className={style.onionStory} width={100} height={100} alt="Vacter Image" />
          </div>
          <br/>
        </div>
        <div>
          <h5 className={style.ourStoryH5}>Our Story</h5>
          <h2  className={style.ourStoryH2}> The Pizzon Has <br/> Excellent Of Quality <br/> Foods</h2>
          <div className={style.ourStorytext}>
          Lorem Ipsum is simply dummy text of the printing <br/> and typesetting industry. Lorem Ipsum has been the <br/>industry&apos;s standard dummy text ever since the 1500s, <br/> when an unknown printer took a galley of type and <br/> scrambled it to make a type specimen book. It has <br/> survived not only five centuries, but also the leap into <br/> electronic typesetting, remaining essentially  unchanged.
          </div>
          <Link href="#" className={style.btn2} >
            
              READ MORE
              <FaAngleRight className={style.storyStar} />
            </Link>
        </div>
      </div>
      </>
      <Bestsell />
      <Testimonal />
      </section>
    </div>
  )
}

export default Home