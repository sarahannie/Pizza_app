"use client"
import React from 'react';
import {AiFillFacebook, AiFillTwitterSquare} from 'react-icons/ai'
import {FaPinterestSquare, FaInstagramSquare} from 'react-icons/fa'
import {Button} from "@nextui-org/button";

const Footer = () => {
  return (
    <div className="bg-[#fffaee]">
  <div className="max-w-screen-xl   px-4 sm:px-6  text-gray-800 flex flex-wrap justify-center flex justify-between">
    <div className="p-5">
      <div className="text-xl uppercase text-gray-700 font-medium">Information</div>
      <a className="my-3 block text-gray-400" href="/#">
        Home 
      </a>
      <a className="my-3 block text-gray-400" href="/#">
        Blog 
      </a>
      <a className="my-3 block text-gray-400" href="/#">
        About Us 
      </a>
      <a className="my-3 block text-gray-400" href="/#">
        Menu 
      </a>
      <a className="my-3 block text-gray-400" href="/#">
        contact us 
      </a>
    </div>
    <div className="p-5 px-[50px]">
      <div className="text-xl uppercase text-gray-700 font-medium">
        TOP ITEMS 
      </div>
      <a className="my-3 block text-gray-400" href="/#">
        pepperoni <span className="text-gray-400 text-xs p-1" />
      </a>
      <a className="my-3 block text-gray-400" href="/#">
        Swiss Mushroom <span className="text-gray-400 text-xs p-1" />
      </a>
      <a className="my-3 block text-gray-400" href="/#">
        Barbeque Chicken 
      </a>
      <a className="my-3 block text-gray-400" href="/#">
        vegeterian 
      </a>
      <a className="my-3 block text-gray-400" href="/#">
        Ham & Cheese
      </a>
      
    </div>
    <div className="p-5 pl-10">
      <div className="text-xl uppercase text-gray-700 font-medium">OTHERS</div>
      <a className="my-3 block text-gray-400" href="/#">
        Checkout 
      </a>
      <a className="my-3 block text-gray-400" href="/#">
        Cart
      </a>
      <a className="my-3 block text-gray-400" href="/#">
        Products 
        </a>
      <a className="my-3 block text-gray-400" href="/#">
       locations  
      </a>
      <a className="my-3 block text-gray-400" href="/#">
      Legal  
      </a>
    </div>
    <div className="pt-5 pb-5 pl-10 flex flex-col flex-end">
      <div className="text-xl uppercase text-gray-700 font-medium">
       Social Media
      </div>
      <a className="my-3 flex gap-3" href="/#">
        <AiFillFacebook color='#3c57a3' fontSize={40}/>
        <FaPinterestSquare color='#cb292b' fontSize={40}/>
        <AiFillTwitterSquare color='#2daae2' fontSize={40} />
        <FaInstagramSquare color='#e24934' fontSize={40} />
        <span className="text-teal-600 text-xs p-1" />
      </a>
      <a className="my-3 block text-gray-400" href="/#">
        Signup and get exclusive offers and coupon codes
        
      </a>
      <a className="my-3 block text-gray-400" href="/#">
      <Button size="md" className="bg-[#f9b202] text-white shadow-lg">
        SIGNUP
      </Button> 
      </a>
    </div>
  </div>
</div>
  )
}

export default Footer