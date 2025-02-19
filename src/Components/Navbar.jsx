import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-black shadow-md fixed w-full z-90">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <a href="/" className="text-2xl font-extrabold text-yellow-400">
              Cozy Café
            </a>
          </div>

          {/* Hamburger Menu (Mobile) */}
          <div className="flex items-center md:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md  text-yellow-400 hover:text-white focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            <a
              href="/"
              className="text-gray-200 hover:text-yellow-400 rounded-md text-sm font-medium transition duration-300"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-gray-200 hover:text-yellow-400 px-3 py-2 rounded-md text-sm font-medium transition duration-300"
            >
              About
            </a>
            <a
              href="#services"
              className="text-gray-200 hover:text-yellow-400 px-3 py-2 rounded-md text-sm font-medium transition duration-300"
            >
              Services
            </a>
            <a
              href="#menu"
              className="text-gray-200 hover:text-yellow-400 px-3 py-2 rounded-md text-sm font-medium transition duration-300"
            >
              Menu
            </a>
            <a
              href="#contact"
              className="text-gray-200 hover:text-yellow-400 px-3 py-2 rounded-md text-sm font-medium transition duration-300"
            >
              Contact
            </a>
          </div>
        </div>
      </div>

      {/* Mobile Menu (Dropdown) */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="/"
              className="block text-gray-200 hover:text-yellow-400 px-3 py-2 rounded-md text-base font-medium transition duration-300"
            >
              Home
            </a>
            <a
              href="#about"
              className="block text-gray-200 hover:text-yellow-400 px-3 py-2 rounded-md text-base font-medium transition duration-300"
            >
              About
            </a>
            <a
              href="#services"
              className="block text-gray-200 hover:text-yellow-400 px-3 py-2 rounded-md text-base font-medium transition duration-300"
            >
              Services
            </a>
            <a
              href="#menu"
              className="block text-gray-200 hover:text-yellow-400 px-3 py-2 rounded-md text-base font-medium transition duration-300"
            >
              Menu
            </a>
            <a
              href="#contact"
              className="block text-gray-200 hover:text-yellow-400 px-3 py-2 rounded-md text-base font-medium transition duration-300"
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
