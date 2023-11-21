import Image from 'next/image'
import React from 'react'

const Blog = () => {
  return (
    <section>
  {/* Container */}
  <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-24 lg:py-32">
    {/* Component */}
    <div className="flex flex-col items-center">
      {/* Heading Div */}
      <div className="mb-8 max-w-[800px] text-center md:mb-12 lg:mb-16">
        <h2 className="text-3xl font-semibold md:text-5xl">
          The latest and greatest news
        </h2>
        <p className="mx-auto mt-4 max-w-[528px] text-[#636262]">
          Lorem ipsum dolor sit amet elit ut aliquam
        </p>
      </div>
      {/* Blog Div */}
      <div className="mb-8 grid w-full grid-cols-1 md:mb-12 md:grid-cols-3 md:gap-4 lg:mb-16">
        {/* Blog Item */}
        <a
          href="#"
          className="relative mb-12 flex h-[560px] max-w-full grid-cols-1 flex-col gap-4 overflow-hidden rounded-xl border border-solid border-black bg-white font-bold text-black [box-shadow:rgb(0,_0,_0)_9px_9px] [grid-area:1/1/2/2] md:[grid-area:1/1/2/4]"
        >
          <div className="absolute bottom-0 left-0 right-0 top-auto z-10 flex w-full max-w-[800px] flex-col items-start justify-start rounded-xl bg-white p-6 md:bottom-2 md:left-2">
            <p className="mb-4 rounded-md bg-white py-1.5 text-sm font-semibold text-[#f22e3e]">
              PIzzon Hut Blog
            </p>
            <p className="mb-4 text-xl font-bold md:text-2xl">
              Diam cursus a ornare massa orci sodales habitasse gravida
              bibendum.
            </p>
            <div className="flex items-start max-[991px]:flex-col lg:items-center">
              <p className="text-sm text-[#636262]">Sarah Annie</p>
              <p className="ml-2 mr-2 text-sm text-[#636262] max-[991px]:hidden">
                -
              </p>
              <p className="text-sm text-[#636262]">6 mins read</p>
            </div>
          </div>
          <Image
            src="/image/blog-4.jpg"
            width={200}
            height={200}
            alt=""
            className="inline-block h-full w-full object-cover"
          />
        </a>
        {/* Blog Item */}
        <a
          href="#"
          className="max-[767px]: flex max-w-full grid-cols-1 flex-col gap-4 rounded-md bg-white py-4 font-bold text-black lg:px-2"
        >
          <Image
            src="/image/blog-1.jpg"
            width={200}
            height={200}
            alt=""
            className="inline-block h-60 w-full rounded-xl object-cover"
          />
          <div className="flex w-full flex-col items-start justify-start py-4">
            <div className="mb-4 rounded-md bg-white py-1.5">
              <p className="text-sm font-semibold text-[#f22e3e]">
                 Pizza Slice
              </p>
            </div>
            <p className="mb-4 text-xl font-bold md:text-2xl">
              The latest news with Pizzon
            </p>
            <p className="font-normal text-[#636262]">
              We make it simple for you to order your favorite pizza.
            </p>
          </div>
        </a>
        {/* Blog Item */}
        <a
          href="#"
          className="flex max-w-full grid-cols-1 flex-col gap-4 rounded-md bg-white py-4 font-bold text-black lg:px-2"
        >
          <Image
            src="/image/blog-2.jpg"
            width={200}
            height={200}
            alt=""
            className="inline-block h-60 w-full rounded-xl object-cover"
          />
          <div className="flex w-full flex-col items-start justify-start py-4">
            <div className="mb-4 rounded-md bg-white py-1.5">
              <p className="text-sm font-semibold text-[#f22e3e]">
                Salt Pizza
              </p>
            </div>
            <p className="mb-4 text-xl font-bold md:text-2xl">
              The latest news with Pizzon
            </p>
            <p className="font-normal text-[#636262]">
              Lorem ipsum dolor sit amet, &nbsp;elit ut aliquam, purus sit amet
              luctus venenatis elit ut aliquam,
            </p>
          </div>
        </a>
        {/* Blog Item */}
        <a
          href="#"
          className="flex max-w-full grid-cols-1 flex-col gap-4 rounded-md bg-white py-4 font-bold text-black lg:px-2"
        >
          <Image
            src="/image/blog-3.jpg"
            width={200}
            height={200}
            alt=""
            className="inline-block h-60 w-full rounded-xl object-cover"
          />
          <div className="flex w-full flex-col items-start justify-start py-4">
            <div className="mb-4 rounded-md bg-white py-1.5">
              <p className="text-sm font-semibold text-[#f22e3e]">
                Pizza
              </p>
            </div>
            <p className="mb-4 text-xl font-bold md:text-2xl">
              The latest news with Pizzon
            </p>
            <p className="font-normal text-[#636262]">
              Lorem ipsum dolor sit amet, &nbsp;elit ut aliquam, purus sit amet
              luctus venenatis elit ut aliquam,
            </p>
          </div>
        </a>
      </div>
      <a
        href="/contact"
        className="inline-block rounded-xl bg-black px-8 py-4 text-center font-semibold text-white [box-shadow:#f22e3e_6px_6px]"
      >
        Contact Us
      </a>
    </div>
  </div>
</section>

  )
}

export default Blog