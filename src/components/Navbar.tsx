import { useState } from 'react';
import logo from '../assets/untitled-logo.svg';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="px-4 md:px-8 py-6 bg-[#53389e]">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-8">
          <div className="flex items-center space-x-2">
            <img src={logo} alt="Untitled UI" className="w-10 h-10" />
            <span className="text-white text-xl font-semibold">Untitled UI</span>
          </div>

          <div className="hidden md:flex items-center space-x-6 font-medium">
            <a href="#" className="text-white hover:text-gray-200 transition">Home</a>
            <button className="text-white hover:text-gray-200 transition flex items-center space-x-1">
              <span>Products</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <button className="text-white hover:text-gray-200 transition flex items-center space-x-1">
              <span>Resources</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <a href="#" className="text-white hover:text-gray-200 transition">Pricing</a>
          </div>
        </div>
        
        {/* Desktop buttons */}
        <div className="hidden md:flex items-center space-x-4 font-medium">
          <button className="text-white hover:text-gray-200 transition px-4 py-2">
            Log in
          </button>
          <button className="bg-[#7F56D9] text-white transition px-4 py-2 rounded-lg font-medium">
            Sign up
          </button>
        </div>

        {/* Mobile menu button */}
        <button 
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <svg width="20" height="14" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 7H19M1 1H19M1 13H19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>

      {/* Mobile menu dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-4 pb-4 border-t border-purple-400/20">
          <div className="flex flex-col space-y-4 mt-4">
            <a href="#" className="text-white hover:text-gray-200 transition px-2">Home</a>
            <button className="text-white hover:text-gray-200 transition flex items-center space-x-1 px-2">
              <span>Products</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <button className="text-white hover:text-gray-200 transition flex items-center space-x-1 px-2">
              <span>Resources</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <a href="#" className="text-white hover:text-gray-200 transition px-2">Pricing</a>
            <div className="flex flex-col space-y-3 pt-4 border-t border-purple-400/20">
              <button className="text-white hover:text-gray-200 transition px-2 text-left">
                Log in
              </button>
              <button className="bg-[#7F56D9] text-white px-4 py-2 rounded-lg font-medium mx-2">
                Sign up
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;