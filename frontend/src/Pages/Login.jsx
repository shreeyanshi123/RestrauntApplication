import { FcGoogle } from 'react-icons/fc'; // Ensure you have this installed
import './Login.css'
import { Link, Links } from 'react-router';

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 bg-cover bg-img overflow-hidden antialiased">
      <div className="flex flex-col w-full max-w-md h-auto items-center justify-center bg-white px-8 py-6 shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Welcome Back!!</h2>
        <p className="text-sm text-gray-600 mb-6">Please enter your details below.</p>

        <div className="flex items-center justify-center w-full bg-gray-100 border border-gray-300 rounded-md px-4 py-2 mb-6 cursor-pointer hover:bg-gray-200">
          <FcGoogle className="mr-2" size={20} />
          <span className="text-sm text-gray-700">Login with Google</span>
        </div>

        <form className="flex flex-col items-center w-full">
          <div className="w-full mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-sm"
            />
          </div>
          <div className="w-full mb-6">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              className="block w-full px-4 py-2  shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-sm"
            />
          </div>

          <div className="w-full mb-6 flex justify-stretch">
            <div className='w-1/2'>
              <input type='checkbox' /><span className='mx-2 text-sm'>Remember me</span>
            </div>
            <div className='w-1/2'>
              <a className='no-underline cursor-pointer text-black text-sm mx-4'>Forget Password?</a>
            </div>

          </div>
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white font-medium text-sm px-4 py-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Login
          </button>
        </form>
        <span className='text-xs my-2 text-gray-600'>Don't have an account?<Link className='no-underline text-black-600 text-sm ' to='/signup'>Signup</Link > </span>
      </div>
    </div>
  );
};

export default Login;
