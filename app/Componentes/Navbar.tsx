import React from 'react'

const Navbar = () => {
  return (
    <>
    
    <div className='flex w-full justify-evenly'>
        <div className='border bg-red-300'>
            <h2>Ummat Electronics</h2>
        <div>Iconn</div>
        </div>


        <div className='w-60 bg-orange-300 justify-between'>
            <a href="">Home</a>
            <a href="">About</a>
            <a href="">Blog</a>
            <a href="">Contect</a>
        </div>

        <div className='flex bg-yellow-300 justify-between'>
        <div>
            <h2>Call Now</h2>
        </div>
<div>Add Cart</div>
<div><button>Login/Register</button></div>
        </div>


    </div>
    </>
  )
}

export default Navbar