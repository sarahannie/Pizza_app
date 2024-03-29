"use client";
import { Button } from "@nextui-org/button";
import Image from "next/image";
import React, { useState, useRef, useEffect } from "react";
import ReactDOM from "react-dom";
import { toast } from 'react-hot-toast';
import { useRouter } from 'next/navigation';


const ModalForm = ({pizza}) => {
  const router = useRouter()
  const [isShowing, setIsShowing] = useState(false);
  const wrapperRef = useRef(null);

  const [price, setPrice] = useState({
    small:  0,
    medium: 0,
    large: 0,
  });
 
  const [image, setImage] = useState(" ");
  const [product, setProduct] = useState({
    title: '',
    description: '',
    image:'',
    price: {
      small: Number(price.small),
      medium: Number(price.medium),
      large: Number(price.large),
    },
    extra: {
    item: "",
    item2: "",
    price: "",
    },
   });

  

 

   const handleEditProduct = async (pizza) => {
    try {
     const response = await fetch(`/api/user/product/${pizza}`);
     if (!response.ok) {
       throw new Error(`HTTP error! status: ${response.status}`);
     }
     const productData = await response.json();
     setProduct(productData);
    } catch (error) {
     console.error(`Error: ${error}`);
    }
   };


  async function handleFileChange(ev) {
    const files = ev.target.files;
    if (files?.length === 1) {
      const data = new FormData();
      data.set('file', files[0]);
  
      try {
        const response = await fetch('/api/upload', {
          method: 'POST',
          body: data,
        });
  
        if (response.ok) {
          const link = await response.json();
          setProduct({ ...product, image: link });
          toast.success('Image uploaded successfully');
        } else {
          throw new Error('Something went wrong');
        }
      
      } catch (error) {
        console.error('Error during file upload:', error);
    }
  }}

  const handleInputChange = (e, size) => {
    const {value} = e.target;
    setProduct((prevPrice) => ({
      ...prevPrice,
      price: {
        ...prevPrice?.price,
        [size]: value,
      }
    }));
  };

  const handleExtraChange = (e, name) => {
    const { value } = e.target;
    setProduct(prevProduct => ({
      ...prevProduct,
      extra: {
        ...prevProduct?.extra,
        [name]: value
      }
    }));
  };
  

  
  


  async function handleProduct(ev){
    ev.preventDefault();
    const productId = pizza

    const formData = new FormData();
    formData.set('file', image);

    try {
      const responsePromise = fetch(`/api/user/product/${productId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'multipart/form-data' },
        body: JSON.stringify(product)
      });
 
      await toast.promise(responsePromise, {
        loading: 'Updating...',
        success: 'Profile updated!',
        error: 'Error',
      });
 
      const response = await responsePromise;
 
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const imageData = await response.json();
      setProduct(imageData);
      router.push('/adminproduct')
    } catch (error) {
      console.error(`Fetch error: ${error.message}`);
    }
 }
 

  useEffect(() => {
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target )) {
        setIsShowing(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [wrapperRef]);

  

  useEffect(() => {
    let html = document.querySelector("html") ;

    if (html) {
      if (isShowing && html) {
        html.style.overflowY = "hidden";

        const focusableElements =
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';

        const modal = document.querySelector("#modal") ; 

        const firstFocusableElement =
          modal.querySelectorAll(focusableElements)[0] ;

        const focusableContent = modal.querySelectorAll(focusableElements);

        const lastFocusableElement =
          focusableContent[focusableContent.length - 1]; 

        document.addEventListener("keydown", function (e) {
          if (e.keyCode === 27) {
            setIsShowing(false);
          }

          let isTabPressed = e.key === "Tab" || e.keyCode === 9;

          if (!isTabPressed) {
            return;
          }

          if (e.shiftKey) {
            if (document.activeElement === firstFocusableElement) {
              lastFocusableElement.focus(); 
              e.preventDefault();
            }
          } else {
        
            if (document.activeElement === lastFocusableElement) {
              firstFocusableElement.focus(); 
              e.preventDefault();
            }
          }
        });

        firstFocusableElement.focus();
      } else {
        html.style.overflowY = "visible";
      }
    }
  }, [isShowing]);


  return (
    <>
    <Button onClick={() =>{ 
      setIsShowing(true) 
      handleEditProduct(pizza)
      }} size="sm" className='bg-green-700 border-none hover:bg-green-400 text-white'>Edit</Button>
     

      {isShowing && typeof document !== "undefined"
        ? ReactDOM.createPortal(
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
                  <h3 className="flex-1 text-lg font-medium text-slate-700">
                   Add New Pizza 
                  </h3>
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
                        <desc id="desc-79">
                          A more detailed description of the icon
                        </desc>
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </span>
                  </button>
                </header>
                {/* Modal body */}
                <form    
                onSubmit={handleProduct}
                >
                <div id="content-4a" className="flex-1">
                  <div className="flex flex-col gap-6">
                    {/* Input field */}
                    <div className="relative">
                      <label htmlFor="id-b03" className="mb-3">
                        Choose Pizza Image
                      </label>
                      <Image src={product.image} alt='product_image' width={30} height={30}/>
                      <input
                        id="id-b03"
                        type="file"
                        name="image"
                        placeholder="your name"
                        className="h-8 w-full border border-slate-200 rounded-md text-black"
                        onChange={e => handleFileChange(e)}
                     
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
                        className="peer relative h-10 w-full rounded border border-slate-200 px-4 text-sm text-black outline-none transition-all autofill:bg-white invalid:border-pink-500 focus:border-emerald-500 focus:outline-none invalid:focus:border-pink-500 disabled:cursor-not-allowed disabled:bg-slate-50 "
                        onChange={e => setProduct({...product, title: e.target.value})}
                        value={product.title || ''}  
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
                        // onChange={(e) => setDescription(e.target.value)}
                        onChange={e => setProduct({...product, description: e.target.value})}
                        value={product.description  || '' }
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
                        value={product.price.small  || ''} onChange={(e) => handleInputChange(e, 'small')}
                      />
                      <input
                      
                        id="id-b03"
                        type="text"
                        name="price.medium"
                        placeholder="Enter Medium Price"
                        className=" peer relative h-10 w-full rounded border border-slate-200 px-4 text-sm text-black  outline-none transition-all autofill:bg-white invalid:border-pink-500 focus:border-emerald-500 focus:outline-none invalid:focus:border-pink-500 disabled:cursor-not-allowed disabled:bg-slate-50 mt-3"
                        value={product.price.medium  || ''} onChange={(e) => handleInputChange(e, 'medium')}
                      />
                      <input
                      
                        id="id-b03"
                        type="text"
                        name="price.large"
                        placeholder=" Enter Large Price"
                        className=" peer relative h-10 w-full rounded border border-slate-200 px-4 text-sm text-black  outline-none transition-all autofill:bg-white invalid:border-pink-500 focus:border-emerald-500 focus:outline-none invalid:focus:border-pink-500 disabled:cursor-not-allowed disabled:bg-slate-50 mt-3"
                        value={product.price.large || ''} onChange={(e) => handleInputChange(e, 'large')}
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
                        value={product.extra.item || ''} onChange={(e) => handleExtraChange(e, 'item')}
                      />
                      <input
                    
                        id="id-b03"
                        type="text"
                        name="extra.item2"
                        placeholder="Enter extra item two"
                        className=" peer relative h-10 w-full rounded border border-slate-200 px-4 text-sm text-black  outline-none transition-all autofill:bg-white invalid:border-pink-500 focus:border-emerald-500 focus:outline-none invalid:focus:border-pink-500 disabled:cursor-not-allowed disabled:bg-slate-50 mt-3"
                        value={product.extra.item2 || ''} onChange={(e) => handleExtraChange(e, 'item2')}
                      />
                      <input
                       
                        id="id-b03"
                        type="text"
                        name="extra.price"
                        placeholder="Enter extra price"
                        className=" peer relative h-10 w-full rounded border border-slate-200 px-4 text-sm text-black  outline-none transition-all autofill:bg-white invalid:border-pink-500 focus:border-emerald-500 focus:outline-none invalid:focus:border-pink-500 disabled:cursor-not-allowed disabled:bg-slate-50 mt-3 mb-5"
                        value={product.extra.price || ''} onChange={(e) => handleExtraChange(e, 'price')}
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
                    Update Pizza
                  </Button>
                </div>
              </form>
              </div>
            </div>,
            document.body
          )
        : null}
    </>
  );
};

export default ModalForm;

