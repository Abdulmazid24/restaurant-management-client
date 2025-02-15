import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

import { RouterProvider } from 'react-router-dom';
import router from './routes/Routes.jsx';
import AuthProvider from './context/AuthProvider.jsx';
import { ToastContainer } from 'react-toastify';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <ToastContainer></ToastContainer>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </StrictMode>
);
