import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiSearch } from 'react-icons/fi';

// Fetch all food items
const AllFoods = () => {
  const [foods, setFoods] = useState([]);
  console.log(foods);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/foods`)
      .then(res => res.json())
      .then(data => setFoods(data))
      .catch(error => console.error('Error fetching foods:', error));
  }, []);

  // Search functionality
  const filteredFoods = foods.filter(food =>
    food.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Page Title */}
      <div
        className="relative h-[250px] bg-cover bg-center flex justify-center items-center  text-4xl font-bold"
        style={{ backgroundImage: "url('/your-banner-image.jpg')" }}
      >
        All Foods
      </div>

      {/* Search Bar */}
      <div className="flex justify-center my-5">
        <div className="relative w-80">
          <input
            type="text"
            placeholder="Search for a food..."
            className="w-full p-3 pl-10 border rounded-full shadow-md focus:outline-none"
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
          />
          <FiSearch className="absolute left-3 top-3 text-gray-500" />
        </div>
      </div>

      {/* Food Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 px-10 py-6">
        {filteredFoods.length > 0 ? (
          filteredFoods.map(food => (
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
              <h3 className="mt-3 text-lg font-semibold">{food.name}</h3>
              <p className="text-gray-600">Quantity: {food.quantity}</p>
              <div className="mt-4 flex justify-between items-center">
                <span className="text-xl font-bold text-green-600">
                  ${food.price}
                </span>
                <Link
                  to={`/foods/${food._id}`}
                  className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600"
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
