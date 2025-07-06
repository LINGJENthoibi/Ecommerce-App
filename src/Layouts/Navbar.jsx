import React from 'react'
import { IoBookSharp } from 'react-icons/io5'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
      <div className='grid grid-cols-3 p-4 bg-slate-300'>
        <div className='flex items-center gap-5'>
          <IoBookSharp className='text-4xl' />
          <p>Book Store</p>
        </div>

        <div className='bg-blue'></div>
        <div className='flex justify-between items-center'>
          <NavLink
            to='/'
            className='text-[18pfont-semibold hover:text-orange-600 font-poppins'
          >
            Home
          </NavLink>
          <NavLink
            to='/about'
            className='text-[18px] font-semibold hover:text-orange-600'
          >
            About Us
          </NavLink>
          <NavLink
            to='/all-books'
            className='text-[18px] font-semibold hover:text-orange-600'
          >
            All Books
          </NavLink>
          <NavLink
            to='/login'
            className='text-[18px] font-semibold hover:text-orange-600'
          >
            Login
          </NavLink>
          <NavLink
            to='/profile'
            className='text-[18px] font-semibold hover:text-orange-600'
          >
            Profile
          </NavLink>
          <NavLink
            to='/signup'
            className='text-[18px] font-semibold hover:text-orange-600'
          >
            Sign up
          </NavLink>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
