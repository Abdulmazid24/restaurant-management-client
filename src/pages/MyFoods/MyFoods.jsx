import React, { useContext, useEffect, useState } from 'react';
import AuthContext from '../../context/AuthContext';
import { FaTrash } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const MyFoodsPage = () => {
  const { user } = useContext(AuthContext);
  const [foods, setFoods] = useState([]);

  console.log(foods);
  // Fetch foods added by the logged-in user

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/myfoods/${user?.email}`)
      .then(res => res.json())
      .then(data => setFoods(data))
      .catch(error => console.error('Error fetching foods:', error));
  }, [user]);

  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <h1 className="text-3xl font-bold text-center mb-6">🍽️ My Foods</h1>

      {foods.length === 0 ? (
        <p className="text-center text-gray-600">No foods added yet.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {foods.map(food => (
            <div key={food._id} className="bg-white p-4 shadow-md rounded-lg">
              <img
                src={food.image}
                alt={food.name}
                className="w-full h-40 object-cover rounded-md mb-3"
              />
              <h2 className="text-xl font-semibold">{food.foodName}</h2>
              <p className="text-gray-600">Price: ${food.price}</p>
              <p className="text-gray-600">Description: ${food.description}</p>
              <p className="text-gray-600">Date: {food.date}</p>
              <div className="flex justify-between items-center">
                <Link
                  to={`/update/${food._id}`}
                  className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                  ✏️ Update
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyFoodsPage;
