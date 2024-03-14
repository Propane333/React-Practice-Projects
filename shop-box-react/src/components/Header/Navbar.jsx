import React from 'react'
import { RiAccountCircleLine, RiLoginBoxLine, RiLoginCircleLine, RiMenu5Line, RiShoppingCart2Fill } from '@remixicon/react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <nav className='flex bg-white z-50 justify-evenly md:justify-around w-full h-16 items-center sticky top-0 border-b-2 border-slate-300'>
        <div className="1">
          <Link to='/' className='text-3xl font-mono font-extrabold'>Shop Box</Link>
        </div>
        <div className="2">
          <ul className='flex gap-x-16 text-lg md:flex hidden'>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `${isActive ? "text-orange-700" : "text-black"} font-semibold `
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `${isActive ? "text-orange-700" : "text-black"} font-semibold `
                }
              >
                About
              </NavLink>
            </li>
            <li><NavLink
                to="/electronics"
                className={({ isActive }) =>
                  `${isActive ? "text-orange-700" : "text-black"} font-semibold `
                }
              >
                Electronics
              </NavLink></li>
            <li><NavLink
                to="/clothes"
                className={({ isActive }) =>
                  `${isActive ? "text-orange-700" : "text-black"} font-semibold `
                }
              >
                Clothes
              </NavLink></li>
            <li><NavLink
                to="/contact"
                className={({ isActive }) =>
                  `${isActive ? "text-orange-700" : "text-black"} font-semibold`
                }
              >
                Contact
              </NavLink></li>
          </ul>
          <RiMenu5Line className='md:hidden block cursor-pointer ' />
        </div>
        <div className="3 flex gap-10">
          <NavLink to={'/login'} className={({isActive}) => `${isActive ? "text-orange-500": "text-black"}`} >
            <RiAccountCircleLine />
          </NavLink>
          <NavLink to='/cart' className={({isActive}) => `${isActive ? "text-orange-500": "text-black"}`}>
            <RiShoppingCart2Fill
              className='cursor-pointer '
            />
          </NavLink>

        </div>
      </nav>
    </>
  )
}

export default Navbar