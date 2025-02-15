import { useContext, useState } from 'react';
import { useParams, useNavigate, useLoaderData } from 'react-router-dom';

const FoodDetails = () => {
  const { id } = useParams();

  const food = useLoaderData();

  const navigate = useNavigate();
  const handlePurchase = () => {
    navigate(`/purchase/${food._id}`); // Redirect to purchase page
  };

  // Handle case where food item is not found
  if (!food) {
    return (
      <div className="text-center text-red-500 text-xl mt-10">
        Food item not found!
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-6">
      <div className="bg-white shadow-2xl rounded-xl p-6 max-w-2xl w-full text-center">
        <img
          src={food.image}
          alt={food.name}
          className="w-full h-60 object-cover rounded-lg shadow-md"
        />
        <h2 className="text-3xl font-bold mt-4 text-gray-800">{food.name}</h2>
        <p className="text-gray-600 mt-2">{food.description}</p>
        <div className="flex justify-between items-center mt-4">
          <span className="text-xl font-semibold text-gray-800">
            Origin: {food.origin}
          </span>
          <span className="text-gray-500">Quantity : {food.quantity}</span>
        </div>
        <div className="flex justify-between items-center mt-4">
          <span className="text-xl font-semibold text-gray-800">
            Price: ${food.price}
          </span>
          <span className="text-gray-500">
            PurchaseCount : {food.purchaseCount}
          </span>
        </div>

        <button
          onClick={handlePurchase}
          className="mt-4 px-6 py-2 bg-gradient-to-r from-pink-950 to-purple-600 text-white font-semibold rounded-lg transition cursor-pointer"
        >
          Purchase Now
        </button>
      </div>
    </div>
  );
};

export default FoodDetails;
