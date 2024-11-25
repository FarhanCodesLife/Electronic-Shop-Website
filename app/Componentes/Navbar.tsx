import React from 'react'

const Navbar = () => {
  return (
    <>
    
    <div className='flex w-full p-5 bg-slate-400  justify-between'>
        <div className=' flex gap-5 w-60 bg-red-300 items-center '>
            <h2 className='text-xl'>Ummat Electronics</h2>
        <div>Menu</div>
        </div>


        <div className='w-96 bg-orange-300 flex justify-between '>
            <a href=''>Home</a>
            <a href="">About</a>
            <a href="">Blog</a>
            <a href="">Contect</a>
        </div>

        <div className='flex w-80 md- bg-yellow-300 justify-between gap-3'>
        <div>
            <h2>Call Now</h2>
        </div>
<div>Add Cart</div>
<div><button>Login/Register</button></div>
        </div>


    </div>
    <div>


    </div>
    </>
  )
}

export default Navbar