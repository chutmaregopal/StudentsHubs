import React from 'react';

const CookiePopup = ({ onAccept }) => {
  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 bg-[#1f1f1f] border border-gray-700 text-white p-4 rounded-lg shadow-lg flex items-center gap-4 z-40 max-w-lg w-full">
      <div className="flex-grow">
        <p className="text-sm">
          This site uses cookies to help improve your user experience.
        </p>
        <a href="#" className="text-xs text-orange-400 hover:underline">Customize Cookies</a>
      </div>
      <button 
        onClick={onAccept}
        className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-6 rounded"
      >
        OK
      </button>
    </div>
  );
};

export default CookiePopup;