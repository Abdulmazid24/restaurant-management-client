import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import moment from 'moment';
import { toast } from 'react-toastify';
import AuthContext from '../../context/AuthContext';

const MyOrders = () => {
  const { user, setLoading } = useContext(AuthContext);
  const [orders, setOrders] = useState([]);
  console.log(orders);
  useEffect(() => {
    fetchFoodsOrderedData();
  }, []);
  const fetchFoodsOrderedData = async () => {
    const { data } = await axios.get(
      `${import.meta.env.VITE_API_URL}/my-orders/${user?.email}`
    );
    setOrders(data);
  };

  const handleDelete = async id => {
    try {
      const { data } = await axios.delete(
        `${import.meta.env.VITE_API_URL}/my-orders/${id}`
      );
      console.log(data);

      fetchFoodsOrderedData();
      toast.success('order deleted successfully');
    } catch (error) {
      console.log(error);
      toast.error('error.message');
    }
  };

  return (
    <div className="max-w-5xl mx-auto p-6 bg-white shadow-md rounded-lg mt-10">
      <h2 className="text-2xl font-bold text-center mb-6">My Orders</h2>
      <div className="overflow-x-auto">
        <table className="table w-full border">
          <thead>
            <tr>
              <th>Food Image</th>
              <th>Food Name</th>
              <th>Price</th>
              <th>Order Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {orders.map(order => (
              <tr key={order._id}>
                <td>
                  <img
                    src={order.image}
                    alt={order.foodName}
                    className="w-16 h-16 rounded"
                  />
                </td>
                <td>{order.foodName}</td>
                <td>${order.price}</td>

                <td>
                  {moment(order.orderDate).format('MMMM Do YYYY, h:mm A')}
                </td>
                <td>
                  <button
                    onClick={() => handleDelete(order._id)}
                    className="btn font-medium btn-error"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrders;
