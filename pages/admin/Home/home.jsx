"use client"
import { Button } from '@nextui-org/button'
import Image from 'next/image'
import React from 'react'
import style from './home.module.css'
import ModalForm from '../editpizza/editpizza';
import axios from 'axios'
import { toast } from 'react-hot-toast'
import { useState } from 'react'
import {  Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import { useContext } from 'react'
import { ProductContext } from '@/app/context/store';



const Home = () => {
  const { pizza, setPizza } = useContext(ProductContext);
  const [deletePizzaId, setDeletePizzaId] = useState(null);
  const [openConfirmationModal, setOpenConfirmationModal] = useState(false);

  const handleDelete = (id) => {
    setDeletePizzaId(id);
    setOpenConfirmationModal(true);
  };

  const handleCloseConfirmationModal = () => {
    setOpenConfirmationModal(false);
  };

  const confirmDelete = async () => {
    if (deletePizzaId) {
      try {
        await axios.delete(`api/user/product/${deletePizzaId}`);
        setPizza(pizza.filter((pizza) => pizza._id !== deletePizzaId));
        setDeletePizzaId(null);
        setOpenConfirmationModal(false);
        toast.success('Data deleted successfully');
      } catch (error) {
        console.error('Error deleting Product:', error);
      }
    }
  };

  

  return (
    <>
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
      {pizza.map((pizza) => (
          <Trpizza key={pizza.id} pizza={pizza} handleDelete={handleDelete} />
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

      {/* Confirmation Modal */}
      <Dialog open={openConfirmationModal} onClose={handleCloseConfirmationModal}>
        <DialogTitle>Confirm Deletion</DialogTitle>
        <DialogContent>
          <DialogContentText>Are you sure you want to delete this Product?</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseConfirmationModal} color="primary">
            Cancel
          </Button>
          <Button onClick={confirmDelete} color="danger">
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
      {/* Confirmation Modal */}

    </>
  )
}

export default Home

function Trpizza({ pizza, handleDelete }) {
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
          <Button size="sm" className='bg-red-700 border-none hover:bg-red-400 text-white' onClick={() => handleDelete(pizza._id)}>
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