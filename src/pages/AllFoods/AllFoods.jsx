import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiSearch } from 'react-icons/fi';
import Marquee from 'react-fast-marquee';
import axios from 'axios';

// Fetch all food items
const AllFoods = () => {
  const [foods, setFoods] = useState([]);
  const [search, setSearch] = useState('');
  console.log(foods);
  useEffect(() => {
    const fetchAllFoods = async () => {
      const { data } = await axios.get(`
      ${import.meta.env.VITE_API_URL}/foods?search=${search}
        `);
      setFoods(data);
    };
    fetchAllFoods();
  }, [search]);

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Page Title */}
      <div
        className="relative h-[300px] bg-no-repeat bg-cover bg-center flex justify-center items-center  text-6xl font-bold text-white"
        style={{ backgroundImage: "url('/public/different_foods.jpg')" }}
      >
        <Marquee> 🍕 All Foods below , Please choose your favorite.🍔 </Marquee>
      </div>

      {/* Search Bar */}
      <div className="flex justify-center items-center">
        <div className="relative w-80 my-4">
          <input
            type="text"
            placeholder="Search for a food..."
            className="w-full p-3 pl-10 border rounded-full shadow-md focus:outline-none placeholder:text-lg font-medium"
            onChange={e => setSearch(e.target.value)}
          />
          <FiSearch className="absolute right-3 top-3 text-gray-700 text-3xl" />
        </div>
      </div>

      {/* Food Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 px-10 py-6">
        {foods.length > 0 ? (
          foods.map(food => (
            <motion.div
              key={food._id}
              className="bg-white p-4 rounded-xl shadow-lg hover:shadow-2xl transform transition-all duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <img
                src={food.image}
                alt={food.name}
                className="w-full h-40 object-cover rounded-lg"
              />
              <h3 className="mt-3 text-lg font-semibold bg-gradient-to-r from-indigo-800 via-purple-700 to-pink-600 bg-clip-text text-transparent">
                {food.name}
              </h3>
              <p className="text-gray-600 text-sm">
                {food.description.substring(0, 35)}......
              </p>

              <div>
                <p className=" font-medium text-sm text-green-600">
                  Purchase Count : {food.purchaseCount}
                </p>
                <p className="text-gray-600 text-sm">
                  Quantity: {food.quantity}
                </p>
              </div>
              <div className="mt-4 flex justify-between items-center">
                <span className=" font-bold text-green-600">
                  Price : ${food.price}
                </span>
                <Link
                  to={`/foods/${food._id}`}
                  className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg shadow-md hover:bg-blue-600"
                >
                  Details
                </Link>
              </div>
            </motion.div>
          ))
        ) : (
          <p className="text-center text-gray-500">No food items found.</p>
        )}
      </div>
    </div>
  );
};

export default AllFoods;
