import { Button } from '@nextui-org/button'
import Image from 'next/image'
import React from 'react'
import style from './home.module.css'
import ModalForm from '../editpizza/editpizza'

const Home = () => {
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
    <tbody>
      <tr className="border-b border-slate-300">
        <th scope="col" className="h-12 px-6 text-sm font-medium stroke-slate-700 text-slate-700 ">Image</th>
        <th scope="col" className="h-12 px-6 text-sm font-medium stroke-slate-700 text-slate-700 ">Id</th>
        <th scope="col" className="h-12 px-6 text-sm font-medium stroke-slate-700 text-slate-700 ">Title</th>
        <th scope="col" className="h-12 px-6 text-sm font-medium stroke-slate-700 text-slate-700 ">Price</th>
        <th scope="col" className="h-12 px-6 text-sm font-medium stroke-slate-700 text-slate-700 ">Action</th>
    
      </tr>
      <tr className="border-b border-slate-200">
        <td className="h-12 px-6 text-sm transition duration-300 border-slate-200 stroke-slate-500 text-slate-500 ">
          <div className="flex items-center gap-4">
            <div className="w-30 h-19  rounded-sm">
                <Image src="/image/pizza-1.png" width={300} height={100} alt='Vacter Image' />
            </div>
            
            </div>
        </td>
        <td className="h-12 px-6 text-sm transition duration-300 border-slate-200 stroke-slate-500 text-slate-500 ">
            <div>
              <h3 className="text-sm font-medium">655512345as452.....</h3>
            </div>
        </td>
        <td className="h-12 px-6 text-sm transition duration-300 border-slate-200 stroke-slate-500 text-slate-500 ">
            <div>
              <h3 className={`text-sm font-medium ${style.div}`}>  Burga pizza  </h3>
            </div>
        </td>
        <td className="h-12 px-6 text-sm transition duration-300 border-slate-200 stroke-slate-500 text-slate-500 ">
          <div>$35.00</div>
        </td>
        <td className="h-12 px-6 text-sm transition duration-300 border-slate-200 stroke-slate-500 text-slate-500 ">
            <div className="flex gap-4">
              <ModalForm />
              <Button size="sm"  className='bg-red-700 border-none hover:bg-red-400 text-white'>Delete</Button>
            </div>
        </td>
      </tr>
      <tr className="border-b border-slate-200">
        <td className="h-12 px-6 text-sm transition duration-300 border-slate-200 stroke-slate-500 text-slate-500 ">
          <div className="flex items-center gap-4">
            <div className="w-30 h-19  rounded-sm">
                <Image src="/image/pizza-1.png" width={300} height={100} alt='Vacter Image' />
            </div>
            
            </div>
        </td>
        <td className="h-12 px-6 text-sm transition duration-300 border-slate-200 stroke-slate-500 text-slate-500 ">
            <div>
              <h3 className="text-sm font-medium">655512345as452.....</h3>
            </div>
        </td>
        <td className="h-12 px-6 text-sm transition duration-300 border-slate-200 stroke-slate-500 text-slate-500 ">
            <div>
              <h3 className={`text-sm font-medium ${style.div}`}>  Burga pizza  </h3>
            </div>
        </td>
        <td className="h-12 px-6 text-sm transition duration-300 border-slate-200 stroke-slate-500 text-slate-500 ">
          <div>$35.00</div>
        </td>
        <td className="h-12 px-6 text-sm transition duration-300 border-slate-200 stroke-slate-500 text-slate-500 ">
            <div className="flex gap-4">
              <ModalForm />
              <Button size="sm"  className='bg-red-700 border-none hover:bg-red-400 text-white'>Delete</Button>
            </div>
        </td>
      </tr>
      <tr className="border-b border-slate-200">
        <td className="h-12 px-6 text-sm transition duration-300 border-slate-200 stroke-slate-500 text-slate-500 ">
          <div className="flex items-center gap-4">
            <div className="w-30 h-19  rounded-sm">
                <Image src="/image/pizza-1.png" width={300} height={100} alt='Vacter Image' />
            </div>
            
            </div>
        </td>
        <td className="h-12 px-6 text-sm transition duration-300 border-slate-200 stroke-slate-500 text-slate-500 ">
            <div>
              <h3 className="text-sm font-medium">655512345as452.....</h3>
            </div>
        </td>
        <td className="h-12 px-6 text-sm transition duration-300 border-slate-200 stroke-slate-500 text-slate-500 ">
            <div>
              <h3 className={`text-sm font-medium ${style.div}`}>  Burga pizza  </h3>
            </div>
        </td>
        <td className="h-12 px-6 text-sm transition duration-300 border-slate-200 stroke-slate-500 text-slate-500 ">
          <div>$35.00</div>
        </td>
        <td className="h-12 px-6 text-sm transition duration-300 border-slate-200 stroke-slate-500 text-slate-500 ">
            <div className="flex gap-4">
              <ModalForm />
              <Button size="sm"  className='bg-red-700 border-none hover:bg-red-400 text-white'>Delete</Button>
            </div>
        </td>
      </tr>
      <tr className="border-b border-slate-200">
        <td className="h-12 px-6 text-sm transition duration-300 border-slate-200 stroke-slate-500 text-slate-500 ">
          <div className="flex items-center gap-4">
            <div className="w-30 h-19  rounded-sm">
                <Image src="/image/pizza-1.png" width={300} height={100} alt='Vacter Image' />
            </div>
            
            </div>
        </td>
        <td className="h-12 px-6 text-sm transition duration-300 border-slate-200 stroke-slate-500 text-slate-500 ">
            <div>
              <h3 className="text-sm font-medium">655512345as452.....</h3>
            </div>
        </td>
        <td className="h-12 px-6 text-sm transition duration-300 border-slate-200 stroke-slate-500 text-slate-500 ">
            <div>
              <h3 className={`text-sm font-medium ${style.div}`}>  Burga pizza  </h3>
            </div>
        </td>
        <td className="h-12 px-6 text-sm transition duration-300 border-slate-200 stroke-slate-500 text-slate-500 ">
          <div>$35.00</div>
        </td>
        <td className="h-12 px-6 text-sm transition duration-300 border-slate-200 stroke-slate-500 text-slate-500 ">
            <div className="flex gap-4">
              <ModalForm />
              <Button size="sm"  className='bg-red-700 border-none hover:bg-red-400 text-white'>Delete</Button>
            </div>
        </td>
      </tr>
      
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
    <tbody>
      <tr className="border-b border-slate-300">
        <th scope="col" className="h-12 px-6 text-sm font-medium stroke-slate-700 text-slate-700 ">Id</th>
        <th scope="col" className="h-12 px-6 text-sm font-medium stroke-slate-700 text-slate-700 ">Customer</th>
        <th scope="col" className="h-12 px-6 text-sm font-medium stroke-slate-700 text-slate-700 ">Total</th>
        <th scope="col" className="h-12 px-6 text-sm font-medium stroke-slate-700 text-slate-700 ">Status</th>
        <th scope="col" className="h-12 px-6 text-sm font-medium stroke-slate-700 text-slate-700 ">Action</th>
        
      </tr>
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