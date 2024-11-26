import Image from 'next/image'
import React from 'react'
import logo from '../assets/logo__1_-removebg-preview.png'

const Navbar = () => {
  return (
    <>
    
    <div className='flex w-full border-b-2   justify-between flex-wrap'>
        
        
        <div className='flex  w-full lg:w-72 md:justify-around bg-cover '>
            <Image width={200} height={200} src={logo} className=' m-2' alt='ummat'/>
            {/* <h2 className='text-xl'>Ummat Electronics</h2> */}
            <div className='lg:hidden  ' >Menu</div>
        </div>


        <div className='gap-10 m-auto text-xl  lg:flex w-80 flex-row  justify-between items-center hidden '>
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




        <div className='flex p-4 sm:w-96 w-full bg--300 justify-between items-center '>
            <div className='text-center md:text-left'>
                <h2>Call Now </h2>
                <h2>+92 344 259 8379</h2>
            </div>
            <div className='text-center md:text-left'>
                Add Cart
            </div>
            <div className='text-center md:text-left'>
                <button className='text-center md:text-left'>Log in <br />
                    Register</button>
            </div>
        </div>


    </div>
    <div>


    </div>
    </>
  )
}

export default Navbar