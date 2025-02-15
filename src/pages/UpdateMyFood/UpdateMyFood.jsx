//
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';

import { useContext, useEffect, useState } from 'react';

const UpdateMyFood = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [food, setFood] = useState(null);
  const [isLoading, setIsLoading] = useState(true); // Local loading state
  const [error, setError] = useState(null); // Error handling
  console.log(food);
  console.log('Food ID:', id);

  useEffect(() => {
    if (!id) {
      setError('Food ID is missing!');
      setIsLoading(false);
      return;
    }
    fetchSingleAddedFood();
  }, [id]);

  const fetchSingleAddedFood = async () => {
    try {
      console.log('Fetching:', `${import.meta.env.VITE_API_URL}/myfood/${id}`);
      const { data } = await axios.get(
        `${import.meta.env.VITE_API_URL}/myfood/${id}`
      );

      if (!data) {
        setError('No data found for this food item.');
        setIsLoading(false);
        return;
      }

      setFood(data);
    } catch (error) {
      console.error('Error fetching food data:', error);
      setError('Failed to fetch food data!');
    } finally {
      setIsLoading(false);
    }
  };

  const handleUpdate = async e => {
    e.preventDefault();
    const updatedFood = {
      name: e.target.name.value,
      price: parseFloat(e.target.price.value),
      quantity: parseInt(e.target.quantity.value, 10), // Fixed quantity issue
      image: e.target.image.value,
      description: e.target.description.value,
    };

    console.log('Updated Food:', updatedFood);

    try {
      await axios.put(
        `${import.meta.env.VITE_API_URL}/myfood/${id}`,
        updatedFood
      );
      toast.success('Food updated successfully!');
      navigate('/myfoods'); // Redirect to My Foods Page
    } catch (error) {
      console.error('Update Error:', error);
      toast.error('Failed to update food!');
    }
  };

  if (isLoading)
    return <p className="text-center text-lg">Loading food data...</p>;
  if (error) return <p className="text-center text-lg text-red-500">{error}</p>;
  if (!food) return <p className="text-center text-lg">No food found!</p>;

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-xl p-6 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-4">
          Update your Food
        </h2>
        <form onSubmit={handleUpdate} className="space-y-4">
          {/* Food Name */}
          <div className="form-control mb-4">
            <label className="label">
              <span className="label-text font-semibold">Food name :</span>
            </label>
            <input
              type="text"
              name="name"
              defaultValue={food?.name}
              placeholder="Food Name"
              className="w-full p-2 border rounded-lg"
              required
            />
          </div>

          {/* Price */}
          <div className="form-control mb-4">
            <label className="label">
              <span className="label-text font-semibold">Price :</span>
            </label>
            <input
              type="number"
              name="price"
              defaultValue={food?.price}
              placeholder="Price"
              className="w-full p-2 border rounded-lg"
              required
            />
          </div>

          {/* Quantity */}
          <div className="form-control mb-4">
            <label className="label">
              <span className="label-text font-semibold">Quantity :</span>
            </label>
            <input
              type="number"
              name="quantity"
              min={1}
              defaultValue={food?.quantity}
              placeholder="Quantity"
              className="w-full p-2 border rounded-lg"
              required
            />
          </div>

          {/* Image URL */}
          <div className="form-control mb-4">
            <label className="label">
              <span className="label-text font-semibold">Image URL :</span>
            </label>
            <input
              type="text"
              name="image"
              defaultValue={food?.image}
              placeholder="Image URL"
              className="w-full p-2 border rounded-lg"
              required
            />
          </div>

          {/* Description */}
          <div className="form-control mb-4">
            <label className="label">
              <span className="label-text font-semibold">
                Food Description :
              </span>
            </label>
            <textarea
              name="description"
              defaultValue={food?.description}
              placeholder="Description"
              className="w-full p-2 border rounded-lg"
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white p-2 rounded-lg hover:bg-blue-600 transition"
          >
            Update Food
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateMyFood;
