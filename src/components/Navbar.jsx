import { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import AuthContext from '../context/AuthContext';
import { toast } from 'react-toastify';
import { motion } from 'framer-motion';

const Navbar = () => {
  const { user, signOutUser } = useContext(AuthContext);

  const handleLogOut = () => {
    signOutUser()
      .then(() => {
        toast.success('Food added successfully!', {
          style: {
            background: 'black',
            color: 'white',
            borderRadius: '8px',
            padding: '12px',
          },
        });
      })
      .catch(error => {
        toast.error(`🦄${error.message} `);
      });
  };
  const links = (
    <>
      <NavLink to={'/'}>
        <li>Home</li>
      </NavLink>
      <NavLink to={'/foods'}>
        <li>All Foods</li>
      </NavLink>
      <NavLink to={'/gallery'}>
        <li>Gallery</li>
      </NavLink>
      <NavLink to={'/myfoods'}>
        <li>My Foods</li>
      </NavLink>
    </>
  );
  return (
    <div className="navbar fixed top-0 left-0 w-full bg-gray-800 text-white p-4 z-50 shadow-md">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <motion.button
            onClick={handleLogOut}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className=" px-4 py-2 text-lg font-semibold text-white bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg shadow-lg transition-all duration-300 backdrop-blur-md border border-white/20"
          >
            LogOut
            <span className="absolute inset-0 bg-white opacity-10 rounded-lg blur-lg"></span>
          </motion.button>
        ) : (
          <Link to={'/login'}>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className=" px-4 py-2 text-lg font-semibold text-white bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg shadow-lg transition-all duration-300 backdrop-blur-md border border-white/20"
            >
              Login
              <span className="absolute inset-0 bg-white opacity-10 rounded-lg blur-lg"></span>
            </motion.button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
