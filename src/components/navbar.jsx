import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { createBrowserHistory } from 'history'; 

import logo from '../assets/logo.png';
import axios from 'axios';

const Navbar = () => {
  const history = createBrowserHistory();

  const isPayment = localStorage.getItem('is_payment') === 'true';
  const isLoggedIn = localStorage.getItem('token') !== null;
  const storedToken = localStorage.getItem('token');

  const userID = localStorage.getItem('userID');
  const [userProfile, setUserProfile] = useState('');

  const handleLogout = () => {
    // Implement logout logic, clear local storage, or send a request to invalidate the token
    // localStorage.removeItem('token');
    localStorage.clear();
    history.push("/Login");
    window.location.reload();

    // Additional logic as needed
  };

  useEffect (() => { 
    console.log("Token ", isLoggedIn);
    axios.get(`https://hetrik-api.onrender.com/api/user/users/${userID}`, {
      headers: {
          'Authorization': `Bearer ${storedToken}`,
      },
  })
      .then(response => setUserProfile(response.data))
      .catch(error => console.error('Error fetching product data:', error));


  },[]);
    return (
    <nav className="bg-white p-4 sm:px-8 md:px-16 lg:px-20 xl:px-30 flex justify-between items-center shadow-md">
      <div className="flex items-center space-x-2">
        <img src={logo} alt="Logo" className="h-10 w-32" />
      </div>

      <div className="text-gray-400 font-semibold flex-grow text-center">
        <NavLink to="/" exact className="mx-4 text-gray-400 hover:text-blue-600" activeClassName="text-blue-500">
          Home
        </NavLink>
        <NavLink to="/About" className="mx-4 text-gray-400 hover:text-blue-600" activeClassName="text-blue-500">
          About
        </NavLink>
        <NavLink to="/Service" className="mx-4 text-gray-400 hover:text-blue-600" activeClassName="text-blue-500">
        </NavLink>
        <NavLink to="/Article" className="mx-4 text-gray-400 hover:text-blue-600" activeClassName="text-blue-500">
          Article
        </NavLink>

        {isPayment ? (
          <NavLink to="/dashboard" className="mx-4 text-gray-400 hover:text-blue-600" activeClassName="text-blue-500">
            Dashboard
          </NavLink>
        ) : null}
      </div>

      <div className="flex items-center space-x-6">
        {isLoggedIn ? (
          <>
            <NavLink to="/user" className="flex items-center">
              <button className="border-blue-500 hover:border-blue-600 text-blue-500 border-2 px-6 py-2 rounded" type="button">
              <FontAwesomeIcon icon={faUser} className="mr-2" />
                {userProfile.username}
              </button>
            </NavLink>
            <button onClick={handleLogout} className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded" type="button">
              Logout
            </button>
          </>
        ) : (
          <>
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
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
