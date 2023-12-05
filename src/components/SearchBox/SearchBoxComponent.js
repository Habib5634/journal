// SearchBoxComponent.js
import React from 'react';
import { useSearch } from '../../pages/Context/SearchContext';


const SearchBoxComponent = () => {
  const { updateSearchQuery } = useSearch();

  const handleSearchChange = (e) => {
    updateSearchQuery(e.target.value);
  };

  return (
    <input
      type="text"
      placeholder="Search Products"
      className='h-fit rounded-full border border-sky-900 px-3 py-1'
      onChange={handleSearchChange}
    />
  );
};

export default SearchBoxComponent;