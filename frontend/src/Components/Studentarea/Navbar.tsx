import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

export default function StudentNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link
              to="/profile"
              className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-purple-500 tracking-wider drop-shadow-sm"
            >
              GROW-IQ
            </Link>
          </div>

          {/* Right: Nav Links + Auth */}
          <div className="flex items-center space-x-6">
            {/* Desktop Nav Links */}
            <div className="hidden md:flex space-x-6">
              <Link to="/profile" className="text-gray-700 hover:text-blue-600 transition">
                Dashboard
              </Link>
              <Link to="/profile/timetable" className="text-gray-700 hover:text-blue-600 transition">
                Timetable
              </Link>
              <Link to="/profile/notices" className="text-gray-700 hover:text-blue-600 transition">
                Notices
              </Link>
              <Link to="/profile/contact" className="text-gray-700 hover:text-blue-600 transition">
                Contact
              </Link>
            </div>

            {/* Auth Section */}
            <div className="flex items-center space-x-4">
              <Link
                to="/signup"
                className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 transition"
              >
                Logout
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden relative">
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
        <div className="absolute right-0 mt-2 bg-white border border-gray-200 rounded-md shadow-lg inline-block min-w-max">
          <div className="px-4 py-2 space-y-2">
            <Link to="/profile" className="block text-gray-700 hover:text-blue-600 transition">
              Dashboard
            </Link>
            <Link to="/profile/timetable" className="block text-gray-700 hover:text-blue-600 transition">
              Timetable
            </Link>
            <Link to="/profile/notices" className="block text-gray-700 hover:text-blue-600 transition">
              Notices
            </Link>
            <Link to="/profile/contact" className="block text-gray-700 hover:text-blue-600 transition">
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
