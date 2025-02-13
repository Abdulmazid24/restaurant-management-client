import { motion } from 'framer-motion';
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from 'react-icons/fa';
import Lottie from 'lottie-react';
import foodAnimation from '../assets/lottie-react/food_animation.json';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 relative">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Brand Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl font-bold text-yellow-400">SmartDine</h2>
            <p className="mt-2 text-gray-400">
              Delicious food, delivered with love.
            </p>
            <div className="flex space-x-4 mt-4">
              <motion.a
                whileHover={{ scale: 1.2 }}
                href="#"
                className="hover:text-yellow-400"
              >
                <FaFacebookF size={20} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.2 }}
                href="#"
                className="hover:text-yellow-400"
              >
                <FaTwitter size={20} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.2 }}
                href="#"
                className="hover:text-yellow-400"
              >
                <FaInstagram size={20} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.2 }}
                href="#"
                className="hover:text-yellow-400"
              >
                <FaLinkedinIn size={20} />
              </motion.a>
            </div>
          </motion.div>

          {/* Lottie Animation */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1 }}
            className="hidden md:block"
          >
            <Lottie
              animationData={foodAnimation}
              loop={true}
              className="w-40 h-40 mx-auto"
            />
          </motion.div>

          {/* Newsletter Subscription */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-xl font-semibold">
              Subscribe to our Newsletter
            </h3>
            <p className="text-gray-400 mt-2">
              Get updates about new dishes and offers.
            </p>
            <div className="mt-4 flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 rounded-l bg-gray-800 text-white outline-none"
              />
              <button className="px-4 py-2 bg-yellow-400 text-gray-900 font-semibold rounded-r hover:bg-yellow-500 transition-all">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-8 text-center text-gray-500"
        >
          &copy; {new Date().getFullYear()} Restaurant Name. All rights
          reserved.
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
