"use client"
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { toast } from 'react-hot-toast';

const Signup = () => {
  const router = useRouter();
    const[user, setUser] = useState({
        email: "",
        password: "",
        confirmpassword:""
    })
    const [buttonDisabled, setButtonDisabled] = useState(false)

    

    const onSignup = async () => {
      console.log("Signup button clicked");
      
      try {
        const response = await axios.post("/api/user/signup", user );
        toast.success("Signup successful");
        router.push("/login");
      } catch (error:any) {
        console.error(error.message);
        toast.error("Something went wrong. Please try again.");
      }
    };

    console.log(onSignup)
    console.log(user)


    useEffect(() => {
    const isValid =
    user.email.length > 0 &&
    user.password.length > 0 && 
    user.password === user.confirmpassword;
    setButtonDisabled(!isValid);
    }, [user])
  

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
          <div className="mb-6">
            <label className="block mb-2 font-extrabold" htmlFor="email">
              Email
            </label>
            <input
              className="inline-block w-full p-4 leading-6 text-lg font-extrabold placeholder-[#519eae] bg-white shadow border-2 border-[#519eae] rounded"
              type="email"
              placeholder="email"
              id='email'
              value={user.email}
              onChange={(e) => setUser({...user, email: e.target.value})}
            />
          </div>
          <div className="mb-6">
            <label className="block mb-2 font-extrabold" htmlFor="password">
              Password
            </label>
            <input
              className="inline-block w-full p-4 leading-6 text-lg font-extrabold placeholder-[#519eae] bg-white shadow border-2 border-[#519eae] rounded"
              type="password"
              placeholder="**********"
              id='password'
              value={user.password}
              onChange={(e) => setUser({...user, password: e.target.value})}
            />
          </div>
          <div className="mb-6">
            <label className="block mb-2 font-extrabold" htmlFor="confirmpassword">
              Confirm Password
            </label>
            <input
              className="inline-block w-full p-4 leading-6 text-lg font-extrabold placeholder-[#519eae] bg-white shadow border-2 border-[#519eae] rounded"
              type="password"
              placeholder="**********"
              id='confirmPpssword'
              value={user.confirmpassword}
              onChange={(e) => setUser({...user, confirmpassword: e.target.value})}
            />
          </div>
          <button className="inline-block w-full py-4 px-6 mb-6 text-center text-lg leading-6 text-white font-extrabold bg-[#519eae]  border-3 border-[#519eae] shadow rounded transition duration-200"
          onClick={onSignup}>
           {buttonDisabled ? "Loading..." : "Sign Up"} 
          </button>
          <p className="text-center font-extrabold">
            Already have an account?{" "}
            <a className="text-red-500 hover:underline" href="/login">
              Sign In
            </a>
          </p>
        
      </div>
    </div>
  </section>
  )
}

export default Signup