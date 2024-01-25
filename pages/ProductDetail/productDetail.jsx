"use client"
import Image from 'next/image'
import style from './productDetail.module.css';

import {  FaStar } from "react-icons/fa";
import Counter from '../../components/Counters';
import { MdFavoriteBorder } from "react-icons/md";
import { Checkbox } from '@nextui-org/checkbox';
import { CartContext} from "@/app/context/store";
import  { useContext, useState } from 'react';
import { FaAngleDown,  FaAngleUp } from 'react-icons/fa';

const ProductDetail = ({product}) => {
const { cart, addItemToCart,} = useContext(CartContext);
const [selectedSize, setSelectedSize] = useState('small');
const [selectedSauce, setSelectedSauce] = useState('salt');
const [count, setCount] = useState(1);
    function incrementCount() {
        setCount(count + 1);
      }
    
      function decrementCount() {
        if (count > 1) {
          setCount(count - 1);
        }
      }

const handleSizeChange = (size) => {
    setSelectedSize(size);
  };

  const handleSauceChange = (sauce) => {
    setSelectedSauce(sauce);
  };
  
  
const salt = product?.extra?.item
const sauce = product?.extra?.item2



const addToCartHandler = () => {
    addItemToCart({
      product: product._id,
      name: product.name,
      price: product.price[selectedSize],
      image: product.image,
      extra: selectedSauce,
      title:product.title,
      description:product.description,
      quantity: count
    });
  };

  return (
    <div className={style.container}>
        <div>
            <div>
                <Image src={product?.image} className={style.image} width={100} height={100} alt='Vacter Image' />
            </div>
            
        </div>
        <div className={style.headContainer}>
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
                <div className={style.label} onClick={() => handleSizeChange('small')}>
                    <Image src='/image/Pizza-icon.png' width={40} height={20} alt='Vacter Image' />
                    <span className={style.small}>Small</span>
                </div>
                <div className={style.label1} onClick={() => handleSizeChange('medium')}>
                    <Image src='/image/Pizza-icon.png' width={60} height={20} alt='Vacter Image' />
                    <span className={style.medium}>Medium</span>
                </div>
                <div className={style.label2} onClick={() => handleSizeChange('large')}>
                    <Image src='/image/Pizza-icon.png'  width={80} height={20} alt='Vacter Image' />
                    <span className={style.large}>Large</span>
                </div>
                </div>
            </div>
            <div className={style.sauce}>
                <h2 className={style.sauceText}>Choose additional ingredients</h2>
                <Checkbox className={style.check} onChange={() => handleSauceChange(salt)}>{product?.extra?.item}</Checkbox> &nbsp;
                <Checkbox className={style.check} onChange={() => handleSauceChange(sauce)}>{product?.extra?.item2}</Checkbox>
            </div>
            <div className={style.cart}>
            <div className={style.contain}>
      <div className='mt-2 text-xl'>
        {count}
      </div>
       
       <div>
        <FaAngleUp className={style.icon1} onClick={decrementCount} />
        <FaAngleDown className={style.icon1} onClick={incrementCount} />
       </div>
    </div>
                <div>
                    <button className={style.btn} onClick={addToCartHandler}>Add to Cart</button>
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