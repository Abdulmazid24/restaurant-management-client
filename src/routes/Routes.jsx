import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layout/MainLayout';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import Home from '../pages/Home/Home';
import Login from '../pages/Login';
import SignUp from '../pages/SignUp';
import AllFoods from '../pages/AllFoods/AllFoods';
import FoodDetails from '../pages/FoodDetails/FoodDetails';
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
        path: '/food/:id',
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_API_URL}/food/${params.id}`),
        element: <FoodDetails></FoodDetails>,
      },
    ],
  },
]);
export default router;
