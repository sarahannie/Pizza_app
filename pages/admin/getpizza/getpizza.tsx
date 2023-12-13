"use client";
import React, { useState, useRef, useEffect, useReducer } from 'react';
import ReactDOM from 'react-dom';
import { Button } from '@nextui-org/button';
import { Textarea } from '@nextui-org/input';
import { toast } from 'react-hot-toast';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { writeFile } from 'fs/promises';
import {join} from 'path'

import style from './getpizza.module.css';
import { pid } from 'process';

interface ModalFormProps {}

const formReducer = (state: any, event: any) => {
  return {
    ...state,
    [event.target.field]: event.target.value,
  };
};

// const formReducer = (state, action) => {
//   switch (action.type) {
//     case 'UPDATE_FIELD':
//       return { ...state, [action.field]: action.value };
//     // Handle other actions if needed
//     default:
//       return state;
//   }
// };


type PriceType = {
  small: number;
  medium: number;
  large: number;
};
type ExtraType = {
  item: string;
  item2: string;
  price: number;
}

const ModalForm: React.FC<ModalFormProps> = () => {
  const router = useRouter();
  const [isShowing, setIsShowing] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState<PriceType>({
    small: 0,
    medium: 0,
    large: 0,
  });
  const [extra, setExtra] = useState({
    item: "",
    item2: "",
    price: "",
  })
  const [image, setImage] = useState<File | undefined>(undefined);
 
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, size: keyof PriceType) => {
    
    const value = e.target.value;
    setPrice((prevPrice) => ({
      ...prevPrice,
      [size]: value,
    }));
  };

  const handleExtraChange = (e: React.ChangeEvent<HTMLInputElement>, name: keyof ExtraType) => {
    const {  value } = e.target;
    setExtra((prevExtra) => ({
      ...prevExtra,
      [name]: value,
    }));
  }

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    setImage(selectedFile);
  };


  const postPizza = async (e:any) => {
    e.preventDefault();
    console.log(image);
    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("price.small", String(price.small));
    formData.append("price.medium", String(price.medium));
    formData.append("price.large", String(price.large));
    formData.append("extra.item", extra.item);
    formData.append("extra.item2", extra.item2);
    formData.append("extra.price", extra.price);
    formData.append("image", image as File);

    const api = "api/user/product";
    console.log(formData)
    try{
      const response = await axios.post(api, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log(response.data);
      toast.success("Product added successfully");
      // router.push("/adminproduct");
    }catch(error:any){
      if (error.response) {
        alert(error);
        console.log(error.response.data);
        console.log(error.response.status);
      } else if (error.request) {
        // The request was made but no response was received
        console.log(error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.log("Error", error.message);
        toast.error("Something went wrong. Please try again");
      }
    }
  }

 
 


 
  


  // const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  //   event.preventDefault();
  //   if (Object.keys(formState).length === 0) {
  //     console.log("You don't have to do anything in your form");
  //   } else {
  //     console.log(formState);
  //     postPizza();
  //   }
  // };

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setIsShowing(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [wrapperRef]);

  useEffect(() => {
    let html = document.querySelector('html') as HTMLHtmlElement;

    if (html) {
      if (isShowing && html) {
        html.style.overflowY = 'hidden';
      } else {
        html.style.overflowY = 'visible';
      }
    }
  }, [isShowing]);

  return (
    <>
      <Button onClick={() => setIsShowing(true)} size="sm" className={style.btn}>
        Add New Pizza
      </Button>

      {isShowing && typeof document !== 'undefined' ? (
        ReactDOM.createPortal(
          <div
            className="fixed top-0 left-0 z-40 flex h-screen w-screen items-center justify-center bg-slate-300/20 backdrop-blur-sm"
            aria-labelledby="header-4a content-4a"
            aria-modal="true"
            tabIndex={-1}
            role="dialog"
          >
            {/* Modal */}
            <div
              ref={wrapperRef}
              className="flex max-h-[90vh] max-w-sm flex-col gap-4 overflow-hidden overflow-y-auto rounded bg-white p-6 text-slate-500 shadow-xl shadow-slate-700/10"
              id="modal"
              role="document"
            >
              {/* Modal header */}
              <header id="header-4a" className="flex items-center">
                <h3 className="flex-1 text-lg font-medium text-slate-700">Add New Pizza</h3>
                <button
                  onClick={() => setIsShowing(false)}
                  className="inline-flex h-10 items-center justify-center gap-2 justify-self-center whitespace-nowrap rounded-full px-5 text-sm font-medium tracking-wide transition duration-300 hover:text-emerald-600 focus:bg-emerald-200 focus:text-emerald-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:text-emerald-300 disabled:shadow-none disabled:hover:bg-transparent"
                  aria-label="close dialog"
                >
                  <span className="relative only:-mx-5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      role="graphics-symbol"
                      aria-labelledby="title-79 desc-79"
                    >
                      <title id="title-79">Icon title</title>
                      <desc id="desc-79">A more detailed description of the icon</desc>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </span>
                </button>
              </header>
              {/* Modal body */}
              <form    
                onSubmit={postPizza}
                encType="multipart/form-data">
                <div id="content-4a" className="flex-1">
                  <div className="flex flex-col gap-6">
                    {/* Input field */}
                    <div className="relative">
                      <label htmlFor="id-b03" className="mb-3">
                        Choose Pizza Image
                      </label>
                      <input
                        id="id-b03"
                        type="file"
                        name="Image"
                        placeholder="your name"
                        className="h-8 w-full border border-slate-200 rounded-md text-black"
                        onChange={handleImageChange} 
                      />
                    </div>
                    <div className="relative">
                      <label htmlFor="id-b03" className="pb-3">
                        Pizza Title
                      </label>
                      <input
                       
                        id="id-b03"
                        type="text"
                        name="title"
                        placeholder="Enter Pizza Title"
                        className="peer relative h-10 w-full rounded border border-slate-200 px-4 text-sm text-black  outline-none transition-all autofill:bg-white invalid:border-pink-500 focus:border-emerald-500 focus:outline-none invalid:focus:border-pink-500 disabled:cursor-not-allowed disabled:bg-slate-50 "
                        onChange={(e) => setTitle(e.target.value)}
                      />
                    </div>
                   
                    <div className="relative">
                    <label
                        htmlFor="id-b03"
                        className="pb-3"
                      >
                        Pizza Description
                      </label>
                      <textarea
                       
                        id="id-b03"
                        rows={5}
                        cols={30}
                        name="description"
                        placeholder="Enter Pizza Description"
                        className=" peer relative h-30 w-full rounded border border-slate-200 px-4 text-sm text-black  outline-none transition-all autofill:bg-white invalid:border-pink-500 focus:border-emerald-500 focus:outline-none invalid:focus:border-pink-500 disabled:cursor-not-allowed disabled:bg-slate-50"
                        onChange={(e) => setDescription(e.target.value)}
                      />
                     
                    </div>
                    <div className="relative">
                    <label
                        htmlFor="id-b03"
                        className="pb-3"
                      >
                        Pizza Prices
                      </label>
                      <input
                       
                        id="id-b03"
                        type="text"
                        name="price.small"
                        placeholder="Enter Small Price"
                        className="peer relative h-10 w-full rounded border border-slate-200 px-4 text-sm text-black  outline-none transition-all autofill:bg-white invalid:border-pink-500 focus:border-emerald-500 focus:outline-none invalid:focus:border-pink-500 disabled:cursor-not-allowed disabled:bg-slate-50 mt-3"
                        value={price.small} onChange={(e) => handleInputChange(e, 'small')}
                      />
                      <input
                      
                        id="id-b03"
                        type="text"
                        name="price.medium"
                        placeholder="Enter Medium Price"
                        className=" peer relative h-10 w-full rounded border border-slate-200 px-4 text-sm text-black  outline-none transition-all autofill:bg-white invalid:border-pink-500 focus:border-emerald-500 focus:outline-none invalid:focus:border-pink-500 disabled:cursor-not-allowed disabled:bg-slate-50 mt-3"
                        value={price.medium} onChange={(e) => handleInputChange(e, 'medium')}
                      />
                      <input
                      
                        id="id-b03"
                        type="text"
                        name="price.large"
                        placeholder=" Enter Large Price"
                        className=" peer relative h-10 w-full rounded border border-slate-200 px-4 text-sm text-black  outline-none transition-all autofill:bg-white invalid:border-pink-500 focus:border-emerald-500 focus:outline-none invalid:focus:border-pink-500 disabled:cursor-not-allowed disabled:bg-slate-50 mt-3"
                        value={price.large} onChange={(e) => handleInputChange(e, 'large')}
                      />
                     
                    </div>

                    <div className="relative">
                    <label
                        htmlFor="id-b03"
                        className="pb-3"
                      >
                        Extra
                      </label>
                      <input
                     
                        id="id-b03"
                        type="text"
                        name="extra.item"
                        placeholder="Enter extra item one"
                        className=" peer relative h-10 w-full rounded border border-slate-200 px-4 text-sm text-black  outline-none transition-all autofill:bg-white invalid:border-pink-500 focus:border-emerald-500 focus:outline-none invalid:focus:border-pink-500 disabled:cursor-not-allowed disabled:bg-slate-50 mt-3"
                        value={extra.item} onChange={(e) => handleExtraChange(e, 'item')}
                      />
                      <input
                    
                        id="id-b03"
                        type="text"
                        name="extra.item2"
                        placeholder="Enter extra item two"
                        className=" peer relative h-10 w-full rounded border border-slate-200 px-4 text-sm text-black  outline-none transition-all autofill:bg-white invalid:border-pink-500 focus:border-emerald-500 focus:outline-none invalid:focus:border-pink-500 disabled:cursor-not-allowed disabled:bg-slate-50 mt-3"
                        value={extra.item2} onChange={(e) => handleExtraChange(e, 'item2')}
                      />
                      <input
                       
                        id="id-b03"
                        type="text"
                        name="extra.price"
                        placeholder="Enter extra price"
                        className=" peer relative h-10 w-full rounded border border-slate-200 px-4 text-sm text-black  outline-none transition-all autofill:bg-white invalid:border-pink-500 focus:border-emerald-500 focus:outline-none invalid:focus:border-pink-500 disabled:cursor-not-allowed disabled:bg-slate-50 mt-3 mb-5"
                        value={extra.price} onChange={(e) => handleExtraChange(e, 'price')}
                      />
                     
                    </div>
                    {/* Add other input fields as needed */}
                  </div>
                </div>
                {/* Modal actions */}
                <div className="flex justify-end gap-2">
                  <Button size="md" className="bg-gray-500 border-none hover:bg-gray-200 text-white">
                    Close
                  </Button>
                  <Button size="md" className="bg-blue-500 border-none hover:bg-blue-200 text-white" type="submit">
                    Create Pizza
                  </Button>
                </div>
              </form>
            </div>
          </div>,
          document.body
        )
      ) : null}
    </>
  );
};

export default ModalForm;
