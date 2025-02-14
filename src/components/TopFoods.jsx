import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const TopFoods = () => {
  const [foods, setFoods] = useState([]);
  const navigate = useNavigate();
  console.log(foods);
  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/top-foods`) // Backend API
      .then(res => res.json())
      .then(data => setFoods(data));
  }, []);

  return (
    <div className="max-w-6xl mx-auto py-10">
      <h2 className="text-3xl font-bold text-center mb-6">
        🔥 Top Selling Foods 🔥
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {foods.map(food => (
          <div key={food._id} className="bg-white shadow-lg rounded-lg p-4">
            <img
              src={food.image}
              alt={food.name}
              className="w-full h-40 object-cover rounded-lg"
            />
            <h3 className="text-xl font-semibold mt-2">{food.name}</h3>
            <p className="text-gray-950 font-thin">Price: ${food.price}</p>
            <p className="text-gray-950 font-thin">
              Sold: {food.purchaseCount} times
            </p>
            <button
              onClick={() => navigate(`/foods/${food._id}`)}
              className="mt-3 bg-gradient-to-r from-pink-950 to-purple-600 text-white px-4 py-2 rounded-lg "
            >
              Details
            </button>
          </div>
        ))}
      </div>

      {/* See All Button */}
      <div className="text-center mt-6">
        <button
          onClick={() => navigate('/foods')}
          className="bg-gradient-to-r from-pink-950 to-green-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-green-600"
        >
          See All
        </button>
      </div>
    </div>
  );
};

export default TopFoods;
