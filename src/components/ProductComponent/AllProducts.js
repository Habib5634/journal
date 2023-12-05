import React, { useState, useEffect } from 'react';
import products from './ProductsData'
import {AiOutlineEye} from 'react-icons/ai'
import {HiShoppingBag} from 'react-icons/hi'
import { useSearch } from '../../pages/Context/SearchContext';
import SearchBoxComponent from '../SearchBox/SearchBoxComponent';
import { Link } from 'react-router-dom';

const AllProducts = () => {
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState(products);
    const [hoveredItem, setHoveredItem] = useState(null);
    const { searchQuery } = useSearch();
    
    useEffect(() => {
      // Filter products based on selected categories
      const categoryFiltered = selectedCategories.length === 0
        ? products
        : products.filter((product) => selectedCategories.includes(product.category));
    
      // Filter products based on search query
      const searchFiltered = categoryFiltered.filter((product) =>
        product.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    
      setFilteredProducts(searchFiltered);
    }, [selectedCategories, searchQuery, products]);
    
    const handleCategoryChange = (category) => {
      // Toggle selected category
      setSelectedCategories((prevCategories) => {
        if (prevCategories.includes(category)) {
          return prevCategories.filter((c) => c !== category);
        } else {
          return [...prevCategories, category];
        }
      });
    };
    
  return (
    <div>
      {/* Category filters */}
      <div className='flex justify-between px-24 items-center py-10'>
      <div className='gap-4 flex justify-center '>
        <label className='font-medium'>
        All
          <input
            type="checkbox"
            checked={selectedCategories.length === 0}
            className='mr-4 ml-1'
            onChange={() => setSelectedCategories([])}
          />
         
        </label>
        {Array.from(new Set(products.map((product) => product.category))).map(
          (category) => (
            <label key={category} className='font-medium'>
                {category}
              <input
                type="checkbox"
                className='mr-4 ml-1'
                checked={selectedCategories.includes(category)}
                onChange={() => handleCategoryChange(category)}
              />
              
            </label>
          )
        )}
      </div>
      <div className='flex items-center'>
        <h1 className=' mr-1 font-medium '>Search Products</h1>
      <SearchBoxComponent/>
      </div>
      </div>

      {/* Product list */}
      <div className='flex flex-wrap justify-center space-x-4 mt-10 overflow-hidden'>
      {filteredProducts.map((item) => (
        <div
          key={item.id}
          className="flex flex-col justify-center w-5/6 h-5/6 sm:w-2/5 sm:h-2/5 md:h-1/4 md:w-1/5 lg:h-1/6 lg:w-1/6 items-center mb-4"
          onMouseEnter={() => setHoveredItem(item.id)}
          onMouseLeave={() => setHoveredItem(null)}
        >
          <div
            className="relative h-fit bg-gray-200 transition-transform transform hover:scale-105"
          >
            <img
              src={hoveredItem === item.id ? item.images[0] : item.images[1]}
              alt="Image"
              className=" object-cover"
            />
            {/* {hoveredItem === item.id && ( */}
            <div
  className={`${
    hoveredItem === item.id
      ? 'flex flex-col justify-between scale-1 transition-transform duration-500 opacity-100'
      : ' opacity-0'
  } `}
>
    <Link to={`/product-detail-page/${item.id}`}>
  <AiOutlineEye
    className={`text-white m-2 text-4xl top-8 absolute bg-gray-500 p-2 cursor-pointer rounded-full right-8 transition-all duration-500`}
    style={{
      transform: hoveredItem === item.id ? 'scale(1)' : 'scale(0)',
      opacity: hoveredItem === item.id ? '1' : '0',
    }}
  /></Link>
  <HiShoppingBag
    className={`text-white m-2 text-4xl bottom-8 absolute bg-rose-900 p-2 cursor-pointer rounded-full right-8 transition-all duration-500`}
    style={{
      transform: hoveredItem === item.id ? 'scale(1)' : 'scale(0)',
      opacity: hoveredItem === item.id ? '1' : '0',
    }}
  />
</div>
            {/* )} */}
          </div>
          <h1 className='self-start mt-6 font-medium'>{item.title}</h1>
         
          <span className='self-start flex'>
             <p className='text-red-500  font-medium'>Rs.{item.price}</p>
          </span>
        </div>
      ))}
    
    
      </div>
    </div>
  );
};

export default AllProducts;