import React from 'react'
import NavBar from "./NavBar";
import Footer from "./Footer";
import { Link } from "react-router-dom";
function Login() {
  
  return (
    <>
       <NavBar/>
<section class="text-gray-600 body-font flex items-center justify-center h-screen">
  <div class="lg:w-2/6 bg-gray-100 rounded-lg p-8 flex flex-col items-center w-full">
    <h2 class="text-gray-900 text-lg font-medium title-font mb-5">Sign Up</h2>
    <div class="relative mb-4">
      <label for="full-name" class="leading-7 text-sm text-gray-600">Your Email</label>
      <input type="text" id="full-name" name="full-name" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
    </div>
    <div class="relative mb-4">
      <label for="email" class="leading-7 text-sm text-gray-600">Password</label>
      <input type="email" id="email" name="email" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
    </div>
    <button class="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Sign Up</button>
    <p class="text-sm text-gray-600 mt-3">
      Not a member? 
      <button style={{ backgroundColor: '#6366F1', color: 'white', padding: '10px', border: 'none', cursor: 'pointer' }}>
    <Link to="/register" style={{ textDecoration: 'none', color: 'inherit' }}>
        Register
    </Link>
</button>
    </p>
  </div>

  
  <div id="registerForm" class="hidden lg:w-2/6 bg-gray-100 rounded-lg p-8 flex flex-col items-center w-full">
    
  </div>
</section>
<Footer/>
    </>
  )
}

export default Login