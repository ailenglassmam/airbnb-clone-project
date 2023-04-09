import React from 'react'
import gridImages from '../../public/images/photo-grid.png'

export default function Hero() {
  return (
    <>
      <section className='px-5 md:px-10'>
        <img className='m-auto my-10 md:w-[70%]' src={gridImages} alt="Grid of Extraordinary Images" />
        <div className='w-full md:w-[70%]'>
          <h1 className='text-[36px] leading-none font-semibold line font-[poppins]'>Online Experiences</h1>
          <p className='mt-4 font-light font-[poppins]'>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
        </div>

      </section>
    </>
  )
}
