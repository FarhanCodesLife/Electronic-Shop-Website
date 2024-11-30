import Image from 'next/image'
import React from 'react'
import logo from '../assets/logo__1_-removebg-preview.png'

const Navbar = () => {
  return (
    <>
      <div className='flex w-full border-b-2 justify-between flex-wrap shadow-sm'>
        {/* Logo and Mobile Menu Section */}
        <div className='flex w-full lg:w-72 justify-between items-center px-4'>
          <Image width={160} height={160} src={logo} className='py-2' alt='ummat'/>
          <button className='lg:hidden p-2 hover:bg-gray-100 rounded-md'>
            <span className='text-gray-600'>Menu</span>
          </button>
        </div>

        {/* Navigation Links */}
        <div className='hidden lg:flex gap-8 m-auto text-lg font-medium'>
          <a href="/" className='hover:text-orange-500 transition-colors'>Home</a>
          <a href="/about" className='hover:text-orange-500 transition-colors'>About</a>
          <a href="/blog" className='hover:text-orange-500 transition-colors'>Blog</a>
          <a href="/contact" className='hover:text-orange-500 transition-colors'>Contact</a>
        </div>

        {/* Contact, Cart and Auth Section */}
        <div className='flex p-4 w-full lg:w-auto justify-between items-center space-x-6'>
          <div className='hidden md:block'>
            <p className='text-gray-500 text-sm'>Call Now</p>
            <p className='font-medium'>+92 344 259 8379</p>
          </div>
          
          <button className='flex items-center hover:text-orange-500 transition-colors'>
            <span>Cart (0)</span>
          </button>
          
          <button className='hidden md:block hover:text-orange-500 transition-colors'>
            <span>Login / Register</span>
          </button>
        </div>
      </div>
    </>
  )
}

export default Navbar