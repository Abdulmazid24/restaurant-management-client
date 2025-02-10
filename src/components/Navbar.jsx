import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaBars, FaTimes, FaMoon, FaSun } from 'react-icons/fa';
import AuthContext from '../context/AuthContext';

const Navbar = () => {
  const { user, signOutUser } = useContext(AuthContext);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="bg-gray-950 p-4 shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-white/80">
          🍽️ Restaurant
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-6 text-white/90 font-bold">
          <li>
            <Link to="/" className="hover:text-white">
              Home
            </Link>
          </li>
          <li>
            <Link to="/foods" className="hover:text-white">
              All Foods
            </Link>
          </li>
          <li>
            <Link to="/gallery" className="hover:text-white">
              Gallery
            </Link>
          </li>
          {user ? (
            <div className="relative group">
              <img
                src={user.photoURL || 'https://via.placeholder.com/40'}
                alt="Profile"
                className="w-10 h-10 rounded-full cursor-pointer border-2 border-white"
              />
              <ul className="absolute left-0 mt-2 w-32 bg-white text-black rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-semibold text-center">
                <li className="px-4 py-2 hover:bg-gradient-to-r from-pink-950 to-purple-600 hover:p-2 rounded-md hover:text-white cursor-pointer ">
                  <Link to="/myfoods">My Foods</Link>
                </li>
                <li className="px-4 py-2 hover:bg-gradient-to-r from-pink-950 to-purple-600 hover:p-2 rounded-md hover:text-white cursor-pointer">
                  <Link to="/addFood">Add Food</Link>
                </li>
                <li className="px-4 py-2  hover:bg-gradient-to-r from-pink-950 to-purple-600 hover:p-2 rounded-md hover:text-white cursor-pointer">
                  <Link to="/my-orders">My Orders</Link>
                </li>
                <li
                  className="px-4 py-2 text-red-500 cursor-pointer hover:bg-red-700 hover:text-white hover:font-extrabold hover:p-2 rounded-md"
                  onClick={signOutUser}
                >
                  Logout
                </li>
              </ul>
            </div>
          ) : (
            <li>
              <Link to="/login" className="hover:text-white">
                Login
              </Link>
            </li>
          )}
        </ul>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white" onClick={toggleMenu}>
          {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-white text-black p-4 absolute rounded-md px-4 text-center font-semibold"
        >
          <ul className="flex flex-col space-y-4">
            <li className="hover:bg-gradient-to-r from-pink-950 to-purple-600 hover:p-2 rounded-md hover:text-white cursor-pointer">
              <Link to="/" onClick={toggleMenu}>
                Home
              </Link>
            </li>
            <li className="hover:bg-gradient-to-r from-pink-950 to-purple-600 hover:p-2 rounded-md hover:text-white cursor-pointer">
              <Link to="/foods" onClick={toggleMenu}>
                All Foods
              </Link>
            </li>
            <li className="hover:bg-gradient-to-r from-pink-950 to-purple-600 hover:p-2 rounded-md hover:text-white cursor-pointer">
              <Link to="/gallery" onClick={toggleMenu}>
                Gallery
              </Link>
            </li>
            {user ? (
              <>
                <li className="hover:bg-gradient-to-r from-pink-950 to-purple-600 hover:p-2 rounded-md hover:text-white cursor-pointer">
                  <Link to="/myfoods" onClick={toggleMenu}>
                    My Foods
                  </Link>
                </li>
                <li className="hover:bg-gradient-to-r from-pink-950 to-purple-600 hover:p-2 rounded-md hover:text-white cursor-pointer">
                  <Link to="/addFood" onClick={toggleMenu}>
                    Add Food
                  </Link>
                </li>
                <li className="hover:bg-gradient-to-r from-pink-950 to-purple-600 hover:p-2 rounded-md hover:text-white cursor-pointer">
                  <Link to="/my-orders" onClick={toggleMenu}>
                    My Orders
                  </Link>
                </li>
                <li
                  className="text-red-500 cursor-pointer hover:bg-red-700 hover:text-white hover:font-extrabold hover:p-2 rounded-md"
                  onClick={signOutUser}
                >
                  Logout
                </li>
              </>
            ) : (
              <li>
                <Link to="/login" onClick={toggleMenu}>
                  Login
                </Link>
              </li>
            )}
          </ul>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
