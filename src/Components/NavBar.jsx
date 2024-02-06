import React from 'react'
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <>
   <header class="text-gray-600 body-font">
  <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
</svg>
      <span class="ml-3 text-xl">Document Upload Portal </span>
    </a>
    <nav class="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
        <ul>
    <a>
		{/* Endpoint to route to Home component */}
		<Link to="/">Home                   </Link>
		</a>
		<a>
		{/* Endpoint to route to About component */}
		<Link to="/about">About            </Link>
		</a>
		<a>
		{/* Endpoint to route to Contact Us component */}
		<Link to="/contactus">Contact Us                </Link>
		</a>
        </ul>
    </nav>
    {/* <a>
		<Link to="/register">Register                </Link>
		</a> */}
    <button style={{ backgroundColor: '#6366F1', color: 'white', padding: '10px', border: 'none', cursor: 'pointer' }}>
    <Link to="/login" style={{ textDecoration: 'none', color: 'inherit' }}>
        Log In/Register
    </Link>
</button>

  </div>
</header>
    </>
  )
}

export default NavBar