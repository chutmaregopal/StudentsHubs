import React from 'react';
import { FaSearch } from 'react-icons/fa';

const SearchBar = () => {
  return (
    <div className="relative w-full max-w-xl">
      <input
        type="text"
        placeholder="Search..."
        className="w-full bg-gray-900 bg-opacity-70 text-white border border-gray-700 rounded-full py-3 pl-6 pr-12 focus:outline-none focus:ring-2 focus:ring-purple-500"
      />
      <button className="absolute right-0 top-0 h-full px-5 text-gray-400 hover:text-white">
        <FaSearch size={20} />
      </button>
    </div>
  );
};

export default SearchBar;