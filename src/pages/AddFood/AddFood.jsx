import { useContext, useState } from 'react';
import axios from 'axios';
import AuthContext from '../../context/AuthContext';
import { toast } from 'react-toastify';

const AddFood = ({ fetchFoods }) => {
  const { user } = useContext(AuthContext) || {}; // Ensure no crash if AuthContext is undefined

  const [foodData, setFoodData] = useState({
    name: '',
    image: '',
    category: '',
    quantity: '',
    price: '',
    addedBy: user?.displayName || '',
    email: user?.email || '',
    origin: '',
    description: '',
    purchaseCount: 0,
  });

  const handleChange = e => {
    setFoodData({ ...foodData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_API_URL}/add-foods`,
        foodData
      );
      if (data.insertedId) {
        toast.success('Food item added successfully!');

        if (fetchFoods) {
          // Ensure function exists
          fetchFoods();
        }

        setFoodData({
          name: '',
          image: '',
          category: '',
          quantity: '',
          price: '',
          addedBy: user?.displayName || '',
          email: user?.email || '',
          origin: '',
          description: '',
          purchaseCount: 0,
        });
      }
    } catch (error) {
      console.error(error);
      toast.error('Failed to add food item');
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-lg mt-10">
      <h2 className="text-2xl font-bold text-center mb-6">
        Add a New Food Item
      </h2>
      <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
        <input
          type="text"
          name="name"
          placeholder="Food Name"
          value={foodData.name}
          onChange={handleChange}
          className="input input-bordered w-full"
          required
        />
        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={foodData.image}
          onChange={handleChange}
          className="input input-bordered w-full"
          required
        />
        <input
          type="text"
          name="category"
          placeholder="Category"
          value={foodData.category}
          onChange={handleChange}
          className="input input-bordered w-full"
          required
        />
        <input
          type="number"
          name="quantity"
          placeholder="Quantity"
          value={foodData.quantity}
          onChange={handleChange}
          className="input input-bordered w-full"
          required
        />
        <input
          type="number"
          name="price"
          placeholder="Price"
          value={foodData.price}
          onChange={handleChange}
          className="input input-bordered w-full"
          required
        />
        <input
          type="text"
          name="origin"
          placeholder="Food Origin (Country)"
          value={foodData.origin}
          onChange={handleChange}
          className="input input-bordered w-full"
          required
        />
        <input
          type="text"
          name="addedBy"
          value={foodData.addedBy}
          className="input input-bordered w-full"
          readOnly
        />
        <input
          type="email"
          name="email"
          value={foodData.email}
          className="input input-bordered w-full"
          readOnly
        />
        <input
          type="number"
          name="purchaseCount"
          placeholder="Purchase Count : 0"
          value={foodData.purchaseCount}
          className="input input-bordered w-full"
          readOnly
        />
        <textarea
          name="description"
          placeholder="Short Description"
          value={foodData.description}
          onChange={handleChange}
          className="textarea textarea-bordered col-span-2 w-full"
          required
        ></textarea>
        <button
          type="submit"
          className="btn bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold col-span-2"
        >
          Add Item
        </button>
      </form>
    </div>
  );
};

export default AddFood;
