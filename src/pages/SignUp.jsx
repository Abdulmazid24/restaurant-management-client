import Lottie from 'lottie-react';
import registerLottieData from '../assets/lottie-react/register.json';
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../context/AuthContext';

const SignUp = () => {
  const { createUser } = useContext(AuthContext);
  const [error, setError] = useState(null);
  const handleRegister = e => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    // password validation
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{6,}$/;

    if (!regex.test(password)) {
      setError(
        'Invalid password. Password must contain at least 6 characters, one number, one uppercase, and one lowercase letter.'
      );
    }
    createUser(email, password)
      .then(result => {
        console.log(result.user);
      })
      .catch(error => {
        console.log(error.message);
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
                placeholder="example@email.com"
                className="input input-bordered input-primary w-full"
              />
            </div>
            <div className="form-control mb-4">
              <label className="label">
                <span className="label-text font-semibold">Password</span>
              </label>
              <input
                type="password"
                placeholder="********"
                name="password"
                className="input input-bordered input-primary w-full"
              />
            </div>
            <div className="form-control mb-4">
              <label className="label">
                <span className="label-text font-semibold">
                  Confirm Password
                </span>
              </label>
              <input
                type="password"
                placeholder="********"
                className="input input-bordered input-primary w-full"
              />
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
            <button className="btn btn-primary w-full mb-4 font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
              Register
            </button>
          </form>
          {error && <p className="font-thin text-red-700">{error}</p>}
          <p className="text-sm text-center">
            Already have an account?{' '}
            <Link to="/signIn" className="text-indigo-600 underline">
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
