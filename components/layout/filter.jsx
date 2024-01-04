"use client"
import React, { useState, useRef, useEffect } from "react"
import ReactDOM from "react-dom"
import style from "./filter.module.css"
import { IoFilter } from 'react-icons/io5';

export default function Filter({handleAllFilter}) {
  const [isShowing, setIsShowing] = useState(false)
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [price, setPrice] = useState(10)
  
  const wrapperRef = useRef(null)





  useEffect(() => {
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setIsShowing(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [wrapperRef])

  useEffect(() => {
    let html = document.querySelector("html")

    if (html) {
      if (isShowing && html) {
        html.style.overflowY = "hidden"

        const focusableElements =
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'

        const modal = document.querySelector("#modal") // select the modal by it's id

        const firstFocusableElement =
          modal.querySelectorAll(focusableElements)[0] // get first element to be focused inside modal

        const focusableContent = modal.querySelectorAll(focusableElements)

        const lastFocusableElement =
          focusableContent[focusableContent.length - 1] // get last element to be focused inside modal

        document.addEventListener("keydown", function (e) {
          if (e.keyCode === 27) {
            setIsShowing(false)
          }

          let isTabPressed = e.key === "Tab" || e.keyCode === 9

          if (!isTabPressed) {
            return
          }

          if (e.shiftKey) {
            // if shift key pressed for shift + tab combination
            if (document.activeElement === firstFocusableElement) {
              lastFocusableElement.focus() // add focus for the last focusable element
              e.preventDefault()
            }
          } else {
            // if tab key is pressed
            if (document.activeElement === lastFocusableElement) {
              // if focused has reached to last focusable element then focus first focusable element after pressing tab
              firstFocusableElement.focus() // add focus for the first focusable element
              e.preventDefault()
            }
          }
        })

        firstFocusableElement.focus()
      } else {
        html.style.overflowY = "visible"
      }
    }
  }, [isShowing])


  const handleSearch = () => {
    // Perform the search operation with the filter values
    console.log("Search with filters:", {
      price: priceFilter,
      description: descriptionFilter,
      title: titleFilter,
    });
    // Add your logic to fetch and display search results
  };

  useEffect(() => {
    // ... (your existing code)
  }, []);
  return (
    <>
    <div className={style.btn} onClick={() => setIsShowing(true)}>           
    <IoFilter className={style.icon} />
    <button className={style.btn1} >Filter</button>
        </div>
     

      {isShowing && typeof document !== "undefined"
        ? ReactDOM.createPortal(
            <div
              className="fixed top-0 left-0 z-20 flex h-screen w-screen items-center justify-center bg-slate-300/20 backdrop-blur-sm"
              aria-labelledby="header-2a content-2a"
              aria-modal="true"
              tabindex="-1"
              role="dialog"
            >
              {/*    <!-- Modal --> */}
              
              
                
                {/*        <!-- Modal body --> */}
                <div class="m-2 max-w-screen-md flex max-h-[90vh] w-11/12 max-w-md flex-col gap-6 overflow-hidden rounded  p-6 text-slate-500 shadow-xl shadow-slate-700/10" ref={wrapperRef}
                id="modal"
                role="document">
  <div class="rounded-xl border border-gray-200 bg-white p-6 shadow-lg">
    <h2 class="text-stone-700 text-xl font-bold">Apply filters</h2>
    <p class="mt-1 text-sm">Use filters to further refine search</p>
    <div class="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      <div class="flex flex-col">
        <label for="name" class="text-stone-600 text-sm font-medium">Price</label>
        <select id="status" 
          onChange={(e) => setPrice(e.target.value)}
        class="mt-2 block w-full rounded-md border border-gray-200 px-2 py-2 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50">
          <option value={10}>Less than $10</option>
          <option value={20}>20-30</option>
          <option value={40}>40-50</option>
          <option value={50}>above 50</option>
        </select>
      </div>

      <div class="flex flex-col">
        <label for="manufacturer" class="text-stone-600 text-sm font-medium">Description</label>
        <input type="manufacturer" id="manufacturer" placeholder="cheese"
          onChange={(e) => setDescription(e.target.value)}
         class="mt-2 block w-full rounded-md border border-gray-200 px-2 py-2 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50" />
      </div>


      <div class="flex flex-col">
        <label for="status" class="text-stone-600 text-sm font-medium">Title</label>

        <select id="status"
          onChange={(e) => setTitle(e.target.value)}
         class="mt-2 block w-full rounded-md border border-gray-200 px-2 py-2 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50">
          <option value={"pizza"}>Pizza</option>
          <option value={"seafood"}>SeaFood</option>
          <option value={"cheese"}>Cheese</option>
          <option value={"burger"}>Burger</option>
        </select>
      </div>
    </div>

    <div class="mt-6 grid w-full grid-cols-2 justify-end space-x-4 md:flex">
      <button class="active:scale-95 rounded-lg bg-gray-200 px-8 py-2 font-medium text-gray-600 outline-none focus:ring hover:opacity-90" onClick={() => {
                    setPrice(0);
                    setDescription("");
                    setTitle("");
                    
                  }}>Reset</button>
      <button 
       onClick={() => {
        handleAllFilter(price, title, description);
        setIsShowing(false);
      }} 
      class="active:scale-95 rounded-lg bg-blue-600 px-8 py-2 font-medium text-white outline-none focus:ring hover:opacity-90"  >Search</button>
    </div>
  </div>
</div>

              </div>
            ,
            document.body
          )
        : null}
    </>
  )
}
