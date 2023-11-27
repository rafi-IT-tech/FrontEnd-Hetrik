import React, { useState } from 'react';
import image from '../../assets/bglr.png';
import axios from 'axios';  // Import Axios

import { createBrowserHistory } from 'history'; 

const apiUrl = 'https://hetrik-api.onrender.com/api/auth/register'; // Use the environment variable

const history = createBrowserHistory();

const Register = () => {
  const [username, setUsername] = useState('');
  const [fullname, setfullname] = useState('');

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  
// const apiUrl = process.env.REACT_APP_API_ENDPOINT + '/auth/login'; // Use the environment variable

  const handleRegister = () => {
    console.log('Register clicked');

    const data = {
      fullname: fullname,
      username:username,
      email:email,
      password: password,
  };

  axios.post(apiUrl, data)
      .then(response => {
          console.log('Register successful:', response.data);
         history.push("/login");
         window.location.reload();
      })
      .catch(error => {
          console.error('Error during login:', error.response.data);
      });

    // Add logic for handling registration
  };

  return (
    <div className="flex flex-col-reverse sm:flex-row h-screen bg-gray-100">
      <div className="sm:w-1/2">
        <img
          src={image}
          alt="Illustration"
          className="object-cover w-full h-64 sm:h-full"
        />
      </div>

      <div className="sm:w-1/2 flex justify-center items-center">
        <div className="text-center">
          <h3 className="text-3xl font-bold mb-4 text-blue-500">Welcome to the Hetrik website</h3>
          <p className="text-gray-600 mb-4">Create an account now to enjoy all Hetrik features!!</p>
          <input
            type="text"
            placeholder="fullname"
            className="w-full sm:w-3/4 border rounded-md py-2 px-2 mb-8 mt-16"
            value={fullname}
            onChange={(e) => setfullname(e.target.value)}
          />
          <input
            type="text"
            placeholder="Username"
            className="w-full sm:w-3/4 border rounded-md py-2 px-2 mb-8 mt-16"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full sm:w-3/4 border rounded-md py-2 px-2 mb-8"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full sm:w-3/4 border rounded-md py-2 px-2 mb-16"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <button
            className="bg-blue-500 text-white py-2 px-10 mb-4 rounded-md hover:bg-blue-600"
            onClick={handleRegister}
          >
            Register
          </button>
          <p className="text-gray-600 mb-4">Already have an account? <a href="/login" className="text-blue-500">Login here</a></p>
        </div>
      </div>
    </div>
  );
};

export default Register;
