import React, { useState } from 'react'
import { FaUserTie,FaBars } from "react-icons/fa";
import { CiHeart,CiSearch } from "react-icons/ci";
import { HiArrowsRightLeft } from "react-icons/hi2";    
import { IoCart } from "react-icons/io5";
import Menu from '../Menus/Menu';
import SearchBoxComponent from '../SearchBox/SearchBoxComponent';


const Navbar = ({ customClass }) => {
    const [appMenu, setAppMenu] = useState(null);
    const handleMouseEnter = (id) => {
        setAppMenu(id);
    
      }
    
      const handleMouseLeave = () => {
        setAppMenu(null);
      }

      const menuItems = [
        {
          id: 1,
          label: 'MENU |',
          icon: <FaBars />,
          subMenu: <Menu />,
        },
        {
          id: 2,
          label: 'ABOUT US'
        },
        {
          id: 3,
          label: 'FAQS'
        },
        {
          id: 4,
          label: 'CONTACT'
        },
        {
          id: 5,
          label: 'BLOGS'
        },
        {
          id: 6,
          label: '$Us DOLLAR'
          
        },
        {
          id: 7,
          label: '',
          icon:<FaUserTie size={25} />
         
        },
        {
            id: 8,
            label: '',
            icon:<CiHeart size={25} />
           
          },
          {
            id: 9,
            label: '',
            icon:<HiArrowsRightLeft size={25} />
           
          },
          {
            id: 10,
            label: '',
            icon:<CiSearch size={25} />,
            subMenu:<SearchBoxComponent/>
           
          },
          {
            id: 11,
            label: '',
            icon:<IoCart size={25} />
           
          },
          
      ];
      const leftMenuItems = menuItems.slice(0, 5);
      const rightMenuItems = menuItems.slice(5);
  return (
    <div className='sticky top-0 z-50 shadow-md'>
    <div className={`${customClass} relative`}>
  <div className='flex items-center'>
    <div className='bg-white flex items-center p-2 h-16'>
      <img
        className=''
        src='https://www.journal-theme.com/8/image/cache/catalog/journal3/logo/logo1xb-130x33.png.webp'
        alt='sdfs'
      />
    </div>
    <div className='bg-gray-800 flex justify-between items-center w-full'>
      <ul
        onMouseLeave={handleMouseLeave}
        className='h-16 px-4 gap-4 font-semibold text-lg flex items-center'
      >
        {leftMenuItems.map((item, id) => (
          <li
            key={item.id}
            className='text-gray-500 flex items-center gap-1'
            onMouseEnter={() => handleMouseEnter(id)}
          >
            {item.icon && <span>{item.icon}</span>}
            {item.label && <span>{item.label}</span>}
            {appMenu === id && (
              <div className={`absolute px-28 w-full left-0 text-black p-2 mt-24 space-y-2`}>
                {item.subMenu}
              </div>
            )}
          </li>
        ))}
      </ul>
      <ul
        onMouseLeave={handleMouseLeave}
        className='h-16 px-4 gap-4 font-semibold text-lg flex items-center'
      >
        {rightMenuItems.map((item, id) => (
          <li
            key={item.id}
            onMouseEnter={() => handleMouseEnter(id)}
            className='text-gray-500'
          >
            {item.icon && <span>{item.icon}</span>}
            {item.label && <span>{item.label}</span>}
            {appMenu === id && (
              <div className={`absolute right-0 px-28 w-fit text-black p-2 space-y-2`}>
                {item.subMenu}
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  </div>
</div>
</div>
  )
}

export default Navbar