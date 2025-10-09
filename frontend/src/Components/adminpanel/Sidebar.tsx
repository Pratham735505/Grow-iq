import { useState } from "react";
import { Link } from "react-router-dom";
import { logout } from "../../utils/adminauth";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleLogout = () => {
    if (window.confirm("Do you really want to logout?")) {
      logout();
      window.location.href = "/";
    }
  };

  return (
    <>
      {/* Mobile Hamburger */}
      <button
        className="fixed top-4 left-4 z-50 md:hidden p-2 rounded-md bg-blue-600 text-white shadow"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="block w-6 h-0.5 bg-white mb-1"></span>
        <span className="block w-6 h-0.5 bg-white mb-1"></span>
        <span className="block w-6 h-0.5 bg-white"></span>
      </button>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-md p-6 z-40 transform transition-transform duration-300
          ${isOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0 md:relative md:h-screen`}
      >
        <h1 className="text-2xl font-bold text-blue-600 mb-8">Admin Panel</h1>
        <nav className="flex flex-col gap-4">
          <Link
            to="/admin/dashboard"
            className="hover:text-blue-600"
            onClick={() => setIsOpen(false)}
          >
            Dashboard
          </Link>
          <Link
            to="/admin/notices"
            className="hover:text-blue-600"
            onClick={() => setIsOpen(false)}
          >
            Notices
          </Link>
          <Link
            to="/admin/timetable"
            className="hover:text-blue-600"
            onClick={() => setIsOpen(false)}
          >
            Time Table
          </Link>
          <Link
            to="/admin/login-history"
            className="hover:text-blue-600"
            onClick={() => setIsOpen(false)}
          >
            Login History
          </Link>
          <button
            className="text-red-500 mt-6 hover:text-red-700 transition"
            onClick={handleLogout}
          >
            Logout
          </button>
        </nav>
      </div>

      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-30 md:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </>
  );
}
