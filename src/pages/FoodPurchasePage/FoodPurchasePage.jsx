import { useContext, useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import AuthContext from '../../context/AuthContext';
import { toast } from 'react-toastify';

const FoodPurchasePage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const [food, setFood] = useState(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/foods/${id}`)
      .then(res => res.json())
      .then(data => setFood(data))
      .catch(() => toast.error('Failed to load food details'));
  }, [id]);

  const handlePurchase = async e => {
    e.preventDefault();
    const order = {
      foodId: id,
      name: food.name,
      image: food.image,
      price: food.price * quantity,
      quantity,
      buyerName: user.displayName,
      buyerEmail: user.email,
      description: food.description,
      date: new Date().toISOString(),
      purchaseCount: 0,
    };

    const res = await fetch(`${import.meta.env.VITE_API_URL}/purchase`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(order),
    });

    if (res.ok) {
      toast.success('Purchase successful!');
      navigate('/');
    } else {
      toast.error('Purchase failed');
    }
  };

  if (!food) return <p className="text-center">Loading...</p>;

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-5">
      <form
        onSubmit={handlePurchase}
        className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-4">Purchase {food.name}</h2>

        <label className="block font-semibold mb-2">Food Img Url</label>
        <input
          type="url"
          value={food.image}
          readOnly
          className="input input-bordered w-full mb-4 placeholder: font-medium"
        />
        <label className="block font-semibold mb-2">Food Name</label>
        <input
          type="text"
          value={food.name}
          readOnly
          className="input input-bordered w-full mb-4 placeholder: font-medium"
        />

        <label className="block font-semibold mb-2">Price</label>
        <input
          type="text"
          value={`${food.price}`}
          readOnly
          className="input input-bordered w-full mb-4 placeholder: font-medium"
        />

        <label className="block font-semibold mb-2">Quantity</label>
        <input
          type="number"
          min="1"
          value={quantity}
          onChange={e => setQuantity(e.target.value)}
          className="input input-bordered w-full mb-4 placeholder: font-medium"
        />

        <label className="block font-semibold mb-2">Buyer Name</label>
        <input
          type="text"
          value={user.displayName}
          readOnly
          className="input input-bordered w-full mb-4 placeholder: font-medium"
        />

        <label className="block font-semibold mb-2">Buyer Email</label>
        <input
          type="email"
          value={user.email}
          readOnly
          className="input input-bordered w-full mb-4 placeholder: font-medium"
        />
        <textarea
          name="description"
          value={food?.description}
          placeholder="Description"
          readOnly
          className="w-full p-2 border rounded-lg"
          required
        ></textarea>
        <button
          type="submit"
          className="btn bg-gradient-to-r from-pink-950 to-purple-600 w-full text-white"
        >
          Purchase
        </button>
      </form>
    </div>
  );
};

export default FoodPurchasePage;
