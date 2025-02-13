import Lottie from 'lottie-react';
import registerLottieData from '../assets/lottie-react/register.json';
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../context/AuthContext';
import { FiEyeOff } from 'react-icons/fi';
import { FaEye } from 'react-icons/fa';
import { toast } from 'react-toastify';

const SignUp = () => {
  const { createUser, setUser } = useContext(AuthContext);
  const [error, setError] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const handleRegister = e => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    // password validation
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{6,}$/;

    if (!regex.test(password)) {
      setTimeout(() => {
        toast.success(
          'Invalid password. Password must contain at least 6 characters, one number, one uppercase, and one lowercase letter.'
        );
      }, 1000);
    }
    createUser(email, password)
      .then(result => {
        setUser(result.user);
        setTimeout(() => {
          toast.success('Signup successful! 🎉');
        }, 1000);
        form.reset('');
      })
      .catch(error => {
        toast.error(error.message);
      });
  };
  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center">
      <div className="md:flex gap: md:w-full">
        <div className="md:w-1/2 ">
          <Lottie animationData={registerLottieData}></Lottie>
          <Lottie
            className="hidden"
            animationData={registerLottieData}
          ></Lottie>
        </div>
        <div className="md:w-1/2 bg-white   p-8">
          <h1 className="text-3xl font-bold text-center mb-6 text-indigo-600">
            Create Account
          </h1>
          <form onSubmit={handleRegister}>
            <div className="form-control mb-4">
              <label className="label">
                <span className="label-text font-semibold">Full Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="John Doe"
                required
                className="input input-bordered input-primary w-full"
              />
            </div>
            <div className="form-control mb-4">
              <label className="label">
                <span className="label-text font-semibold">Photo URL</span>
              </label>
              <input
                type="url"
                name="photo"
                required
                placeholder="Enter your Photo URL"
                className="input input-bordered input-primary w-full"
              />
            </div>
            <div className="form-control mb-4">
              <label className="label">
                <span className="label-text font-semibold">Email Address</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter your Email"
                required
                className="input input-bordered input-primary w-full"
              />
            </div>
            <div className="relative  form-control mb-4">
              <label className="label">
                <span className="label-text font-semibold mb-1">Password</span>
              </label>
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Enter your password"
                name="password"
                required
                className="input input-bordered input-primary w-full"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-2 bottom-[4px] transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
              >
                {showPassword ? <FiEyeOff size={20} /> : <FaEye size={20} />}
              </button>
            </div>
            <div className="form-control mb-6">
              <label className="cursor-pointer flex items-center">
                <input type="checkbox" className="checkbox checkbox-primary" />
                <span className="ml-2 text-sm">
                  I agree to the{' '}
                  <Link to="/terms" className="text-indigo-600 underline">
                    terms and conditions
                  </Link>
                  .
                </span>
              </label>
            </div>
            <button className="btn text-white w-full mb-4 font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
              Register
            </button>
          </form>
          {error && <p className="font-thin text-red-700">{error}</p>}
          <p className="text-sm text-center">
            Already have an account?{' '}
            <Link to="/login" className="text-indigo-600 underline">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
