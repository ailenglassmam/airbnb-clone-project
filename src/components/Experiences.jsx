import React from 'react'
import Card from './Card'
import data from '../data'

export default function Experiences() {
  const cards = data.map(item => {
    return (
      <Card
      key={item.id}
      {...item}
    />
    )
  })

  return (
    <section className='w-full h-fit flex gap-5 pb-10 xl:justify-center my-10 overflow-x-auto px-10'>
    {cards} 
   </section>
  )
}
