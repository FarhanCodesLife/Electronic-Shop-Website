import Image from 'next/image'
import React from 'react'
import logo from '../assets/logo__1_-removebg-preview.png'

const Navbar = () => {
  return (
    <>
    
    <div className='flex w-full    justify-between flex-wrap'>
        
        
        <div className='flex  w-full lg:w-72 md:justify-around bg-cover '>
            <Image width={200} height={200} src={logo} className=' m-4' alt='ummat'/>
            {/* <h2 className='text-xl'>Ummat Electronics</h2> */}
            <div className='lg:hidden  ' >Menu</div>
        </div>


        <div className='gap-10 m-auto text-lg bg-orange-300 md:flex w-96 flex-row  justify-between items-center hidden '>
            <a href="" className=' hover:underline'>Home</a>
            <a href="" className=''>About</a>
            <a href="" className=''>Blog</a>
            <a href="" className=''>Contact</a>
        </div>

        {/* <div className='gap-4 bg-orange-300 flex  justify-center items-center  '>
            <a href="" className='mb-2'>Home</a>
            <a href="" className='mb-2'>About</a>
            <a href="" className='mb-2'>Blog</a>
            <a href="" className='mb-2'>Contact</a>
        </div> */}




        <div className='flex md:w-60 sm:w-80 lg:w-80 bg-yellow-300 justify-between items-center gap-3'>
            <div className='text-center md:text-left'>
                <h2>Call Now</h2>
            </div>
            <div className='text-center md:text-left'>
                Add Cart
            </div>
            <div className='text-center md:text-left'>
                <button>Login/Register</button>
            </div>
        </div>


    </div>
    <div>


    </div>
    </>
  )
}

export default Navbar