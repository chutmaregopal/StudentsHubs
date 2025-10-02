import React, { useState } from 'react';
import { navData } from './data.js';

// MegaMenu Component (koi badlav nahi)
const MegaMenu = ({ columns }) => {
  return (
    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-[-1px] bg-[#1f1f1f] border border-gray-700 rounded-b-lg shadow-lg p-6 z-30"> {/* z-index badhaya */}
      <div className="flex gap-8">
        {columns.map(col => (
          <div key={col.title} className="flex-shrink-0">
            <h3 className="font-bold text-white mb-4 flex items-center gap-1">{col.title} <span className="text-orange-400 text-xs">▼</span></h3>
            
            {col.type === 'iconLinks' && (
              <ul className="space-y-3">
                {col.items.map(item => <li key={item.text}><a href="#" className="flex items-center gap-3 text-gray-300 hover:text-white"><item.icon /><span>{item.text}</span></a></li>)}
              </ul>
            )}

            {col.type === 'videoThumbnails' && (
              <div className="space-y-4">
                {col.items.map(item => (
                  <a href="#" key={item.id} className="flex items-center gap-2 group">
                    <img src={item.img} alt={item.title} className="w-24 h-14 object-cover rounded" />
                    <div>
                      <p className="text-white text-sm font-semibold group-hover:underline">{item.title}</p>
                      <p className="text-gray-400 text-xs">{item.creator}</p>
                    </div>
                  </a>
                ))}
              </div>
            )}
            
            {/* ... baaki ke menu types ... */}
          </div>
        ))}
      </div>
    </div>
  );
};

// SimpleDropdown Component (koi badlav nahi)
const SimpleDropdown = ({ content }) => {
    if (content.type === 'grid') {
        return (
           <div className="absolute top-full left-0 bg-[#1f1f1f] border border-gray-700 p-4 rounded-b-lg shadow-lg w-96 z-50">
                <div className="grid grid-cols-2 gap-4">
                    {content.links.map(link => <a key={link} href="#" className="text-gray-300 hover:text-orange-400">{link}</a>)}
                </div>
            </div>
        );
    }
    // ...
};

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(null);

  return (
    <> {/* Fragment ka istemaal karein */}
      {/* YEH HAI AAPKA NAYA OVERLAY */}
      {/* Yeh tabhi dikhega jab 'activeMenu' null nahi hoga */}
      {activeMenu && (
        <div 
          className="fixed top-0 left-0 w-full h-full bg-black/60 z-10"
          onClick={() => setActiveMenu(null)} // Overlay par click karke menu band karein
        ></div>
      )}

      <nav 
        className="bg-transparent text-white sticky top-[68px] z-20"
        onMouseLeave={() => setActiveMenu(null)}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-center h-12">
            <div className="flex items-center space-x-8 font-semibold">
              {navData.map(item => (
                <div 
                  key={item.title} 
                  className="relative h-full flex items-center"
                  onMouseEnter={() => item.dropdown && setActiveMenu(item.title)}
                >
                  <a href="#" className="text-gray-300 hover:text-white flex items-center gap-1 border-b-2 border-transparent h-full pb-2 data-[active=true]:text-orange-400 data-[active=true]:border-orange-400" data-active={activeMenu === item.title}>
                    {item.title}
                    {item.dropdown && <span className="text-xs">▼</span>}
                  </a>
                  {item.dropdown && activeMenu === item.title && (
                    item.content.type === 'mega-menu' 
                      ? <MegaMenu columns={item.content.columns} /> 
                      : <SimpleDropdown content={item.content} />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;