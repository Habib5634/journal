import React from 'react'
import Navbar from '../../components/navbar/Navbar';
import { FaArrowRight,FaMedal  } from "react-icons/fa6";
import { AiOutlineDrag } from "react-icons/ai";
import { BsBookshelf } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import Banner from '../../components/Banner/Banner';
import AllProducts from '../../components/ProductComponent/AllProducts';
const Home = () => {
  const card =[
    {
      icon:<FaMedal size={30}/>,
      title:"MODERN AND TRENDY",
      desc:"Create the best layouts with the new Journal 3 page builder"
    },
    {
      icon:<AiOutlineDrag  size={30}/>,
      title:"BEST TYPOGRAPHY OPTIONS",
      desc:"So many options, so much flexibility, it will blow your mind"
    },
    {
      icon:<BsBookshelf size={30}/>,
      title:"30+ MODULES",
      desc:"The best multi-purpose modules already built in"
    },
    {
      icon:<FaRegHeart size={30}/>,
      title:"BUILT WITH LOVE",
      desc:"Tons of love has gone into Journal throughout the years"
    }
  ]

    const imageUrl = 'https://www.journal-theme.com/8/image/cache/catalog/journal3/slider/demo8/1-1700x1134.jpg.webp';
  return (
    < >
    
    
      
    <div className="bg-cover absolute z-0 top-0 bg-center h-[740px] w-full " style={{ backgroundImage: `url('${imageUrl}')` }}>
    <Navbar customClass="px-28" />
        <div className='px-28 mt-20'>
          <h1 className='text-9xl font-bold text-white'>MUST HAVE<br/> STYLES</h1>
          <button className='flex items-center px-3 py-2 gap-2 rounded-full text-white text-2xl mt-16 bg-red-500 hover:bg-blue-500 transition-colors duration-300 '>SHOP NOW <FaArrowRight size={15} /></button>
        </div>
        <div className=' flex justify-center gap-4 mt-16'>
          {card.map((card,index)=>(

         
          <div key={index} className='flex items-center w-1/5 bg-white hover:bg-gray-200 transition-colors duration-300 rounded-lg p-2'>
            <p className='rounded-full p-4 mr-3 text-white bg-sky-900 flex items-center h-fit '>
          {card.icon}
          </p>  
            <div>
              <h1 className='text-[14px] font-bold'>{card.title}</h1>
              <p className='text-[13px]'>{card.desc}</p>
            </div>
          </div>
           ))}
        </div>
        <Banner/>
    <AllProducts/>
    </div>
    

    </>
  )
}

export default Home