import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.png';

const Navbar = () => {
  return (
    <nav className="bg-white p-4 sm:px-8 md:px-16 lg:px-20 xl:px-30 flex justify-between items-center shadow-md">
      <div className="flex items-center space-x-2">
        <img src={logo} alt="Logo" className="h-10 w-32" />
      </div>

      <div className="text-gray-400 font-semibold flex-grow text-center">
        <NavLink to="/" exact className="mx-4 text-gray-400 hover:text-blue-600" activeClassName="text-blue-500">
          Home
        </NavLink>
        <NavLink to="/About Us" className="mx-4 text-gray-400 hover:text-blue-600" activeClassName="text-blue-500">
          About
        </NavLink>
        <NavLink to="/Services" className="mx-4 text-gray-400 hover:text-blue-600" activeClassName="text-blue-500">
          Services
        </NavLink>
        <NavLink to="/Article" className="mx-4 text-gray-400 hover:text-blue-600" activeClassName="text-blue-500">
          Article
        </NavLink>
      </div>

      <div className="flex items-center space-x-6">
        <NavLink to="/login">
          <button className="border-blue-500 hover:border-blue-600 text-blue-500 border-2 px-6 py-2 rounded" type="button">
            Login
          </button>
        </NavLink>
        <NavLink to="/signup">
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded" type="button">
            SignUp
          </button>
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
