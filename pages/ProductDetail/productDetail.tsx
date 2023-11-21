"use client"
import Image from 'next/image'
import style from './productDetail.module.css';

import {  FaStar } from "react-icons/fa";
import Counter from '../../components/Counters';
import { MdFavoriteBorder } from "react-icons/md";
import { Checkbox } from '@nextui-org/checkbox';


const ProductDetail = () => {



  return (
    <div className={style.container}>
        <div>
            <div>
                <Image src="/image/pizza-1.png" width={600} height={100} alt='Vacter Image' />
            </div>
            
        </div>
        <div>
            <div className={style.header}>Shrimp Pizza</div>
            <div className={style.star}>
                <h3 className={style.headH3}>$35.00</h3>
              <div className={style.headTxt}>8 Reviews</div>
            </div>
            <div>
                <h3 className={style.headh3t}>This is burga pizza</h3>
                <div className={style.headh3t}>Category: Chicken, Launch, Pizza, Burger</div>
                <div className={style.headh3t}>Tags: Healthy, Organic, Chicken, Sauce</div>
            </div>
            <div>
                <h2 className={style.sauceText}> Choose Pizza Size</h2>
                <div className={`flex gap-[52px] ${style.textbox}`}>
                <div className={style.label}>
                    <Image src='/image/Pizza-icon.png' width={70} height={20} alt='Vacter Image' />
                    <span className={style.small}>Small</span>
                </div>
                <div className={style.label1}>
                    <Image src='/image/Pizza-icon.png' width={120} height={20} alt='Vacter Image' />
                    <span className={style.medium}>Medium</span>
                </div>
                <div className={style.label2}>
                    <Image src='/image/Pizza-icon.png'  width={150} height={20} alt='Vacter Image' />
                    <span className={style.large}>Large</span>
                </div>
                </div>
            </div>
            <div className={style.sauce}>
                <h2 className={style.sauceText}>Choose additional ingredients</h2>
                <Checkbox className={style.check}>Sauce</Checkbox>
            </div>
            <div className={style.cart}>
                <div>
                    <Counter/>
                </div>
                <div>
                    <button className={style.btn}>Add to Cart</button>
                </div>
                <div>
                    <MdFavoriteBorder className={style.heart} />
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default  ProductDetail