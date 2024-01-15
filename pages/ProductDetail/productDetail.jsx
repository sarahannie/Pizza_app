"use client"
import Image from 'next/image'
import style from './productDetail.module.css';

import {  FaStar } from "react-icons/fa";
import Counter from '../../components/Counters';
import { MdFavoriteBorder } from "react-icons/md";
import { Checkbox } from '@nextui-org/checkbox';
import { ProductContext} from "@/app/context/store";
import  { useContext } from 'react'

const ProductDetail = ({product}) => {
const {cartProducts, addToCart} = useContext(ProductContext);

  return (
    <div className={style.container}>
        <div>
            <div>
                <Image src={product?.image} width={600} height={100} alt='Vacter Image' />
            </div>
            
        </div>
        <div>
            <div className={style.header}>{product?.title}</div>
            <div className={style.star}>
                <h3 className={style.headH3}>${product?.price?.small}</h3>
              <div className={style.headTxt}>8 Reviews</div>
            </div>
            <div>
                <h4 className={style.headh3t}>{product?.description}</h4 >
                <div className='text-gray-900  pt-2 pb-2'><span className='font-semibold'>Description:</span>    <span className='text-sm'>{product?.description} </span> </div>
                <div ><span className='font-semibold'>Tags:</span> <span className='text-sm'> Chicken, Launch, Pizza, Burger</span> </div>
            </div>
            <div>
                <div className={`flex gap-[52px] ${style.textbox}`}>
                <div className={style.label}>
                    <Image src='/image/Pizza-icon.png' width={40} height={20} alt='Vacter Image' />
                    <span className={style.small}>Small</span>
                </div>
                <div className={style.label1}>
                    <Image src='/image/Pizza-icon.png' width={60} height={20} alt='Vacter Image' />
                    <span className={style.medium}>Medium</span>
                </div>
                <div className={style.label2}>
                    <Image src='/image/Pizza-icon.png'  width={80} height={20} alt='Vacter Image' />
                    <span className={style.large}>Large</span>
                </div>
                </div>
            </div>
            <div className={style.sauce}>
                <h2 className={style.sauceText}>Choose additional ingredients</h2>
                <Checkbox className={style.check}>{product?.extra?.item}</Checkbox> &nbsp;
                <Checkbox className={style.check}>{product?.extra?.item2}</Checkbox>
            </div>
            <div className={style.cart}>
                <div>
                    <Counter/>
                </div>
                <div>
                    <button className={style.btn} onClick={() => addToCart(product)}>Add to Cart</button>
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