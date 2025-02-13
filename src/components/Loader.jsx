import { motion } from 'framer-motion';
import { FaSpinner } from 'react-icons/fa';

const Loader = ({ size = 'medium', message = 'Loading...' }) => {
  const sizeClasses = {
    small: 'w-6 h-6 text-sm',
    medium: 'w-10 h-10 text-base',
    large: 'w-16 h-16 text-lg',
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[200px]">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1 }}
      >
        <FaSpinner
          className={`animate-spin ${sizeClasses[size]} text-blue-500`}
        />
      </motion.div>
      <p className="mt-3 text-gray-600">{message}</p>
    </div>
  );
};

export default Loader;
