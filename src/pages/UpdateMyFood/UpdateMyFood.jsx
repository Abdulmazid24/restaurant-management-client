import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';

const UpdateMyFood = () => {
  const { id } = useParams(); // Get food ID from URL
  console.log(id);
  const navigate = useNavigate();
  const [food, setFood] = useState(null);
  const [loading, setLoading] = useState(true);
  console.log(food);
  // Fetch food data based on ID
  useEffect(() => {
    fetchSinglePurchaseFood();
  }, []);

  const fetchSinglePurchaseFood = async () => {
    const { data } = await axios.get(
      `${import.meta.env.VITE_API_URL}/myfood/${id}`
    );
    setFood(data);
  };
  useEffect(() => {
    const fetchFood = async () => {
      try {
        const { data } = await axios.get(
          `${import.meta.env.VITE_API_URL}/myfood/${id}`
        );
        setFood(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching food:', error);
        toast.error('Failed to fetch food data!');
        setLoading(false);
      }
    };
    fetchFood();
  }, [id]);

  // Handle update form submission
  const handleUpdate = async e => {
    e.preventDefault();
    const updatedFood = {
      name: e.target.name.value,
      price: parseFloat(e.target.price.value),
      quantity: e.target.value,
      image: e.target.image.value,
      description: e.target.description.value,
    };
    console.log(updatedFood);

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

  if (loading) return <p className="text-center text-lg">Loading...</p>;

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-xl p-6 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-4">Update Food</h2>
        <form onSubmit={handleUpdate} className="space-y-4">
          <input
            type="text"
            name="name"
            defaultValue={food?.foodName}
            placeholder="Food Name"
            className="w-full p-2 border rounded-lg"
            required
          />
          <input
            type="number"
            name="price"
            defaultValue={food?.price}
            placeholder="Price"
            className="w-full p-2 border rounded-lg"
            required
          />
          <input
            type="number"
            name="quantity"
            min={1}
            defaultValue={food?.quantity}
            placeholder="quantity"
            className="w-full p-2 border rounded-lg"
            required
          />
          <input
            type="text"
            name="image"
            defaultValue={food?.image}
            placeholder="Image URL"
            className="w-full p-2 border rounded-lg"
            required
          />
          <textarea
            name="description"
            defaultValue={food?.description}
            placeholder="Description"
            className="w-full p-2 border rounded-lg"
            required
          ></textarea>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 transition"
          >
            Update Food
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateMyFood;
