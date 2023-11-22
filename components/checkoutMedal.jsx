"use client"
import React, { useState, useRef, useEffect } from "react"
import ReactDOM from "react-dom"
import useTheme from "react"
import Link from "next/link"
import style from "./checkoutmedal.module.css"

export default function ModalBasic() {

  
      
  const [isShowing, setIsShowing] = useState(false)

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

  return (
    <>
      <button
        className={style.btn}
        onClick={() => setIsShowing(true)}
      >
        <span>CASH ON DELIVERY</span>
      </button>

      {isShowing && typeof document !== "undefined"
        ? ReactDOM.createPortal(
            <div
              className="fixed top-0 left-0 z-20 flex h-screen w-screen items-center justify-center bg-slate-300/20 backdrop-blur-sm"
              aria-labelledby="header-3a content-3a"
              aria-modal="true"
              tabindex="-1"
              role="dialog"
            >
              {/*    <!-- Modal --> */}
              <div
                ref={wrapperRef}
                className="flex max-h-[90vh] overflow-y-auto w-11/12 max-w-xl flex-col gap-6 overflow-hidden rounded bg-white p-6 text-slate-500 shadow-xl shadow-slate-700/10"
                id="modal"
                role="document"
              >
                {/*        <!-- Modal header --> */}
                <header id="header-3a" className="flex items-center gap-4">
                  <h3 className="flex-1 text-3xl font-medium text-slate-700">
                    You will pay $12 on delivery.
                  </h3>
                  <button
                    onClick={() => setIsShowing(false)}
                    className="inline-flex h-10 items-center justify-center gap-2 justify-self-center 
                    bg-[#d43b49] whitespace-nowrap rounded-full px-5 text-sm font-medium tracking-wide text-white transition duration-300 hover:bg-[#d43b49] hover:text-whitefocus:bg-emerald-200 focus:text-white focus-visible:outline-none disabled:cursor-not-allowed disabled:text-emerald-300 disabled:shadow-none disabled:hover:bg-transparent"
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
                {/*        <!-- Modal body --> */}
                {/* Contact Form Container */}
        <div className=" max-w-xl p-8 text-center">
          {/* Contact Form Title */}
          
          {/* Contact Form */}
          <form
            className="mx-auto mb-4 max-w-sm text-left"
            name="wf-form-password"
            method="get"
          >
            <div className="mb-4 flex flex-col gap-y-2">
              <label htmlFor="name-2" className="mb-1 font-medium">
                Name Surname
              </label>
              <input
                type="text"
                className="h-9 w-full bg-white px-3 py-6 text-sm text-[#333333] border-t-[#e4e4e4]  border-b-[#777777] border-l-[#f2f2f7] border-r-[#777777] border-[2px]"
                placeholder="John Doe"
                required=""
              />
            </div>
            <div className="mb-4 flex flex-col gap-y-2">
              <label htmlFor="name-2" className="mb-1 font-medium">
               Phone number
              </label>
              <input
                type="text"
                className="h-9 w-full bg-white px-3 py-6 text-sm text-[#333333] border-t-[#e4e4e4]  border-b-[#777777] border-l-[#f2f2f7] border-r-[#777777] border-[2px]"
                placeholder="08034739605"
                required=""
              />
            </div>
            <div className="mb-2 flex flex-col gap-y-2">
              <label htmlFor="field-3" className="mb- font-medium">
                Address
              </label>
              <textarea
                placeholder="enter your address"
                className="h-auto min-h-[186px] w-full overflow-auto bg-white px-3 py-2 text-sm text-[#333333] border-[#777777] border-[2px]"
                defaultValue={" "}
              />
            </div>
            <input
              type="submit"
              defaultValue="Order"
              className="inline-block w-full cursor-pointer bg-[#fbb200] px-6 py-4 text-center font-semibold text-white transition "
            />
          </form>
        </div>
              </div>
            </div>,
            document.body
          )
        : null}
    </>
  )
}
