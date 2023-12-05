import React from 'react'
import categories from './CategoriesData'
import { FaAngleRight } from "react-icons/fa";
const Menu = () => {
  const first = categories.slice(0, 5);
  const second = categories.slice(5,10);
  const third = categories.slice(10,15);
  const fourth = categories.slice(15,20);
  const fifth = categories.slice(20,25);
  const sixth = categories.slice(25,30);
  const imageUrl = 'https://www.journal-theme.com/8/image/cache/catalog/journal3/products/backpacks/9-290x150w.jpg.webp';
  return (
    <div className='flex mt-[340px]   w-full h-full gap-8 bg-white'>
    <div className='p-5  '>
    <div className='flex flex-col   '>
      <h1 className='text-sky-900 font-medium truncate'>Fashion</h1>
        {first.map((cat,id)=>(
          <div>
            
            <h1 className='text-sky-900 truncate hover:text-blue-500 hover:underline cursor-pointer text-[14px] flex items-center'><FaAngleRight />{cat.title}</h1>
            </div>
        ))}
    </div>
    <div className='flex flex-col '>
      <h1 className='text-sky-900 font-medium truncate'>Health & Beauty </h1>
        {second.map((cat,id)=>(
          <div>
            
            <h1 className='text-sky-900 truncate hover:text-blue-500 hover:underline cursor-pointer text-[14px] flex items-center'><FaAngleRight />{cat.title}</h1>
            </div>
        ))}
    </div>
    </div>
    <div className='p-5 '>
    <div className='flex flex-col   '>
      <h1 className='text-sky-900 font-medium truncate'>Electronics</h1>
        {third.map((cat,id)=>(
          <div>
            
            <h1 className='text-sky-900 truncate hover:text-blue-500 hover:underline cursor-pointer text-[14px] flex items-center'><FaAngleRight />{cat.title}</h1>
            </div>
        ))}
    </div>
    <div className='flex flex-col    '>
      <h1 className='text-sky-900 font-medium truncate'>Footwear</h1>
        {fourth.map((cat,id)=>(
          <div>
            
            <h1 className='text-sky-900 truncate hover:text-blue-500 hover:underline cursor-pointer text-[14px] flex items-center'><FaAngleRight />{cat.title}</h1>
            </div>
        ))}
    </div>
    </div>
    <div className='p-5 '>
    <div className='flex flex-col   '>
      <h1 className='text-sky-900 font-medium truncate'>Bags</h1>
        {fifth.map((cat,id)=>(
          <div>
            
            <h1 className='text-sky-900 truncate hover:text-blue-500 hover:underline cursor-pointer text-[14px] flex items-center'><FaAngleRight />{cat.title}</h1>
            </div>
        ))}
    </div>
    <div className='flex flex-col    '>
      <h1 className='text-sky-900 font-medium truncate'>Food</h1>
        {sixth.map((cat,id)=>(
          <div>
            
            <h1 className='text-sky-900 truncate hover:text-blue-500 hover:underline cursor-pointer text-[14px] flex items-center'><FaAngleRight />{cat.title}</h1>
            </div>
        ))}
    </div>
    </div>
    <div className='p-5 flex gap-2 '>
      <div>
    <div className='relative mb-4'>
  <img
    className='block mx-auto'
    src='https://www.journal-theme.com/8/image/cache/catalog/journal3/products/backpacks/9-290x150w.jpg.webp'
    alt='df'
  />
  <h1 className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-xl font-bold'>
    Sample Banner
  </h1>
</div>
<div className='relative'>
  <img
    className='block mx-auto'
    src='https://www.journal-theme.com/8/image/cache/catalog/journal3/slider/demo6/justyn-warner-532062-unsplash-290x150w.jpg.webp'
    alt='df'
  />
  <h1 className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-xl font-bold'>
    Sample Banner
  </h1>
</div>
</div>

    </div>
    <div className='p-5 flex gap-4'>
      <div>
    <div className='relative mb-4'>
  <img
    className='block mx-auto'
    src='https://www.journal-theme.com/8/image/cache/catalog/journal3/products/backpacks/10-290x150w.jpg.webp'
    alt='df'
  />
  <h1 className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-xl font-bold'>
    Sample Banner
  </h1>
</div>
<div className='relative'>
  <img
    className='block mx-auto'
    src='https://www.journal-theme.com/8/image/cache/catalog/journal3/slider/demo6/justyn-warner-541670-unsplash-290x150w.jpg.webp'
    alt='df'
  />
  <h1 className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-xl font-bold'>
    Sample Banner
  </h1>
</div>
</div>

    </div>
    </div>
  )
}

export default Menu