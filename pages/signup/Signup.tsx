import React from 'react'

const Signup = () => {
  return (
    <section className="py-26 bg-white my-20">
    <div className="container px-4 mx-auto">
      <div className="max-w-lg mx-auto">
        <div className="text-center mb-8">
          <a className="inline-block mx-auto mb-6" href="#">
            <img src="nigodo-assets/logo-icon-nigodo.svg" alt="" />
          </a>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-2">Sign Up</h2>
        </div>
        <form action="">
          <div className="mb-6">
            <label className="block mb-2 font-extrabold" htmlFor="">
              Email
            </label>
            <input
              className="inline-block w-full p-4 leading-6 text-lg font-extrabold placeholder-[#519eae] bg-white shadow border-2 border-[#519eae] rounded"
              type="email"
              placeholder="email"
            />
          </div>
          <div className="mb-6">
            <label className="block mb-2 font-extrabold" htmlFor="">
              Password
            </label>
            <input
              className="inline-block w-full p-4 leading-6 text-lg font-extrabold placeholder-[#519eae] bg-white shadow border-2 border-[#519eae] rounded"
              type="password"
              placeholder="**********"
            />
          </div>
          <div className="mb-6">
            <label className="block mb-2 font-extrabold" htmlFor="">
              Confirm Password
            </label>
            <input
              className="inline-block w-full p-4 leading-6 text-lg font-extrabold placeholder-[#519eae] bg-white shadow border-2 border-[#519eae] rounded"
              type="password"
              placeholder="**********"
            />
          </div>
          <button className="inline-block w-full py-4 px-6 mb-6 text-center text-lg leading-6 text-white font-extrabold bg-[#519eae]  border-3 border-[#519eae] shadow rounded transition duration-200">
            Sign Up
          </button>
          <p className="text-center font-extrabold">
            Already have an account?{" "}
            <a className="text-red-500 hover:underline" href="/login">
              Sign In
            </a>
          </p>
        </form>
      </div>
    </div>
  </section>
  )
}

export default Signup