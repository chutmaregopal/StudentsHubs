import React, { useState } from 'react';
import Logo from './Logo.jsx';
import { FaSearch, FaGlobe, FaUserCircle, FaSignInAlt, FaUserPlus, FaHeart } from 'react-icons/fa';

// Profile Dropdown Component
const ProfileDropdown = () => (
    <div className="absolute top-full right-0 mt-2 bg-[#1f1f1f] border border-gray-700 p-4 rounded-lg shadow-lg w-48 text-left">
        <ul className="space-y-3">
            <li><a href="#" className="flex items-center gap-2 text-gray-300 hover:text-orange-400"><FaSignInAlt /><span>Log In</span></a></li>
            <li><a href="#" className="flex items-center gap-2 text-gray-300 hover:text-orange-400"><FaUserPlus /><span>Sign Up</span></a></li>
            <li><a href="#" className="flex items-center gap-2 text-gray-300 hover:text-orange-400"><FaHeart /><span>Liked Videos</span></a></li>
        </ul>
    </div>
);


const Header = () => {
  const [profileOpen, setProfileOpen] = useState(false);

  return (
    <header className="bg-black/30 backdrop-blur-lg text-white p-3 flex items-center gap-6 sticky top-0 z-30">
      <div className="flex-shrink-0">
        <Logo />
      </div>
      <div className="flex-grow relative">
        <input 
          type="text"
          placeholder="Search videos..."
          className="bg-black/50 border border-gray-700 w-full rounded-full py-2 pl-5 pr-12 focus:outline-none focus:ring-2 focus:ring-orange-500 text-white"
        />
        <FaSearch className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-500" />
      </div>
      <div className="flex items-center gap-4 flex-shrink-0">
        <button className="flex items-center gap-2 text-gray-400 hover:text-white">
          <FaGlobe />
          <span>EN</span>
        </button>
        <div className="relative">
            <button 
                onClick={() => setProfileOpen(!profileOpen)}
                className="text-gray-400 hover:text-white"
            >
                <FaUserCircle size={24} />
            </button>
            {profileOpen && <ProfileDropdown />}
        </div>
      </div>
    </header>
  );
};

export default Header;