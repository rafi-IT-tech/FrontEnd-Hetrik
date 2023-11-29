// src/CheckoutPage.jsx
import React,{useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faSearch } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

const CheckoutPage = () => {


  const [searchQuery, setSearchQuery] = useState('');
  const [searchResult, setSearchResult] = useState(null);

  const handleSearch = () => {
    // Implement your search logic here
    console.log('Search Query:', searchQuery);
    const storedToken = localStorage.getItem('token');

    const API_CARI = `https://hetrik-api.onrender.com/api/device/devices/search`;
    
    const data = {
      name: searchQuery,
  };

  axios
  .post(API_CARI, data,{
      headers:{
          'Authorization': `Bearer ${storedToken}`
      }
  })
  .then(response => {
      // setPowerOptions(response.data);
      console.log("Response Success",response);
      setSearchResult(response.data);
  })
  .catch(error => {
      console.error('Error fetching power options:', error);
  });
    // You can perform the actual search operation using the searchQuery
    // For now, let's just log it to the console.
  };


  return (
    <div>
      <div className="container mt-5">
        <h1 className="text-center mb-4"> <b>Electrical Calculator</b></h1>
        {/* Electrical Calculator Card */}
        <div className="card bg-white mb-4">
          <div className="card-header">
            <h2 className="mb-0">Electrical Calculator</h2>
          </div>
          <div className="card-body">
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Search..."
                aria-label="Search..."
                aria-describedby="basic-addon2"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <div className="input-group-append">
                <button className="btn btn-outline-secondary" type="button" id="button-addon2"  onClick={handleSearch}>
                  <FontAwesomeIcon icon={faSearch} />
                </button>
              </div>
            </div>
            <button className="btn btn-success">
              <FontAwesomeIcon icon={faPlus} className="mr-2" />
              Add Item
            </button>
          </div>

            {/* Display search results in a card */}
            {searchResult && (
            <div className="container mt-3">
              <div className="card bg-white">
                <div className="card-header">
                  <h2 className="card-title mb-0">Search Result</h2>
                </div>
                <div className="card-body">
                  <table className="table">
                    <thead>
                      <tr>
                        <th scope="col">Device Name</th>
                        <th scope="col">Device Category</th>
                        <th scope="col">Device Power</th>
                        <th scope="col">Action</th>
                        

                        {/* Add more columns as needed */}
                      </tr>
                    </thead>
                    <tbody>
                      {searchResult.map((result, index) => (
                        <tr key={index}>
                          <td>{result.device_name}</td>
                          <td>{result.device_category}</td>
                          <td>{result.product_power}</td>
                          <td>  <button className="btn btn-success">
              <FontAwesomeIcon icon={faPlus} className="mr-2" />
            </button></td>

                          {/* Add more columns as needed */}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Calculate Usage Card */}
        <div className="card bg-white mb-4">
          <div className="card-header">
            <h2 className="card-title mb-0">Calculate Usage</h2>
          </div>
          <div className="card-body">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Column 1</th>
                  <th scope="col">Column 2</th>
                  {/* Add more columns as needed */}
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colSpan="2" className="text-center">No data available</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Result Card */}
        <div className="card bg-white">
          <div className="card-header">
            <h2 className="card-title mb-0">Result</h2>
          </div>
          <div className="card-body">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Column A</th>
                  <th scope="col">Column B</th>
                  {/* Add more columns as needed */}
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colSpan="2" className="text-center">No data available</td>
                </tr>
              </tbody>
              <tfoot>
                <tr>
                <td className="text-right" colSpan="1"></td>

                  <td className="text-right" colSpan="1">Saved Usage</td>
                </tr>
                <tr>
                <td className="text-right" colSpan="1"></td>

                  <td className="text-right" colSpan="1">Total Usage</td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>

        {/* Blue Wave Section */}
        <div className="wave-section">
          <div className="container">
            {/* <h2 className="text-center mb-4">Waves Section</h2> */}
            {/* Add content for the wave section here */}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
              <path fill="#0099ff" fillOpacity="1" d="M0,128L16,106.7C32,85,64,43,96,26.7C128,11,160,21,192,69.3C224,117,256,203,288,250.7C320,299,352,309,384,266.7C416,224,448,128,480,106.7C512,85,544,139,576,149.3C608,160,640,128,672,138.7C704,149,736,203,768,208C800,213,832,171,864,149.3C896,128,928,128,960,149.3C992,171,1024,213,1056,197.3C1088,181,1120,107,1152,106.7C1184,107,1216,181,1248,186.7C1280,192,1312,128,1344,106.7C1376,85,1408,107,1424,117.3L1440,128L1440,320L1424,320C1408,320,1376,320,1344,320C1312,320,1280,320,1248,320C1216,320,1184,320,1152,320C1120,320,1088,320,1056,320C1024,320,992,320,960,320C928,320,896,320,864,320C832,320,800,320,768,320C736,320,704,320,672,320C640,320,608,320,576,320C544,320,512,320,480,320C448,320,416,320,384,320C352,320,320,320,288,320C256,320,224,320,192,320C160,320,128,320,96,320C64,320,32,320,16,320L0,320Z"></path>
            </svg>
          </div>
          <div className="wave">
            {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
              <path fill="#0099ff" fillOpacity="1" d="M0,128L16,106.7C32,85,64,43,96,26.7C128,11,160,21,192,69.3C224,117,256,203,288,250.7C320,299,352,309,384,266.7C416,224,448,128,480,106.7C512,85,544,139,576,149.3C608,160,640,128,672,138.7C704,149,736,203,768,208C800,213,832,171,864,149.3C896,128,928,128,960,149.3C992,171,1024,213,1056,197.3C1088,181,1120,107,1152,106.7C1184,107,1216,181,1248,186.7C1280,192,1312,128,1344,106.7C1376,85,1408,107,1424,117.3L1440,128L1440,320L1424,320C1408,320,1376,320,1344,320C1312,320,1280,320,1248,320C1216,320,1184,320,1152,320C1120,320,1088,320,1056,320C1024,320,992,320,960,320C928,320,896,320,864,320C832,320,800,320,768,320C736,320,704,320,672,320C640,320,608,320,576,320C544,320,512,320,480,320C448,320,416,320,384,320C352,320,320,320,288,320C256,320,224,320,192,320C160,320,128,320,96,320C64,320,32,320,16,320L0,320Z"></path>
            </svg> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
