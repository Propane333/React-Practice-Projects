import React from 'react'

const Navbar = () => {
  return (
    <>
    <nav className='w-full h-20  flex justify-between px-28 items-center'>
        <div><img src="/images/brand_logo.png" alt="" /></div>
        <ul className='flex gap-7 font-bold'>
            <li href='#' className='hover:text-red-400 cursor-pointer'>MENU</li>
            <li href='#' className='hover:text-red-400 cursor-pointer'>LOCATION</li>
            <li href='#' className='hover:text-red-400 cursor-pointer'>ABOUT</li>
            <li href='#' className='hover:text-red-400 cursor-pointer'>CONTACT</li>
        </ul>
        <button className='w-20 h-8 bg-red-700 text-sm font-semibold text-white'>Login</button>

    </nav>
    
    </>
  )
}

export default Navbar