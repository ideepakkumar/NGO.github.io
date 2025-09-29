import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {

  return (
    <header className="bg-white shadow-lg">
      {/* Main Navigation Bar */}
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo and Name */}
          <div className="flex items-center space-x-4">
            <img 
              src="/logo.png" 
              alt="Shyam Narayan Seva Sansthan Logo" 
              className="w-12 h-12 object-contain"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'flex';
              }}
            />
            <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center" style={{display: 'none'}}>
              <span className="text-white text-xl font-bold">श्</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Shyam Narayan Seva Sansthan</h1>
              <p className="text-sm text-gray-600">Serving Humanity</p>
            </div>
          </div>

            {/* Navigation Links and Donate Button */}
            <nav className="flex items-center space-x-8">
              <Link to="/" className="text-gray-700 hover:text-orange-500 font-medium transition-colors duration-300">Home</Link>
              <Link to="/about" className="text-gray-700 hover:text-orange-500 font-medium transition-colors duration-300">About Us</Link>
              <Link to="/gallery" className="text-gray-700 hover:text-orange-500 font-medium transition-colors duration-300">Gallery</Link>
              <Link to="/contact" className="text-gray-700 hover:text-orange-500 font-medium transition-colors duration-300">Contact</Link>

              {/* Donate Button */}
              <Link
                to="/donate"
                className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-md font-medium transition-colors duration-300"
              >
                Donate Now
              </Link>
            </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
