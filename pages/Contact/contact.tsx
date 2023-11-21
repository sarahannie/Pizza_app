import Image from 'next/image'
import React from 'react'

const Contact = () => {
  return (
    <section>
  {/* Container */}
  <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-24 lg:py-32">
    {/* Component */}
    <div className="grid items-center gap-8 sm:gap-20 lg:grid-cols-2">
      <div className="max-w-3xl">
        
        <Image src="/image/banner-img.png" width={600} height={200} alt=""/>
        
      </div>
      <div className="mx-auto max-w-xl bg-[#f2f2f7] p-8 text-center">
        <h3 className="text-2xl font-bold md:text-3xl">Contact Us</h3>
        <p className="mx-auto mb-6 mt-4 max-w-lg text-sm text-[#636262] lg:mb-8">
          Lorem ipsum dolor sit amet consectetur adipiscing elit ut
          aliquam,purus sit amet luctus magna fringilla urna
        </p>
        {/* Form */}
        <form
          className="mx-auto mb-4 max-w-[400px] text-left"
          name="wf-form-password"
          method="get"
        >
          <div>
            <label htmlFor="name-2" className="mb-1 font-medium">
              Your Name
            </label>
            <input
              type="text"
              className="mb-4 block h-9 w-full rounded-md border border-solid border-black px-3 py-6 pl-4 text-sm text-[#333333]"
            />
          </div>
          <div className="mb-2">
            <label htmlFor="name-2" className="mb-1 font-medium">
              Email Address
            </label>
            <input
              type="text"
              className="mb-4 block h-9 w-full rounded-md border border-solid border-black px-3 py-6 pl-4 text-sm text-[#333333]"
            />
          </div>
          <div className="mb-5 md:mb-6 lg:mb-8">
            <label htmlFor="field-3" className="mb-1 font-medium">
              Project Brief
            </label>
            <textarea
              placeholder=""
              maxLength={5000}
              name="field"
              className="mb-2.5 block h-auto min-h-[128px] w-full rounded-md border border-solid border-black p-3 text-sm text-[#333333]"
              defaultValue={" "}
            />
          </div>
          <input
            type="submit"
            defaultValue="Let's Talk"
            className="inline-block w-full cursor-pointer rounded-md bg-black px-6 py-3 text-center font-semibold text-white"
          />
        </form>
      </div>
    </div>
  </div>
</section>

  )
}

export default Contact