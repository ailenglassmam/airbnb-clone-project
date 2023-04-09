import React from 'react'

export default function Journey(props) {
  return (
    <>
      <div className='font-[poppins] md:w-[176px] h-fit w-full text-[12px]'>
      {/*  */}
        <img className='md:w-full md:h-56 w-full h-96 object-cover object-top rounded-md mb-4' src={`../images/${props.coverImg}`} />
        <div>
          <span className='text-[#918E9B]'>{props.location}</span>
          <h5 className='font-bold my-[8px]'>{props.title}</h5>
          <p>{props.description}</p>
          <a href="#" className='text-[#ff6b84] hover:underline'>Ver más</a>
        </div>
      </div>
    </>
  )
}