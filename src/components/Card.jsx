import React from 'react'
import star from '../../public/images/star.png'

export default function Card(props) {
  let badgeText
  if (props.openSpots === 0) {
    badgeText = "SOLD OUT"
  } else if (props.location === "Online") {
    badgeText = "ONLINE"
  }
  return (
    <>
      <div className='font-[poppins] min-w-[176px] text-[12px] relative'>
        {/* tag with information */}
        {badgeText && <div className='absolute mt-[6px] ml-[6px] bg-white py-[5px] px-[7px] rounded-sm font-bold'>{badgeText}</div>}
        {/* tag with information */}
          <img className='w-full h-56 object-cover object-top rounded-md mb-4' src={`../images/${props.coverImg}`} />
        <div className='h-[58px] py-[9px]'>
          <div className='flex gap-1'>
            <img className='h-[12px]' src={star} />
            <span>{props.rating}</span>
            <span className='text-[#918E9B]'>({props.stats.reviewCount}) • </span>
            <span className='text-[#918E9B]'>{props.location}</span>
          </div>
          <p className='my-[8px]'>{props.title}</p>
          <p><strong>From ${props.price}</strong> / person</p>
        </div>
      </div>
    </>
  )
}
