import React, { useState } from 'react';
import { sidebarData } from './data.js';
import { FaThumbsUp, FaFire, FaStar, FaList, FaAngleDown, FaAngleUp } from 'react-icons/fa';

const icons = { FaThumbsUp, FaFire, FaStar, FaList };

const Sidebar = () => {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (title) => {
    setOpenSection(openSection === title ? null : title);
  };
  

  return (
    <aside className="w-64 bg-transparent text-white p-4 flex-shrink-0">
      <ul className="space-y-1">
        {sidebarData.map(item => {
          const Icon = icons[item.icon];
          const isOpen = openSection === item.title;
          return (
            <li key={item.title}>
              <button 
                onClick={() => item.sublinks ? toggleSection(item.title) : null}
                className="w-full flex items-center justify-between gap-3 p-2 rounded-md hover:bg-gray-800/50 font-semibold"
              >
                <div className="flex items-center gap-3">
                  <Icon />
                  <span>{item.title}</span>
                </div>
                {item.sublinks && (isOpen ? <FaAngleUp /> : <FaAngleDown />)}
              </button>
              {item.sublinks && isOpen && (
                <ul className="pl-8 pt-2 space-y-2">
                  {item.sublinks.map(link => (
                    <li key={link}><a href="#" className="text-gray-400 hover:text-white">{link}</a></li>
                  ))}
                </ul>
              )}
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default Sidebar;