import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios"

const Signup = () => {
    const[name,setName]=useState('')
    const[email,setEmail]=useState('')
    const[password,setPassword]=useState('')

    function handleSubmit(){
        axios.post('http://localhost:3000/register',{name,email,password})
        .then(result=>console.log(result))
        .catch(e=>console.log(e))

        

    }
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-purple-500 to-pink-500">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Sign Up
        </h1>
        <form>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Full Name
            </label>
            <input
              type="text"
              id="name"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-pink-500 focus:border-pink-500 sm:text-sm"
              placeholder="John Doe"
              onChange={(e)=>setName(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-pink-500 focus:border-pink-500 sm:text-sm"
              placeholder="you@example.com"
              onChange={(e)=>setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-pink-500 focus:border-pink-500 sm:text-sm"
              placeholder="********"
              onChange={(e)=>setPassword(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-pink-500 hover:bg-pink-600 text-white font-medium py-2 px-4 rounded-md shadow-sm transition duration-200"
            onClick={handleSubmit()}
          >
            Sign Up
          </button>
        </form>
        <div className="mt-6 text-sm text-gray-600 text-center">
          Already have an account?{" "}
          <div
            href="#"
            className="text-pink-500 hover:text-pink-600 font-medium"
          ><Link to='/login'>Log in</Link>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
