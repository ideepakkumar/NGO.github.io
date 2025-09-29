import React from 'react';

const Logo = ({ className = "h-16 w-16" }) => {
  return (
    <div className={`${className} flex flex-col items-center justify-center`}>
      {/* Logo Graphic - Stylized Heart */}
      <div className="relative w-full h-full flex items-center justify-center">
        {/* Main Heart Shape */}
        <div className="relative w-20 h-20 flex items-center justify-center">
          {/* Supporting Hands at bottom */}
          <div className="absolute -bottom-2 left-1 w-6 h-4 bg-orange-500 rounded-full transform -rotate-12"></div>
          <div className="absolute -bottom-2 right-1 w-6 h-4 bg-green-500 rounded-full transform rotate-12"></div>
          
          {/* Human Figures */}
          <div className="absolute left-2 top-2 w-4 h-6 bg-teal-600 rounded-full flex items-center justify-center">
            <div className="w-2 h-2 bg-white rounded-full"></div>
          </div>
          <div className="absolute right-2 top-2 w-4 h-6 bg-orange-500 rounded-full flex items-center justify-center">
            <div className="w-2 h-2 bg-white rounded-full"></div>
          </div>
          
          {/* Medical Cross */}
          <div className="absolute top-1 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-teal-600 flex items-center justify-center">
            <div className="w-1 h-3 bg-white"></div>
            <div className="absolute w-3 h-1 bg-white"></div>
          </div>
          
          {/* Sun/Moon Element */}
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-orange-500 rounded-full flex items-center justify-center">
            <div className="w-2 h-2 bg-white rounded-full"></div>
          </div>
          
          {/* Heart outline */}
          <div className="absolute inset-0 border-2 border-teal-600 rounded-full"></div>
        </div>
      </div>
      
      {/* Organization Name */}
      <div className="text-center mt-2">
        <div className="text-sm font-bold text-teal-800">SHYAM NARAYAN</div>
        <div className="text-xs text-orange-500 flex items-center">
          <div className="w-2 h-0.5 bg-orange-500 mr-1"></div>
          SEVA SANSTHAN
          <div className="w-2 h-0.5 bg-orange-500 ml-1"></div>
        </div>
      </div>
    </div>
  );
};

export default Logo;
