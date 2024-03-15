import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from '../logo.png'

function Header() {
  return (
    
    <div className='h-screen w-40 bg-zinc-800 flex  justify-center items-center  fixed' >
        <nav className=' w-[10vw] h-[99vh] flex flex-col justify-normal gap-[100px] items-center '>
          <div className='flex-col items-center justify-center'>
            <Link>
              <img src={logo} className='rounded-full size-24 mt-10' />
              <h1 className='pl-[14px]'>Foodiffin.</h1>
            </Link>
        
          </div>
          <div>
            <ul className=' flex flex-col justify-around items-baseline gap-[55px] '>
              <NavLink to="/">Home</NavLink>
              <NavLink to="/about">Aboutus</NavLink>
              <NavLink to="/menu">Menu</NavLink>
              <NavLink to="/restaurants">Restaurants</NavLink>
              <NavLink to="/orderonline">Order-online</NavLink>
              <NavLink to="/contact">Contact</NavLink>

            </ul>
          </div>
        </nav>
    </div>
  )
}

export default Header