import { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import AuthContext from '../context/AuthContext';
import Loader from '../components/Loader';

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return <Loader></Loader>;
  }

  return user ? children : <Navigate to="/login" replace />;
};

export default PrivateRoute;
