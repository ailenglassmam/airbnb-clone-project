import React from 'react'
import logo from '../../public/images/airbnb-logo.png'

export default function Navbar() {
  return (
    <>
    <header>
      <nav className='h-[70px] w-full bg-white shadow-lg flex items-center'>
        <img className='h-[25px] ml-[30px]' src={logo} alt="Airbnb logo"/>
      </nav>
    </header>
    </>
  )
}
