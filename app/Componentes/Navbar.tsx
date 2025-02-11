"use client"

import Image from 'next/image';
import React, { useState } from 'react';
import logo from '../assets/logo__1_-removebg-preview.png';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from 'next/link';


const Navbar = () => {
  // State to manage mobile menu visibility
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Toggle function for mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <div className='flex w-full border-b-2 justify-between flex-wrap shadow-sm'>
        {/* Logo and Mobile Menu Button */}
        <div className='flex w-full lg:w-72 justify-between items-center px-4'>
          <Image
            width={160}
            height={160}
            src={logo}
            className='py-2'
            alt='ummat'
          />
         
          <button className='flex lg:hidden p-2 hover:bg-gray-100 rounded-md items-center hover:text-orange-500 transition-colors'>
            <span>Cart (0)</span>
          </button>
        </div>

        {/* Desktop Navigation Links */}
        <div className='hidden lg:flex gap-8 m-auto text-lg font-medium'>
        <Link href="/new">
      <h1>new</h1>
  </Link> 
  <Link href="/blog">
      <h1>blog</h1>
  </Link> 
  <Link href="/contect">
      <h1>contect</h1>
  </Link> 
          <Link href="/contect"><h1>dbj</h1> more </Link>
          <a href="/Contect" className='hover:text-orange-500 transition-colors'>Contact</a>
        </div>

        {/* Contact, Cart, and Auth Section */}
        <div className='flex p-4 w-full lg:w-auto justify-between items-center space-x-6'>
          <div className='hidden lg:block'>
            <p className='text-gray-500 text-sm'>Call Now</p>
            <p className='font-medium'>+92 344 259 8379</p>
          </div>
          <button className=' hidden lg:block items-center hover:text-orange-500 transition-colors'>
            <span>Cart (0)</span>
          </button>
          <button className='hidden lg:block hover:text-orange-500 transition-colors'>
            <span>Login / Register</span>
          </button>
          <button
            onClick={toggleMobileMenu}
            className='lg:hidden p-2 hover:bg-gray-100 rounded-md'
          >
            <span className='text-gray-600'>{isMobileMenuOpen ? 'Close' : 'Menu'}</span>
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className='w-1/2 lg:hidden absolute  my-32 flex flex-col gap-4 px-4 py-4 bg-white border-t'>

<Tabs defaultValue="account" className="w-[600px]">
  <TabsList>
    <TabsTrigger value="account"  className='w-1/2'>Account</TabsTrigger>
    <TabsTrigger value="password" className='w-1/2'>Password</TabsTrigger>
  </TabsList>
  <TabsContent value="account" className='flex flex-col gap-4 px-4 py-4 bg-white border-t'>
     <a href="/" className='hover:text-orange-500 transition-colors'>Home</a>
            <a href="/about" className='hover:text-orange-500 transition-colors'>About</a>
            <a href="/blog" className='hover:text-orange-500 transition-colors'>Blog</a>
            <a href="/contact" className='hover:text-orange-500 transition-colors'>Contact</a></TabsContent>
  
  <TabsContent value="password">Change your password here.</TabsContent>
</Tabs>

           
          </div>

          
        )}

        
      </div>
    </>
  );
};

export default Navbar;
