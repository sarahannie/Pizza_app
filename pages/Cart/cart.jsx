"use client"
import CartCounter from '@/components/cartCounter'
import Image from 'next/image'
import { FaTrash } from 'react-icons/fa'
import style from './cart.module.css'
import Link from 'next/link'
import { ProductContext} from "@/app/context/store";
import  { useContext } from 'react'
import {  FaAngleLeft, FaAngleRight} from 'react-icons/fa';
const Cart = () => {
  const {cart, addItemToCart,deleteItemFromCart,} = useContext(ProductContext);

  
  const increaseQty = (cartItem) => {
    const newQty = cartItem?.quantity + 1;
    const item = { ...cartItem, quantity: newQty };
    addItemToCart(item);
  };

  const decreaseQty = (cartItem) => {
    const newQty = cartItem?.quantity - 1;
    const item = { ...cartItem, quantity: newQty };
    addItemToCart(item);
  };

  const subtotal = cart?.cartItems?.reduce(
    (acc, item) => acc + item.quantity * item.price.small,
    0
  );

  const shipping = (subtotal * 0.15).toFixed(2);

  const totalAmount = (Number(subtotal) + Number(shipping)).toFixed(2);


  
   

  
  return (
    <>
     <section className="py-5 sm:py-7 bg-[#f5f5f5]">
        <div className="container max-w-screen-xl mx-auto px-4">
          <h2 className="text-2xl font-semibold mb-2">
            {cart?.cartItems?.length || 0} Item(s) in Cart
          </h2>
        </div>
      </section>

        <div className={style.container}>
            <div>
            <> 
<div className={`w-full overflow-x-auto ${style.table}`}>
  <table className="w-full text-left border-collapse rounded w-overflow-x-auto " cellSpacing="0">
    <tbody>
      <tr className="border-b border-slate-300">
        <th scope="col" className="h-12 px-6 text-sm font-medium stroke-slate-700 text-slate-700 ">Product</th>
        <th scope="col" className="h-12 px-6 text-sm font-medium stroke-slate-700 text-slate-700 ">Name</th>
        <th scope="col" className="h-12 px-6 text-sm font-medium stroke-slate-700 text-slate-700 ">Extra</th>
        <th scope="col" className="h-12 px-6 text-sm font-medium stroke-slate-700 text-slate-700 ">Price</th>
        <th scope="col" className="h-12 px-6 text-sm font-medium stroke-slate-700 text-slate-700 ">Quantity</th>
        <th scope="col" className="h-12 px-6 text-sm font-medium stroke-slate-700 text-slate-700 ">Total</th>
        <th scope="col" className="h-12 px-6 text-sm font-medium stroke-slate-700 text-slate-700 "> </th>
      </tr>
      {cart?.cartItems?.map((product, index) => (
        <>
        <tr key={product.id} className="border-b border-slate-200">
        <td className="h-12 px-6 text-sm transition duration-300 border-slate-200 stroke-slate-500 text-slate-500 ">
          <div className="flex items-center gap-4">
            <div className="w-30 h-19  rounded-sm">
                <Image src={product?.image || "/image/pizza-1.png"} width={120} height={100} alt='Vacter Image' />
            </div>
            
            </div>
        </td>
        <td className="h-12 px-6 text-sm transition duration-300 border-slate-200 stroke-slate-500 text-slate-500 ">
            <div>
              <h3 className="text-sm font-medium">{product?.title}</h3>
            </div>
        </td>
        <td className="h-12 px-6 text-sm transition duration-300 border-slate-200 stroke-slate-500 text-slate-500 ">
            <div>
              <h3 className="text-sm font-medium">{product?.extra?.item || product?.extra?.item1}</h3>
            </div>
        </td>
        <td className="h-12 px-6 text-sm transition duration-300 border-slate-200 stroke-slate-500 text-slate-500 ">
          <div>${product?.price?.small|| product?.price?.medium || product?.price?.large}</div>
        </td>
        <td className="h-12 px-6 text-sm transition duration-300 border-slate-200 stroke-slate-500 text-slate-500 ">
        <div className={style.contain}>
        <FaAngleLeft className={style.icon1}  onClick={() => decreaseQty(product)} />
        <div className='mt-2 text-xl'>
            {product.quantity}
        </div>
        <FaAngleRight className={style.icon1} onClick={() => increaseQty(product)} />
       </div>
        </td>
        <td className="h-12 px-6 text-sm transition duration-300 border-slate-200 stroke-slate-500 text-slate-500 ">
        <div>${ product?.price?.small * product.quantity.toFixed(2)}</div>
        </td>
        <td className="h-12 px-6 text-sm transition duration-300 border-slate-200 stroke-slate-500 text-slate-500 ">
          <div className="text-red-500 cursor-pointer">
            <FaTrash  onClick={() => deleteItemFromCart(product?.product)  } />
          </div>
        </td>
      </tr></>
      ))}
    </tbody>
  </table>
</div>
 </> 
            </div>
            <div className={style.cartContainer}>
               <div>
                <h2 className='text-2xl px-6 mb-4 mt-4 text-white-900'>Cart Totals</h2>
                </div>
                <div>
                <div className='flex justify-between text-white-500 py-2'>  
                    <h3>Subtotal</h3>
                    <h3>${subtotal}</h3>
                </div> 
                <div className='flex justify-between text-white-500  py-2'> 
                      <h3>Shipping</h3>
                      <h3>${shipping}</h3>
                </div> 
                <div className='flex justify-between text-white-500 py-2'>  
                   <h3> Order Total</h3>
                   <h3>${totalAmount}</h3>
                 </div> 
                </div>
                <div>
                    <Link href="/checkout" className={style.btn}>PROCEED TO CHECKOUT</Link>
                </div>
            </div>
        </div>
    </>
  )
}

export default Cart