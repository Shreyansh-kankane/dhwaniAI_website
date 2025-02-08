import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Menu, X } from 'lucide-react';

const Navbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  
  const isActive = (path: string) => location.pathname === path;

  const navItems = [
    { path: '/products', label: 'Products' },
    { path: '/demo', label: 'Demo' },
    { path: '/pricing', label: 'Pricing' },
    { path: '/story', label: 'Our Story' },
    { path: '/contact', label: 'Contact' },
  ];
  
  return (
    <nav className="bg-white shadow-lg relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <Phone className="h-8 w-8 text-indigo-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">Dhwani AI</span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            {navItems.map(({ path, label }) => (
              <Link
                key={path}
                to={path}
                className={`px-3 py-2 rounded-md text-sm font-medium ${
                  isActive(path)
                    ? 'text-indigo-600 bg-indigo-50'
                    : 'text-gray-700 hover:text-indigo-600 hover:bg-indigo-50'
                }`}
              >
                {label}
              </Link>
            ))}
            <button className="ml-4 px-4 py-2 rounded-md text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Get Started
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="sm:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-indigo-600 hover:bg-indigo-50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            >
              {isOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Sheet */}
      <div
        className={`fixed inset-0 bg-gray-800 bg-opacity-75 z-40 transition-opacity duration-300 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsOpen(false)}
      ></div>

      <div
        className={`fixed top-0 right-0 w-64 bg-white h-screen p-6 space-y-6 transform transition-transform duration-300 ease-in-out z-50 md:hidden ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center" onClick={() => setIsOpen(false)}>
            <Phone className="h-8 w-8 text-indigo-600" />
            <span className="ml-2 text-xl font-bold text-gray-900">Dhwani AI</span>
          </Link>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 rounded-md text-gray-700 hover:text-indigo-600 hover:bg-indigo-50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
          >
            <X className="block h-6 w-6" />
          </button>
        </div>
        <div className="flex flex-col space-y-3">
          {navItems.map(({ path, label }) => (
            <Link
              key={path}
              to={path}
              onClick={() => setIsOpen(false)}
              className={`px-3 py-2 rounded-md text-sm font-medium ${
                isActive(path)
                  ? 'text-indigo-600 bg-indigo-50'
                  : 'text-gray-700 hover:text-indigo-600 hover:bg-indigo-50'
              }`}
            >
              {label}
            </Link>
          ))}
          <button
            onClick={() => setIsOpen(false)}
            className="mt-4 w-full px-4 py-2 rounded-md text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;