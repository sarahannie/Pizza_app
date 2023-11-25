"use client";
import { Button } from "@nextui-org/button";
import { Textarea } from "@nextui-org/input";
import React, { useState, useRef, useEffect } from "react";
import ReactDOM from "react-dom";
import style from './getpizza.module.css'

interface ModalFormProps {
  // Add any props if needed
}

const ModalForm: React.FC<ModalFormProps> = () => {
  const [isShowing, setIsShowing] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setIsShowing(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [wrapperRef]);

  useEffect(() => {
    let html = document.querySelector("html") as HTMLHtmlElement;

    if (html) {
      if (isShowing && html) {
        html.style.overflowY = "hidden";

        const focusableElements =
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';

        const modal = document.querySelector("#modal") as HTMLElement; // select the modal by its id

        const firstFocusableElement =
          modal.querySelectorAll(focusableElements)[0] as HTMLElement; // get the first element to be focused inside the modal

        const focusableContent = modal.querySelectorAll(focusableElements);

        const lastFocusableElement =
          focusableContent[focusableContent.length - 1] as HTMLElement; // get the last element to be focused inside the modal

        document.addEventListener("keydown", function (e: KeyboardEvent) {
          if (e.keyCode === 27) {
            setIsShowing(false);
          }

          let isTabPressed = e.key === "Tab" || e.keyCode === 9;

          if (!isTabPressed) {
            return;
          }

          if (e.shiftKey) {
            // if shift key is pressed for shift + tab combination
            if (document.activeElement === firstFocusableElement) {
              lastFocusableElement.focus(); // add focus for the last focusable element
              e.preventDefault();
            }
          } else {
            // if tab key is pressed
            if (document.activeElement === lastFocusableElement) {
              // if focus has reached the last focusable element then focus the first focusable element after pressing tab
              firstFocusableElement.focus(); // add focus for the first focusable element
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
    <Button onClick={() => setIsShowing(true)} size="sm" className={style.btn}>Add New Pizza</Button>
     

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
                <div id="content-4a" className="flex-1">
                  <div className="flex flex-col gap-6">
                    {/* Input field */}
                    <div className="relative">
                    <label
                        htmlFor="id-b03"
                        className="mb-3"
                      >
                        Choose Pizza Image
                      </label>
                      <input
                        id="id-b03"
                        type="file"
                        name="id-b03"
                        placeholder="your name"
                        className="h-8 w-full border border-slate-200 rounded-md "
                        // peer relative h-10 w-full rounded border border-slate-200 px-4 text-sm text-slate-500 placeholder-transparent outline-none transition-all autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-emerald-500 focus:outline-none invalid:focus:border-pink-500 disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400
                      />
                     
                    </div>
                    <div className="relative">
                    <label
                        htmlFor="id-b03"
                        className="pb-3"
                      >
                        Pizza Title
                      </label>
                      <input
                        id="id-b03"
                        type="text"
                        name="id-b03"
                        placeholder="your name"
                        className=" peer relative h-10 w-full rounded border border-slate-200 px-4 text-sm text-slate-500 placeholder-transparent outline-none transition-all autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-emerald-500 focus:outline-none invalid:focus:border-pink-500 disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
                        
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
                        
                        name="id-b03"
                        placeholder="your name"
                        className=" peer relative h-30 w-full rounded border border-slate-200 px-4 text-sm text-slate-500 placeholder-transparent outline-none transition-all autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-emerald-500 focus:outline-none invalid:focus:border-pink-500 disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
                        
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
                        name="id-b03"
                        placeholder="Small"
                        className=" peer relative h-10 w-full rounded border border-slate-200 px-4 text-sm text-slate-500 placeholder-transparent outline-none transition-all autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-emerald-500 focus:outline-none invalid:focus:border-pink-500 disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400 mt-2"
                        
                      />
                      <input
                        id="id-b03"
                        type="text"
                        name="id-b03"
                        placeholder="Medium"
                        className=" peer relative h-10 w-full rounded border border-slate-200 px-4 text-sm text-slate-500 placeholder-transparent outline-none transition-all autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-emerald-500 focus:outline-none invalid:focus:border-pink-500 disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400 mt-2 text-black"
                        
                      />
                      <input
                        id="id-b03"
                        type="text"
                        name="id-b03"
                        placeholder="large"
                        className=" peer relative h-10 w-full rounded border border-slate-200 px-4 text-sm text-slate-500 placeholder-transparent outline-none transition-all autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-emerald-500 focus:outline-none invalid:focus:border-pink-500 disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400 mb-6 mt-2"
                        
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
                        name="id-b03"
                        placeholder="Item"
                        className=" peer relative h-10 w-full rounded border border-slate-200 px-4 text-sm text-slate-500 placeholder-transparent outline-none transition-all autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-emerald-500 focus:outline-none invalid:focus:border-pink-500 disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400 mt-2"
                        
                      />
                      <input
                        id="id-b03"
                        type="text"
                        name="id-b03"
                        placeholder="Price"
                        className=" peer relative h-10 w-full rounded border border-slate-200 px-4 text-sm text-slate-500 placeholder-transparent outline-none transition-all autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-emerald-500 focus:outline-none invalid:focus:border-pink-500 disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400 mt-2 text-black"
                        
                      />
                      <input
                        id="id-b03"
                        type="text"
                        name="id-b03"
                        placeholder="Add"
                        className=" peer relative h-10 w-full rounded border border-slate-200 px-4 text-sm text-slate-500 placeholder-transparent outline-none transition-all autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-emerald-500 focus:outline-none invalid:focus:border-pink-500 disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400 mb-6 mt-2"
                        
                      />
                     
                    </div>
                    
                  </div>
                </div>
                {/* Modal actions */}
                <div className="flex justify-end gap-2">
                    <Button size="md"  className='bg-gray-500 border-none hover:bg-gray-200 text-white' >Close</Button>
                    <Button size="md" className='bg-blue-500 border-none hover:bg-blue-200 text-white'>Create Pizza</Button>
                </div>
              </div>
            </div>,
            document.body
          )
        : null}
    </>
  );
};

export default ModalForm;

