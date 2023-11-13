import React from 'react';
import style from './home.module.css';
import { Button } from '@nextui-org/button';
import Link from 'next/link';
import Image from 'next/image';

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
    </div>
  )
}

export default Home