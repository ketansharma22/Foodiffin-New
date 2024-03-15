import React from 'react'
import Header from '../../Components/Header/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../../Components/Footer/Footer'
import background from './logofinal.png'

function Layout() {
  return (
    <div className=' text-white flex  ' >
      <div className='sticky w-[160px] h-screen'>
        <Header/>
      </div>
      <div className='flex-col w-[calc(100vw-180px)]'>

        <div className=' w-[calc(100vw-180px)] h-screen  ' style={{backgroundImage: `url(${background})`, opacity:0.7}}>
          <Outlet />
        </div>
        
        <Footer/>
      </div>
    </div>
  )
}

export default Layout