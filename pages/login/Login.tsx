"use client"
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { toast } from 'react-hot-toast';

const Login = () => {
  const router = useRouter();
    const[user, setUser] = useState({
        email: "",
        password: ""
    })
    const [buttonDisabled, setButtonDisabled] = useState(false)

    const onLogin = async () => {
      console.log("Login button clicked");
      
      try {
        const response = await axios.post("/api/user/login", user );
        toast.success("Login successful");
        router.push("/");
      } catch (error:any) {
        console.error(error.message);
        toast.error("Something went wrong. Please try again.");
      }
    };

    console.log(onLogin)
    console.log(user)


    useEffect(() => {
    const isValid =
    user.email.length > 0 &&
    user.password.length > 0 ; 
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
        <h2 className="text-3xl md:text-4xl font-extrabold mb-2">Sign in</h2>
      </div>
      
        <div className="mb-6">
          <label className="block mb-2 font-extrabold" htmlFor="">
            Email
          </label>
          <input
            className="inline-block w-full p-4 leading-6 text-lg font-extrabold placeholder-[#519eae] bg-white shadow border-2 border-[#519eae] rounded"
            type="email"
            placeholder="email"
            id="email"
            value={user.email}
            onChange={(e) =>{setUser({...user, email: e.target.value})}}
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
            id="password"
            value={user.password}
            onChange={(e) =>{setUser({...user, password: e.target.value})}}
          />
        </div>
        <div className="flex flex-wrap -mx-4 mb-6 items-center justify-between">
          <div className="w-full lg:w-auto px-4 mb-4 lg:mb-0">
            <label htmlFor="">
              <input type="checkbox" />
              <span className="ml-1 font-extrabold">Remember me</span>
            </label>
          </div>
          <div className="w-full lg:w-auto px-4">
            <a className="inline-block font-extrabold hover:underline" href="#">
              Forgot your password?
            </a>
          </div>
        </div>
        <button onClick={onLogin} className="inline-block w-full py-4 px-6 mb-6 text-center text-lg leading-6 text-white font-extrabold bg-[#519eae]  border-3 border-[#519eae] shadow rounded transition duration-200">
          Sign in
        </button>
        <p className="text-center font-extrabold">
          Don’t have an account?{" "}
          <a className="text-red-500 hover:underline" href="/signup">
            Sign up
          </a>
        </p>
      
    </div>
  </div>
</section>
  )
}

export default Login