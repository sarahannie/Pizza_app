"use client"
import Image from 'next/image'
import { IoIosCheckmarkCircle } from "react-icons/io";
import { RiSecurePaymentFill } from "react-icons/ri";
import { AiOutlineDeliveredProcedure } from "react-icons/ai";
import { GiCampCookingPot } from "react-icons/gi";
import { RiEBike2Fill } from "react-icons/ri";
import style from './paid.module.css'
import Link from 'next/link'
import axios from 'axios';
import { useState, useEffect } from 'react';

const Paid = () => {
const[data, setData] = useState('')
const[paypal, setPaypal] = useState('')
const orderId = "65b10d49727f15ea1bdfc713"
  const getOrder = async() =>{
    try{
      const response = await axios.get(`api/order/${orderId}`)
      setData(response.data)
    }catch(error){
      console.log("Cant not get ordered product",error)
    }
   
  }
  const getPaypal = async() =>{
    try{
      const response = await axios.get(`api/paypal/${orderId}`)
      setPaypal(response.data)
    }catch(error){
      console.log("Cant not get ordered product",error)
    }
  }
  console.log("data",data)

  useEffect(() => {
    getOrder()
    getPaypal()
  },[])
  return (
    <>
        <div className={style.container}>
            <div>
            <> 
 
<div className={`w-full overflow-x-auto ${style.table}`}>
  <table className="w-full text-left border-collapse rounded w-overflow-x-auto " cellSpacing="0">
    <tbody>
      <tr className="border-b border-slate-300">
        <th scope="col" className="h-12 px-6 text-sm font-medium stroke-slate-700 text-slate-700 ">Order ID</th>
        <th scope="col" className="h-12 px-6 text-sm font-medium stroke-slate-700 text-slate-700 ">Customer</th>
        <th scope="col" className="h-12 px-6 text-sm font-medium stroke-slate-700 text-slate-700 ">Address</th>
        <th scope="col" className="h-12 px-6 text-sm font-medium stroke-slate-700 text-slate-700 ">Total</th>
        
      </tr>
   
                <tr  className="border-b border-slate-200">
                <td className="h-12 px-6 text-sm transition duration-300 border-slate-200 stroke-slate-500 text-slate-500 ">
        <h3 className="text-sm font-medium">{data.orderId || paypal.orderId}</h3>
     </td>
     <td className="h-12 px-6 text-sm transition duration-300 border-slate-200 stroke-slate-500 text-slate-500 ">
         <div>
           <h3 className="text-sm font-medium">{data.phone || paypal.email}</h3>
         </div>
     </td>
     <td className="h-12 px-6 text-sm transition duration-300 border-slate-200 stroke-slate-500 text-slate-500 ">
         <div>
           <h3 className="text-sm font-medium">{data.address || paypal.address}</h3>
         </div>
     </td>
     <td className="h-12 px-6 text-sm transition duration-300 border-slate-200 stroke-slate-500 text-slate-500 ">
       <div>${data.totalPrice || paypal.totalPrice}</div>
     </td>
        </tr>
            
   
      
    </tbody>
  </table>
  
</div>
 </> 
 <div className='flex flex-col gap-6 justify-between mr-10 ml-10 mt-10 align-center lg:flex lg:flex-row '>
    <div>
    <div> <RiSecurePaymentFill fontSize={50}  /></div>
    <h4>Payment</h4>
    <div > <IoIosCheckmarkCircle color='green' fontSize={30} className='ml-4' /></div>
    </div>
    <div>
    <div> <GiCampCookingPot  fontSize={50}/></div>
    <h4>Preparing</h4>
    <div > <IoIosCheckmarkCircle color='green' fontSize={30} className='ml-4' /></div>
    </div>
    <div>
    <div> <RiEBike2Fill fontSize={50} /></div>
    <h4>on the way</h4>
    <div > <IoIosCheckmarkCircle color='green' fontSize={30} className='ml-4' /></div>
    </div>
    <div>
    <div> <AiOutlineDeliveredProcedure fontSize={50} /></div>
    <h4>Delivered</h4>
    <div > <IoIosCheckmarkCircle color='green' fontSize={30} className='ml-4' /></div>
    </div>
 </div>
</div>
            <div className={style.cartContainer}>
               <div>
                <h2 className='text-2xl px-6 mb-4 mt-4 text-white-900'>Totals Order </h2>
                </div>
                <div>
                 
                <div className='flex justify-between text-white-500  py-2'> 
                      <h3>Shipping</h3>
                      <h3>$5.00</h3>
                </div> 
                <div className='flex justify-between text-white-500 py-2'>  
                   <h3> Order Total</h3>
                   <h3>${data.totalPrice}</h3>
                 </div> 
                </div>
                <div>
                    <Link href="/checkout" className={style.btn}>Paid</Link>
                </div>
            </div>
        </div>
    </>
  )
}

export default Paid