
import Image from 'next/image'
import style from './productDetail.module.css';
import ProductDC from '../../components/ProductDC';
import {  FaStar } from "react-icons/fa";
import Counter from '../../components/Counters';
import { MdFavoriteBorder } from "react-icons/md";


const ProductDetail = () => {



  return (
    <div className={style.container}>
        <div>
            <div>
                <Image src="/image/pizza-1.png" width={1600} height={100} alt='Vacter Image' />
            </div>
            <div className={style.contain}>
                <ProductDC />
            </div>
        </div>
        <div>
            <div className={style.header}>Shrimp Pizza</div>
            <div className={style.star}>
                <h3>$35.00</h3>
                <div className="flex mt-1 gap-1">
                <FaStar className={style.cheeseStar} color="#fbb200" fontSize={15}/>
                <FaStar className={style.cheeseStar} color="#fbb200" fontSize={15}/>
                <FaStar className={style.cheeseStar} color="#fbb200" fontSize={15}/>
                <FaStar className={style.cheeseStar} color="#fbb200" fontSize={15}/>
                <FaStar className={style.cheeseStar} color="#fbb200" fontSize={15}/>
              </div>
              <div>8 Reviews</div>
            </div>
            <div>
                <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Semper sagittis dolor aliquet quam feugiat nisi a ultrices feugiat. Viverra facilisi turpis eget tempor. Mattis risus amet euismod eleifend.Lorem ipsum dolor sit amet,colur consectetur omni adipisicing elit, sed do eiusmod tempor incididunt labore et magna aliqua.</h3>
                <div>Category :Chicken, Launch, Pizza, Burger</div>
                <div>Tags :Healthy, Organic, Chicken, Sauce</div>
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