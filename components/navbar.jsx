"use client"
import { AiOutlineSearch, AiOutlineShoppingCart } from "react-icons/ai";
import { Button } from "@nextui-org/button";
import { signOut, useSession } from "next-auth/react";

import { useState } from "react";
import Image from "next/image";
import style from './navbar.module.css';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import Link from "next/link";


export const Authlink = ({status}) =>{
  console.log(status)
  if(status === 'authenticated'){
    return (
      <Button onClick={() =>signOut()} size="sm" className="hidden lg:block bg-[#fbb200] text-white m-x-3">Logout</Button>
    )
  }
  if(status === 'unauthenticated'){
    return (
      <Link href="/login">
        <Button size="sm" className="hidden lg:block bg-[#fbb202] text-white m-x-3">Login</Button>
      </Link>
    )
  }
}



export const Navbar = () => {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const session = useSession();
  console.log('Session:', session);
  const status = session?.status;
  console.log('Session:', status);
  

  const logout = async() => {
    try{
       await axios.get('/api/user/logout');
        toast.success("Logout successful");
        router.push("/login");
    }catch(error){
      console.log(error)
      toast.error("Something went wrong. Please try again.");
    }
  }




  const toggleMenu = () => {
    setOpen(!open);
  };

  return (
    <nav className="bg-white sticky  top-0 border-gray-200 py-2.5 dark:bg-gray-900 z-20">
      <div className="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto">
        <a href="#" className="flex items-center">
          <Image
            src="/image/logo.png"
            width={35}
            height={40}
            className=" ml-5 "
            alt="Landwind Logo"
          />

        </a>
        <div className="flex items-center gap-10  lg:order-2">
          <div className="hidden mt-2  sm:inline-block">
            <span />
          </div>
          
          <AiOutlineSearch fontSize={20} />

          <div style={{ position: 'relative' }}>
          <Link href='/cart'>
          <AiOutlineShoppingCart className="relative" color="#0770fc" fontSize={20} />
            <span className="inline-flex items-center justify-center gap-1 rounded-full bg-[#d43b49] px-1.5 text-sm text-white absolute top-[-12px] right-[-6px]">
              7
              <span className="sr-only">new items in the cart</span>
            </span>
          </Link>
           
          </div>

          <button
            onClick={toggleMenu}
            type="button"
            className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover-bg-gray-700 dark:focus-ring-gray-600"
            aria-controls="mobile-menu-2"
            aria-expanded={open ? 'true' : 'false'}
          >
            <span className="sr-only">{open ? 'Close main menu' : 'Open main menu'}</span>
            <svg
              className={`w-6 h-6 ${open ? 'hidden' : ''}`}
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              />
            </svg>
            <svg
              className={`w-6 h-6 ${open ? '' : 'hidden'}`}
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          <Authlink status={status} />
        </div>
        <div
          className={`items-center justify-between xs:w-1/2 border-l lg:ml-[50px] lg:flex lg:w-0 lg:order-1 ${open ? 'block' : 'hidden'}`}
          id="mobile-menu-2"
        >
          <ul className=" bg-white flex flex-col xs:absolute top-10 left-0  mt-4 font-medium lg:flex-row lg:space-x-8 lg:gap-4 lg:mt-0">
          {/* <ul className={`absolute top-0 left-0 z-[-1] h-[28.5rem] lg:w-full justify-center overflow-hidden  overflow-y-auto overscroll-contain  px-8 pb-12 pt-24 font-medium lg:transition-[opacity,visibility] duration-300 lg:visible lg:relative lg:top-0  lg:z-0 lg:flex lg:h-full lg:w-auto lg:items-stretch lg:overflow-visible lg:bg-white/0 lg:px-0 lg:py-0  lg:pt-0 lg:opacity-100 ${
                open
                  ? `visible transform translate-r-full transition-transformn duration-300  opacity-1 bg-violent  w-[50%]  `
                  : "invisible opacity-0"
              }`}> */}
            <li>
              <a
                href="/"
                className={`block py-2  pl-3 pr-4 text-white bg-purple-700 rounded lg:bg-transparent lg:text-[#ec1900] lg:p-0 dark:text-white ${style.list}`}
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/product"
                className={`block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover-bg-transparent lg:border-0 lg:hover-text-purple-700 lg:p-0 dark:text-gray-400 lg:dark-hover-text-white dark-hover-bg-gray-700 dark-hover-text-white lg:dark-hover-bg-transparent dark-border-gray-700 ${style.list}`}
              >
                Products
              </a>
            </li>
            <li>
              <a
                href="#"
                className={`block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover-bg-transparent lg:border-0 lg:hover-text-purple-700 lg:p-0 dark:text-gray-400 lg:dark-hover-text-white dark-hover-bg-gray-700 dark-hover-text-white lg:dark-hover-bg-transparent dark-border-gray-700 ${style.list}`}
              >
                Pages
              </a>
            </li>
            <li>
              <a
                href="/blog"
                className={`block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover-bg-transparent lg:border-0 lg:hover-text-purple-700 lg:p-0 dark:text-gray-400 lg:dark-hover-text-white dark-hover-bg-gray-700 dark-hover-text-white lg:dark-hover-bg-transparent dark-border-gray-700 ${style.list}`}
              >
                Blog
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className={`block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover-bg-transparent lg:border-0 lg:hover-text-purple-700 lg:p-0 dark:text-gray-400 lg:dark-hover-text-white dark-hover-bg-gray-700 dark-hover-text-white lg:dark-hover-bg-transparent dark-border-gray-700 ${style.list}`}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
