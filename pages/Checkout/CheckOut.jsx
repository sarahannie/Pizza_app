"use client"
import CartCounter from '@/components/cartCounter'
import Image from 'next/image'

import { FaTrash } from 'react-icons/fa'
import style from './checkout.module.css'
import Link from 'next/link'
import ModalBasic from '@/components/checkoutMedal'

const CheckOut = ({setIsShowing,isShowing}) => {
  return (
    <>
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
  <tr className="border-b border-slate-200">
    <td className="h-12 px-6 text-sm transition duration-300 border-slate-200 stroke-slate-500 text-slate-500 ">
      <div className="flex items-center gap-4">
        <div className="w-30 h-19  rounded-sm">
            <Image src="/image/pizza-1.png" width={120} height={100} alt='Vacter Image' />
        </div>
        
        </div>
    </td>
    <td className="h-12 px-6 text-sm transition duration-300 border-slate-200 stroke-slate-500 text-slate-500 ">
        <div>
          <h3 className="text-sm font-medium">Shrimp Pizza</h3>
        </div>
    </td>
    <td className="h-12 px-6 text-sm transition duration-300 border-slate-200 stroke-slate-500 text-slate-500 ">
        <div>
          <h3 className="text-sm font-medium"></h3>
        </div>
    </td>
    <td className="h-12 px-6 text-sm transition duration-300 border-slate-200 stroke-slate-500 text-slate-500 ">
      <div>$35.00</div>
    </td>
    <td className="h-12 px-6 text-sm transition duration-300 border-slate-200 stroke-slate-500 text-slate-500 ">
        <div><CartCounter/></div>
    </td>
    <td className="h-12 px-6 text-sm transition duration-300 border-slate-200 stroke-slate-500 text-slate-500 ">
    <div>$35.00</div>
    </td>
    <td className="h-12 px-6 text-sm transition duration-300 border-slate-200 stroke-slate-500 text-slate-500 ">
      <div className="text-red-500 cursor-pointer">
        <FaTrash />
      </div>
    </td>
  </tr>
 
  
  
</tbody>
</table>
</div>
</> 
</div>
        <div className={style.cartContainer}>
           <div>
            <h2 className='text-2xl px-6 mb-4 mt-4 text-white-900'>CART TOTALS</h2>
            </div>
            <div>
            <div className='flex justify-between text-white-500 py-2'>  
                <h3>Subtotal</h3>
                <h3>$35.00</h3>
            </div> 
            <div className='flex justify-between text-white-500  py-2'> 
                  <h3>Shipping</h3>
                  <h3>$5.00</h3>
            </div> 
            <div className='flex justify-between text-white-500 py-2'>  
               <h3> Order Total</h3>
               <h3>$40.00</h3>
             </div> 
            </div>
            
            <ModalBasic isShowing={isShowing} setIsShowing={setIsShowing}  />
            <div>
                <Link href="/checkout" className={style.btn1}><Image src="/image/paypal.png" width={70} height={10} alt='Vacter Image' /></Link>
            </div>
            
            
        </div>
    </div>
</>
  )
}

export default CheckOut