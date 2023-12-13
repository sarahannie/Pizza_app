"use client"
import { signIn } from 'next-auth/react';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { toast } from 'react-hot-toast';
import Image from 'next/image';

const Login = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  
  async function handleFormSubmit(ev) {
    ev.preventDefault();
    try{
      if(!email || !password){
        toast.error("Please fill in all fields");
        return;
      }
      else{
        await signIn('credentials', {email, password, callbackUrl: '/'});
        toast.success("Login successful");
      }
      
    }catch(error){
      console.log(error)
      toast.error("Something went wrong. Please try again.");
    }
   
  }





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
        <form onSubmit={handleFormSubmit}>
        <div className="mb-6">
          <label className="block mb-2 font-extrabold" htmlFor="">
            Email
          </label>
          <input
            className="inline-block w-full p-4 leading-6 text-lg font-extrabold placeholder-[#519eae] bg-white shadow border-2 border-[#519eae] rounded"
            type="email"
            placeholder="email"
            id="email"
            value={email}
            onChange={ev => setEmail(ev.target.value)}
            name='email'
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
            value={password}
            name='password'
            onChange={ev => setPassword(ev.target.value)}
          />
        </div>
        <button type='submit' className="inline-block w-full py-4 px-6 mb-6 text-center text-lg leading-6 text-white font-extrabold bg-[#519eae]  border-3 border-[#519eae] shadow rounded transition duration-200">
          Sign in
        </button>
        
        <button type="button" onClick={() => signIn('google', {callbackUrl: '/'})} className="flex gap-4 justify-center inline-block w-full py-4 px-6 mb-6 text-center text-lg leading-6 text-[#519eae] font-extrabold bg-white  border-3 border-[#519eae] shadow rounded transition duration-200">
          <Image src='/image/google.png' alt={''} width={24} height={24} />
          Login with google
        </button>
      </form>
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