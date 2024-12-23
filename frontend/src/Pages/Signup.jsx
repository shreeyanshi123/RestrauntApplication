import React from 'react'
import './Login.css'
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router';


const Signup = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 bg-cover bg-img overflow-hidden antialiased">
            <div className="flex flex-col w-full max-w-md h-aut bg-white items-center justify-center px-8 py-6 shadow-lg rounded-lg">
                <h2 className="text-2xl font-bold text-gray-800 mb-2">SignUp!!!</h2>

                <form className="flex flex-col items-center w-full ">
                    <div className="w-full mb-4">
                        <label htmlFor="FirstName" className="block text-sm font-medium text-gray-700 mb-1">
                            FirstName
                        </label>
                        <input
                            type="text"
                            name="FirstName "
                            placeholder="FirstName"
                            className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-sm"
                        />
                    </div>
                    <div className="w-full mb-4">
                        <label htmlFor="LastName" className="block text-sm font-medium text-gray-700 mb-1">
                            Email Address
                        </label>
                        <input
                            type="text"
                            name="LastName"
                            placeholder="LastName"
                            className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-sm"
                        />
                    </div>
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
                    <button
                        type="submit"
                        className="w-full bg-indigo-600 text-white font-medium text-sm px-4 py-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                        SignUp
                    </button>
                </form>
                <span className='text-xs my-2 text-gray-600'>Already have an account...<Link className='no-underline text-black-600 text-sm ' to='/login'>Login</Link > </span>
            </div>
        </div>
    )
}

export default Signup