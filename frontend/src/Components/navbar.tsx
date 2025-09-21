import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Left: Logo */}
        {/*  <Link to="/" className="flex items-center">
            <img src="/logo.png" alt="Logo" className="h-8 w-auto" />
          </Link>*/}
           <div className="flex-shrink-0">
          <a href="/" className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-purple-500 tracking-wider drop-shadow-sm">
            GROW-IQ
          </a>
        </div>


          {/* Right: Nav Links + Login/Signup */}
          <div className="flex items-center space-x-6">
            {/* Desktop Nav Links */}
            <div className="hidden md:flex space-x-6">
              <Link to="/" className="text-gray-700 hover:text-blue-600 transition">
                Home
              </Link>
              <Link to="/about" className="text-gray-700 hover:text-blue-600 transition">
                About
              </Link>
              <Link to="/services" className="text-gray-700 hover:text-blue-600 transition">
                Services
              </Link>
              <Link to="/contact" className="text-gray-700 hover:text-blue-600 transition">
                Contact
              </Link>
            </div>

            {/* Login / Signup */}
            <div className="flex items-center space-x-4">
              <Link
                to="/login"
                className="px-4 py-2 text-sm font-medium text-gray-700 border border-gray-300 rounded-md hover:bg-gray-100 transition"
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 transition"
              >
                Sign Up
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="text-gray-700 hover:text-blue-600 focus:outline-none"
              >
                {isOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-2 py-3 space-y-2">
            <Link to="/" className="block text-gray-700 hover:text-blue-600 transition">
              Home
            </Link>
            <Link to="/about" className="block text-gray-700 hover:text-blue-600 transition">
              About
            </Link>
            <Link to="/services" className="block text-gray-700 hover:text-blue-600 transition">
              Services
            </Link>
            <Link to="/contact" className="block text-gray-700 hover:text-blue-600 transition">
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
