import React from 'react'

const Items = (props) => {
  return (
    <div className='elect-item w-80 hover:scale-105 hover:duration-75'>
    <img src={props.image} alt="" />
    <p className='mx-0 my-1'>{props.para}</p>
    <div className="item-price flex gap-5">
      <div className="item-new-price text-xl font-semibold">{props.new_price}</div>
      <div className="item-old-price font-medium text-xl text-gray-300">{props.old_price}</div>
    </div>
   </div>
  )
}

export default Items