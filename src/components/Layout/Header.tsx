import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Film,
  Menu,
  X,
  User,
  LogOut,
  ChevronDown
} from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const { isAuthenticated, user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
    setIsUserMenuOpen(false);
  };

  return (
    <header className="bg-[#183B44] sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center space-x-2 text-white hover:text-cyan-300 transition-colors"
          >
            <Film className="h-8 w-8" />
            <span className="font-bold text-xl">FilmFest</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-white hover:underline transition">Home</Link>
            <Link to="/explore" className="text-white hover:underline transition">Explore</Link>
            <Link to="/festivals" className="text-white hover:underline transition">Festivals</Link>
            <Link to="/submit" className="text-white hover:underline transition">Submit</Link>
            <Link to="/news" className="text-white hover:underline transition">News</Link>
          </nav>

          {/* Right Side */}
          <div className="hidden md:flex items-center space-x-4">
            {isAuthenticated ? (
              <div className="relative">
                <button
                  onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                  className="flex items-center space-x-2 p-2 text-white hover:text-cyan-300 transition"
                >
                  <User className="h-5 w-5" />
                  <span className="text-sm">{user?.name}</span>
                  <ChevronDown className="h-4 w-4" />
                </button>

                <AnimatePresence>
                  {isUserMenuOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5"
                    >
                      <Link
                        to="/dashboard"
                        className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-t-md"
                        onClick={() => setIsUserMenuOpen(false)}
                      >
                        <User className="mr-3 h-4 w-4" />
                        Dashboard
                      </Link>
                      <button
                        onClick={handleLogout}
                        className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-b-md"
                      >
                        <LogOut className="mr-3 h-4 w-4" />
                        Logout
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <div className="flex items-center space-x-4">
                <Link
                  to="/login"
                  className="bg-[#0791B5] text-white font-semibold px-4 py-1.5 rounded hover:bg-[#0f9ed1] transition"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="bg-transparent border border-white text-white font-semibold px-4 py-1.5 rounded hover:bg-white hover:text-[#183B44] transition"
                >
                  Register
                </Link>
              </div>
            )}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-white hover:text-cyan-300 transition"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#183B44] border-t border-cyan-700"
          >
            <div className="px-4 py-2 space-y-1">
              <Link to="/" className="block px-3 py-2 text-white hover:underline" onClick={() => setIsMenuOpen(false)}>Home</Link>
              <Link to="/explore" className="block px-3 py-2 text-white hover:underline" onClick={() => setIsMenuOpen(false)}>Explore</Link>
              <Link to="/festivals" className="block px-3 py-2 text-white hover:underline" onClick={() => setIsMenuOpen(false)}>Festivals</Link>
              <Link to="/submit" className="block px-3 py-2 text-white hover:underline" onClick={() => setIsMenuOpen(false)}>Submit</Link>
              <Link to="/news" className="block px-3 py-2 text-white hover:underline" onClick={() => setIsMenuOpen(false)}>News</Link>

              <div className="border-t border-cyan-700 pt-2">
                {isAuthenticated ? (
                  <>
                    <Link
                      to="/dashboard"
                      className="block px-3 py-2 text-white hover:underline"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Dashboard
                    </Link>
                    <button
                      onClick={() => {
                        handleLogout();
                        setIsMenuOpen(false);
                      }}
                      className="block w-full text-left px-3 py-2 text-white hover:underline"
                    >
                      Logout
                    </button>
                  </>
                ) : (
                  <>
                    <Link
                      to="/login"
                      className="block px-3 py-2 bg-[#0791B5] text-white rounded hover:bg-[#0f9ed1]"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Login
                    </Link>
                    <Link
                      to="/register"
                      className="block px-3 py-2 border border-white text-white rounded hover:bg-white hover:text-[#183B44]"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Register
                    </Link>
                  </>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
