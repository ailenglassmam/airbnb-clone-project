import React from 'react'
import Journey from './Journey'
import dataJourney from '../dataJourney'

export default function Journeys() {
  const journey = dataJourney.map(journey => {
    return (
      <Journey
        key={journey.id}
        {...journey}
      />
    )
  })

  return (
    <section className='w-full h-fit px-5 md:px-10'>
      <div className='mt-10'>
        <h1 className='text-[36px] leading-none font-semibold line font-[poppins]'>Journey Ideas</h1>
        <p className='mt-4 font-light font-[poppins]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore molestias, ipsam minus perferendis sed cum deserunt soluta vel ad animi? Minus alias ipsa commodi laboriosam labore possimus saepe id modi.</p>
      </div>
      <div className='w-full h-fit flex flex-wrap gap-5 md:justify-center my-10'>
        {journey}
      </div>
    </section>
  )
}
