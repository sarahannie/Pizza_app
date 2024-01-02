"use client"
import { Button } from '@nextui-org/button'
import Image from 'next/image'
import React from 'react'
import style from './home.module.css'
import ModalForm from '../editpizza/editpizza';
import  useClient  from '@/helper/getProduct';
import axios from 'axios'
import { toast } from 'react-hot-toast'
import { useState, useEffect } from 'react'



const Home = () => {
  const [pizzaData, setPizzaData] = useState([]);

  const getPizza = async () => {
    try {
      const response = await axios.get('/api/user/product');
      setPizzaData(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
      toast.error("Can't fetch product data. Please try again.");
    }
  };

  useEffect(() => {
    getPizza();
  }, []);

  return (
    <div className={style.container}>
      <div>
         <div>
          <h2 className='text-3xl'>Products</h2>
         </div>
         <div >
            <> 
  <div className={`w-full overflow-x-auto ${style.table}`}>
  <table className="w-1/2 text-left border-collapse rounded w-overflow-x-auto lg:w-overflow-x-auto " cellSpacing="0">
      <thead>
      <tr className="border-b border-slate-300">
        <th scope="col" className="h-12 px-6 text-sm font-medium stroke-slate-700 text-slate-700 ">Image</th>
        <th scope="col" className="h-12 px-6 text-sm font-medium stroke-slate-700 text-slate-700 ">Id</th>
        <th scope="col" className="h-12 px-6 text-sm font-medium stroke-slate-700 text-slate-700 ">Title</th>
        <th scope="col" className="h-12 px-6 text-sm font-medium stroke-slate-700 text-slate-700 ">Price</th>
        <th scope="col" className="h-12 px-6 text-sm font-medium stroke-slate-700 text-slate-700 ">Action</th>
      </tr>
      </thead>
      <tbody>
      {pizzaData.map((pizza) => (
          <Trpizza key={pizza.id} pizza={pizza} />
       ))}
    </tbody>
  </table>
</div>
 </> 
        </div>
    </div>
      <div className='lg:w-[40%] sm:w-[100%]'> 
        <div className='text-3xl text'>Orders</div>
        <div >
            <> 
 
<div className={`w-full overflow-x-auto  ${style.table}`}>
  <table className="w-1/2 text-left border-collapse rounded w-overflow-x-auto " cellSpacing="0">
    <thead>
      <tr className="border-b border-slate-300">
        <th scope="col" className="h-12 px-6 text-sm font-medium stroke-slate-700 text-slate-700 ">Id</th>
        <th scope="col" className="h-12 px-6 text-sm font-medium stroke-slate-700 text-slate-700 ">Customer</th>
        <th scope="col" className="h-12 px-6 text-sm font-medium stroke-slate-700 text-slate-700 ">Total</th>
        <th scope="col" className="h-12 px-6 text-sm font-medium stroke-slate-700 text-slate-700 ">Status</th>
        <th scope="col" className="h-12 px-6 text-sm font-medium stroke-slate-700 text-slate-700 ">Action</th>
        
      </tr>
    </thead>
      <tbody>
        {Trtransaction()}
    </tbody>
  </table>
</div>
 </> 
      </div>
      </div>
    </div>
  )
}

export default Home

function Trpizza({ pizza }) {
  const largePrice = pizza.price?.large|| 'Price not available';
  return(
    <tr className="border-b border-slate-200">
      <td className="h-12 px-6 text-sm transition duration-300 border-slate-200 stroke-slate-500 text-slate-500 ">
        <div className="flex items-center gap-4">
          <div className="w-30 h-19  rounded-sm">
            <Image src={pizza.image} width={100} height={100} alt='Pizza Image' />
          </div>
        </div>
      </td>
      <td className="h-12 px-6 text-sm transition duration-300 border-slate-200 stroke-slate-500 text-slate-500 ">
        <div>
          <h3 className="text-sm font-medium">{pizza._id}</h3>
        </div>
      </td>
      <td className="h-12 px-6 text-sm transition duration-300 border-slate-200 stroke-slate-500 text-slate-500 ">
        <div>
          <h3 className={`text-sm font-medium ${style.div}`}>{pizza.title}</h3>
        </div>
      </td>
      <td className="h-12 px-6 text-sm transition duration-300 border-slate-200 stroke-slate-500 text-slate-500 ">
        <div>$ {largePrice}</div>
      </td>
      <td className="h-12 px-6 text-sm transition duration-300 border-slate-200 stroke-slate-500 text-slate-500 ">
        <div className="flex gap-4">
          <ModalForm pizza={pizza._id} />
          <Button size="sm" className='bg-red-700 border-none hover:bg-red-400 text-white'>
            Delete
          </Button>
        </div>
      </td>
    </tr>
  )
}

function Trtransaction(){
  return(
    <tr className="border-b border-slate-200">
        <td className="h-12 px-6 text-sm transition duration-300 border-slate-200 stroke-slate-500 text-slate-500 ">
          <div className="flex items-center gap-4">
              655512345as452.....
            </div>
        </td>
        <td className="h-12 px-6 text-sm transition duration-300 border-slate-200 stroke-slate-500 text-slate-500 ">
            <div>
              <h3 className="text-sm font-medium">08034739605</h3>
            </div>
        </td>
        <td className="h-12 px-6 text-sm transition duration-300 border-slate-200 stroke-slate-500 text-slate-500 ">
            <div>
              <h3 className="text-sm font-medium"> cash</h3>
            </div>
        </td>
        <td className="h-12  px-6 text-sm transition duration-300 border-slate-200 stroke-slate-500 text-slate-500 ">
          <div className={style.div}>On the way</div>
        </td>
        <td className="h-12 px-6 text-sm transition duration-300 border-slate-200 stroke-slate-500 text-slate-500 ">
            <div>
              <Button size="md" className='bg-green-700 border-none hover:bg-green-400 text-white'>Next Stage</Button>
              
            </div>
        </td>
       
      </tr> 
  )
}