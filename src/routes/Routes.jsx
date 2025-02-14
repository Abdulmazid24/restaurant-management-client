import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layout/MainLayout';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import Home from '../pages/Home/Home';
import Login from '../pages/Login';
import SignUp from '../pages/SignUp';
import AllFoods from '../pages/AllFoods/AllFoods';
import FoodDetails from '../pages/FoodDetails/FoodDetails';
import FoodPurchasePage from '../pages/FoodPurchasePage/FoodPurchasePage';
import GalleryPage from '../pages/GalleryPage/GalleryPage';
import MyFoods from '../pages/MyFoods/MyFoods';
import UpdateMyFood from '../pages/UpdateMyFood/UpdateMyFood';
import AddFood from '../pages/AddFood/AddFood';
import MyOrders from '../pages/MyOrders/MyOrders';
import PrivateRoute from './PrivateRoute';
import PizzaBlog from '../pages/Blogs/PizzaBlog';
import SushiBlog from '../pages/Blogs/SushiBlog';
import IndianSpicesBlog from '../pages/Blogs/IndianSpicesBlog';
const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/login',
        element: <Login></Login>,
      },
      {
        path: '/signUp',
        element: <SignUp></SignUp>,
      },
      {
        path: '/foods',
        element: <AllFoods></AllFoods>,
      },
      {
        path: '/gallery',
        element: <GalleryPage></GalleryPage>,
      },
      {
        path: '/foods/:id',
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_API_URL}/foods/${params.id}`),
        element: <FoodDetails></FoodDetails>,
      },
      {
        path: '/purchase/:id',
        element: (
          <PrivateRoute>
            <FoodPurchasePage></FoodPurchasePage>
          </PrivateRoute>
        ),
      },
      {
        path: '/myfoods',
        element: (
          <PrivateRoute>
            <MyFoods></MyFoods>
          </PrivateRoute>
        ),
      },
      {
        path: '/update/:id',
        element: <UpdateMyFood></UpdateMyFood>,
      },
      {
        path: '/addFood',
        element: (
          <PrivateRoute>
            <AddFood></AddFood>
          </PrivateRoute>
        ),
      },
      {
        path: '/my-orders',
        element: (
          <PrivateRoute>
            <MyOrders></MyOrders>
          </PrivateRoute>
        ),
      },
      {
        path: '/pizza',
        element: <PizzaBlog></PizzaBlog>,
      },
      {
        path: '/sushi',
        element: <SushiBlog></SushiBlog>,
      },
      {
        path: '/spices',
        element: <IndianSpicesBlog></IndianSpicesBlog>,
      },
    ],
  },
]);
export default router;
