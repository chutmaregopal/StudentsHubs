import React from 'react';
import Logo from './Logo.jsx'; // Hum naya logo component use karenge

const AgeVerification = ({ onEnter }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-90 flex justify-center items-center z-50">
      <div className="bg-[#1f1f1f] border border-gray-700 p-8 rounded-lg text-center text-white max-w-md w-full">
        <div className="flex justify-center mb-4">
          <Logo />
        </div>
        <h2 className="text-2xl font-bold mb-2">This is an adult website</h2>
        <p className="text-gray-400 mb-6 text-sm">
          By entering, you affirm that you are at least 18 years of age and you consent to viewing sexually explicit content.
        </p>
        <div className="flex justify-center gap-4">
          <button 
            onClick={onEnter}
            className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-10 rounded w-full"
          >
            I am 18 or older - Enter
          </button>
          <button 
            onClick={() => window.location.href = 'https://www.google.com'}
            className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 px-10 rounded w-full"
          >
            I am under 18 - Exit
          </button>
        </div>
      </div>
    </div>
  );
};

export default AgeVerification;