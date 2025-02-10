import React, { useState } from 'react';
import { useAuth } from '../context/ContextProvider';
import { Link, useNavigate } from 'react-router-dom';
import { Home, Heart, LogIn, LogOut } from 'lucide-react'; // Added LogIn and LogOut icons

const Navbar = () => {
  const { user } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user'); // Also remove user data
    navigate('/login');
  };

  const handleLogin = () => {
    navigate('/login');
  };

  // Early return for a simplified navbar when user is not logged in
  if (!user) {
    return (
      <div className="fixed left-0 top-0 h-screen w-64 bg-gray-100 flex flex-col p-5 shadow-md">
        <div className="flex justify-between items-center mb-8">
          <button
            onClick={handleLogin}
            className="bg-purple-500 text-white py-2 px-4 rounded hover:bg-gray-500 transition flex items-center gap-2"
          >
            <LogIn size={20} /> Login
          </button>
        </div>
        <div className="flex-grow">
          <p className="text-gray-600">Please login to access all features</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="fixed top-4 left-4 z-50 md:hidden p-2 bg-white rounded-lg shadow-md"
      >
        {isMenuOpen ? (
          <span className="text-2xl">✕</span>
        ) : (
          <span className="text-2xl">☰</span>
        )}
      </button>

      {/* Navbar */}
      <div
        className={`
          fixed left-0 top-0 h-screen w-64 bg-gray-100
          transform transition-transform duration-300 ease-in-out
          ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}
          md:translate-x-0 flex flex-col p-5 shadow-md z-40
        `}
      >
        <div className="flex justify-between items-center mb-8 mt-14 md:mt-0">
          <button
            onClick={handleLogout}
            className="bg-purple-500 text-white py-2 px-4 rounded hover:bg-gray-500 transition flex items-center gap-2"
          >
            <LogOut size={20} /> Logout
          </button>
        </div>

        <nav className="flex-grow">
          <ul>
            <li className="mb-4">
              <Link
                to="/"
                onClick={() => setIsMenuOpen(false)}
                className="text-gray-700 hover:text-blue-600 transition flex items-center gap-2"
              >
                <Home size={20} /> Home
              </Link>
            </li>
            <li className="mb-4">
              <Link
                to="/favourites"
                onClick={() => setIsMenuOpen(false)}
                className="text-gray-700 hover:text-blue-600 transition flex items-center gap-2"
              >
                <Heart size={20} /> Favourites
              </Link>
            </li>
          </ul>
        </nav>

        <div className="flex items-center">
          <div>
            <h3 className="text-lg font-semibold text-gray-800">
              {user?.name || 'User'}
            </h3>
            <p className="text-sm text-gray-600">{user?.designation || 'Your Dream Designation'}</p>
          </div>
        </div>
      </div>

      {/* Overlay for mobile menu */}
      {isMenuOpen && (
        <div
          onClick={() => setIsMenuOpen(false)}
          className="fixed inset-0 backdrop-blur bg-opacity-50 z-30 md:hidden"
        />
      )}
    </>
  );
};

export default Navbar;