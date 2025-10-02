import React from 'react';
import { footerData } from '../data.js';

const Footer = () => {
  return (
    // YAHAN CHANGES KIYE HAIN: Background transparent aur upar ek line
    <footer className="bg-transparent border-t border-white/10 text-gray-400 py-10 px-8 mt-10">
      <div className="max-w-screen-2xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
        {Object.entries(footerData).map(([title, links]) => (
          <div key={title}>
            <h3 className="font-bold text-white mb-4">{title}</h3>
            <ul className="space-y-2">
              {links.map(link => (
                <li key={link}>
                  {/* YAHAN BHI CHANGES KIYE HAIN: Neon hover effect */}
                  <a href="#" className="hover:text-cyan-400 text-sm transition-colors duration-200">{link}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <p>CopyRights For StudentsHubs
  
      </p>
    </footer>
  );
};

export default Footer;