import React from 'react'

const Navbar = () => {
  return (
    <>
    <nav className='w-full h-16 flex items-center justify-between px-20 border-b-2 border-gray-300 sticky z-50'>
        <div className='w-12 h-12 '><img src="/images/logo (1).png" alt="" /></div>
        <div className='mr-16'>
            <ul className='flex gap-16'>
                <li href='#' className='cursor-pointer font-semibold'>Home</li>
                <li href='#' className='cursor-pointer font-semibold'>About</li>
                <li href='#' className='cursor-pointer font-semibold'>Contact</li>
            </ul>
        </div>
    </nav>
    </>
  )
}

export default Navbar