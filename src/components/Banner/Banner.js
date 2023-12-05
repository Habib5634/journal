import React from 'react'
import { MdOutlineMailOutline } from "react-icons/md";
const Banner = () => {
  return (
    <div className='w-full flex items-center mt-20 justify-center py-10 bg-sky-900'>
        <h1 className='text-2xl text-white mr-3 '>SIGN UP AND GET A $50 OFF ON YOUR FIRST PURCHASE</h1>
        <div className='relative rounded-full'>
  <MdOutlineMailOutline className='absolute left-3 top-1/2 transform -translate-y-1/2' />
  <input
    type='email'
    className='pl-10 pr-4 py-2 rounded-full outline-none'
    placeholder='Email'
  />
</div>
    </div>
  )
}

export default Banner