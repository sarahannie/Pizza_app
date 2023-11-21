import CartCounter from '@/components/cartCounter'
import Image from 'next/image'
import React from 'react'
import { FaTrash } from 'react-icons/fa'
import style from './cart.module.css'

const Cart = () => {
  return (
    <>
        <div className='flex'>
            <div>
            <> 
 
<div className="w-full overflow-x-auto">
  <table className="w-full text-left border-collapse rounded w-overflow-x-auto " cellSpacing="0">
    <tbody>
      <tr className="border-b border-slate-300">
        <th scope="col" className="h-12 px-6 text-sm font-medium stroke-slate-700 text-slate-700 ">Product</th>
        <th scope="col" className="h-12 px-6 text-sm font-medium stroke-slate-700 text-slate-700 ">Price</th>
        <th scope="col" className="h-12 px-6 text-sm font-medium stroke-slate-700 text-slate-700 ">Quantity</th>
        <th scope="col" className="h-12 px-6 text-sm font-medium stroke-slate-700 text-slate-700 ">Total</th>
        <th scope="col" className="h-12 px-6 text-sm font-medium stroke-slate-700 text-slate-700 "> </th>
      </tr>
      <tr className="border-b border-slate-200">
        <td className="h-12 px-6 text-sm transition duration-300 border-slate-200 stroke-slate-500 text-slate-500 ">
          <div className="flex items-center gap-4">
            <div className="w-30 h-19 bg-slate-200 rounded-sm">
                <Image src="/image/pizza-1.png" width={120} height={100} alt='Vacter Image' />
            </div>
            <div>
              <h3 className="text-sm font-medium">Shrimp Pizza</h3>
            </div>
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
      <tr className="border-b border-slate-200">
        <td className="h-12 px-6 text-sm transition duration-300 border-slate-200 stroke-slate-500 text-slate-500 ">
          <div className="flex items-center gap-4">
            <div className="w-30 h-19 bg-slate-200 rounded-sm">
                <Image src="/image/pizza-1.png" width={120} height={100} alt='Vacter Image' />
            </div>
            <div>
              <h3 className="text-sm font-medium">Shrimp Pizza</h3>
            </div>
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
      <tr className="border-b border-slate-200">
        <td className="h-12 px-6 text-sm transition duration-300 border-slate-200 stroke-slate-500 text-slate-500 ">
          <div className="flex items-center gap-4">
            <div className="w-30 h-19 bg-slate-200 rounded-sm">
                <Image src="/image/pizza-1.png" width={120} height={100} alt='Vacter Image' />
            </div>
            <div>
              <h3 className="text-sm font-medium">Shrimp Pizza</h3>
            </div>
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
                <h2 className='text-2xl px-6 mb-4 mt-4 text-slate-900'>Cart Totals</h2>
                </div>
                <div>
                <div className='flex justify-between text-slate-500 py-2'>  
                    <h3>Subtotal</h3>
                    <h3>$35.00</h3>
                </div> 
                <div className='flex justify-between text-slate-500 text-slate-500 py-2'> 
                      <h3>Shipping</h3>
                      <h3>$5.00</h3>
                </div> 
                <div className='flex justify-between text-slate-500 py-2'>  
                   <h3> Order Total</h3>
                   <h3>$40.00</h3>
                 </div> 
                </div>
                <div>
                    <button className={style.btn}>PROCEED TO CHECKOUT</button>
                </div>
            </div>
        </div>
    </>
  )
}

export default Cart