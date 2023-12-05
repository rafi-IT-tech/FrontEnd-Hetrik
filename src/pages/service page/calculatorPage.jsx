// src/CheckoutPage.jsx
import React,{useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faSearch, faToggleOn, faToggleOff, faTimes } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import Swal from 'sweetalert2';
import { createBrowserHistory } from 'history'; 
import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TextField,
  TableFooter,
  MenuItem
} from '@mui/material';


import { useSpring, animated } from 'react-spring';

const CheckoutPage = () => {

  const [searchQuery, setSearchQuery] = useState('');
  const [searchResult, setSearchResult] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);
  const [usageData, setUsageData] = useState([]);
  const [saveStatus, setSaveStatus] = useState(0); // State untuk menyimpan status save
  const [saveTotal, setTotal] = useState(0); // State untuk menyimpan status save

  const history = createBrowserHistory();

  const handleSave = () => {

    const isPaymentMade = localStorage.getItem('is_payment') === 'true';
    if (!isPaymentMade) {
      // If payment is not made, show SweetAlert
      Swal.fire({
        title: 'Payment Required',
        text: 'Anda Harus Melakukan Langganan Terlebih Dahulu',
        icon: 'error',
        confirmButtonText: 'OK',
      }).then((result) => {
        // Check if the user clicked "OK"
        if (result.isConfirmed) {
          // Redirect to the payment page
          history.push('/Paymentmain');
          window.location.reload();
        }
      });
      return;
    }

    // Assuming you have a server endpoint to save the usage data
    const API_SAVE = `https://hetrik-api.onrender.com/api/hitung/usage/create`;


    const storedToken = localStorage.getItem('token');
    const userID = localStorage.getItem('userID');
    const BuildingPowerID = localStorage.getItem('BuildingPowerID');

    // Extracting relevant information for saving (you might need to adjust this based on your actual data structure)
    const dataToSave = {
      UserID: userID,
      // RoomID: "65609a4d6174c3093b982806",
      BuildingPowerID: BuildingPowerID,
      WaktuMulai: usageData.length > 0 ? usageData[0].startTime : "", // Ambil startTime dari item pertama
      WaktuSelesai: usageData.length > 0 ? usageData[usageData.length - 1].endTime : "", // Ambil endTime dari item terakhir
      Boros: true,
      device: usageData.map(item => ({
        device_id: item._id,
      })),
    };

    // Send a POST request to save the data
    axios.post(API_SAVE, dataToSave,{
      headers: {
        'Authorization': `Bearer ${storedToken}`,
    },
    })
      .then(response => {
        console.log('Usage data saved successfully:', response.data.TotalDayaHabiskan);
        setSaveStatus(response.data.TotalDayaHabiskan);
        setTotal(response.data.BiayaDayaDigunakan);
        // You can perform additional actions upon successful save

           // Display success message
           Swal.fire({
            title: 'Save Successful',
            text: 'Your data has been saved successfully. Silahkan click Ok untuk diarahkan Ke Dashboard',
            icon: 'success',
            confirmButtonText: 'OK',
          }).then((result) => {
            // Check if the user clicked "OK"
            console.log(result);
            if (result.isConfirmed) {
              // Redirect to the payment page
              history.push('/dashboard');
              window.location.reload();
            }
          });
      })
      .catch(error => {
        console.error('Error saving usage data:', error);
        // Handle errors as needed
      });
  };

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

  const handleAddToUsage = (selectedItem) => {
    setUsageData([...usageData, { ...selectedItem, startTime: '', endTime: '' }]);
  };

  const handleTimeChange = (index, type, value) => {
    setUsageData((prevUsageData) => {
      const updatedUsageData = [...prevUsageData];
      updatedUsageData[index] = {
        ...updatedUsageData[index],
        [type]: value,
      };
      return updatedUsageData;
    });
  };



  // const handleToggle = (index) => {
  //   setUsageData((prevUsageData) => {
  //     const updatedUsageData = [...prevUsageData];
  //     // const currentTime = new Date().toLocaleTimeString(); // Get the current time
  //     const currentTime = new Date().toISOString(); // Format the current time as ISO string
     
  //     if (updatedUsageData[index].toggle) {
  //       // If toggle is turning off, update end time
  //       updatedUsageData[index] = {
  //         ...updatedUsageData[index],
  //         toggle: false,
  //         endTime: currentTime,
  //       };
  //     } else {
  //       // If toggle is turning on, update start time
  //       updatedUsageData[index] = {
  //         ...updatedUsageData[index],
  //         toggle: true,
  //         startTime: currentTime,
  //       };
  //     }

  //     console.log("UpdatedUsageData TOGGLE", updatedUsageData);
  //     return updatedUsageData;
  //   });
  // };

  const [dialogOpen, setDialogOpen] = useState(false);

  // ... (Other logic)

  // Function to handle opening the dialog
  const handleDialogOpen = () => {
    setDialogOpen(true);
  };

  // Function to handle closing the dialog
  const handleDialogClose = () => {
    setDialogOpen(false);
  };

  const [newDevice, setNewDevice] = useState({
    device_name: '',
    device_category: '',
    product_power: '',
  });

  // ... (Other logic)

  const handleInputChange = (field, value) => {
    setNewDevice((prevDevice) => ({
      ...prevDevice,
      [field]: value,
    }));
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    // You can add validation logic here before submitting

    // Assuming you have a function to add the new device to your search result or usage data
    handleAddNewDevice(newDevice);

    // Close the dialog after submitting the form
    handleDialogClose();
  };

  const handleAddNewDevice = (newDevice) => {
    // Assuming you want to add the new device to searchResult

    const apiUrl = 'https://hetrik-api.onrender.com/api/device/devices'; // Use the environment variable

    console.log("New Device ", newDevice)
    const storedToken = localStorage.getItem('token');

    

  axios.post(apiUrl, newDevice,{
    headers: {
        'Authorization': `Bearer ${storedToken}`,
    },
})
      .then(response => {
          console.log('Berhasil Menambahkan Device:', response.data);
          Swal.fire({
            title: 'Berhasil Daftar',
            text: 'Selamat Anda Berhasil Menambahkan Device',
            icon: 'success',
            confirmButtonText: 'OK',
          }).then((result) => {
            // Check if the user clicked "OK"
            console.log(result);
            if (result.isConfirmed) {
              // setSearchResult((prevSearchResult) => (prevSearchResult ? [...prevSearchResult, newDevice] : [newDevice]));
              // setUsageData((prevUsageData) => [...prevUsageData, { ...newDevice, startTime: '', endTime: '' }]);
            }
          });
      })
      .catch(error => {
          console.error('Error during login:', error.response.data);
      });

    // OR, if you want to add the new device to usageData
  };
  
  const handleDelete = (index) => {
    setUsageData((prevUsageData) => {
      const updatedUsageData = [...prevUsageData];
      updatedUsageData.splice(index, 1);

      
      console.log("UpdatedUsageData DELETE " + updatedUsageData)
      return updatedUsageData;
    });
  };

  const toggleSpring = useSpring({
    transform: selectedItem ? `scale(1.2)` : `scale(1)`,
  });

  const deleteSpring = useSpring({
    opacity: selectedItem ? 1 : 0,
  });


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
            <button className="btn btn-primary"  onClick={handleDialogOpen}>
              <FontAwesomeIcon icon={faPlus} className="mr-2" />
              Add Item
            </button>
          </div>


    <Dialog open={dialogOpen} onClose={handleDialogClose} fullWidth maxWidth="md">
      <DialogTitle>Add Item</DialogTitle>
      <DialogContent>
        <form onSubmit={handleFormSubmit}>
          <TextField
            label="Device Name"
            fullWidth
            margin="normal"
            value={newDevice.device_name}
            onChange={(e) => handleInputChange('device_name', e.target.value)}
          />
          <TextField
            label="Device Category"
            fullWidth
            margin="normal"
            value={newDevice.device_category}
            onChange={(e) => handleInputChange('device_category', e.target.value)}
          />
          <TextField
            label="Product Power"
            fullWidth
            margin="normal"
            value={newDevice.product_power}
            onChange={(e) => handleInputChange('product_power', e.target.value)}
          />
          {/* Add more input fields as needed */}
          <Button type="submit" color="primary" variant="contained">
            Save
          </Button>
        </form>
      </DialogContent>
      {/* ... (Other dialog content) */}
    </Dialog>
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
                          <td>{result.product_power} VA</td>
                          <td> 
                          <button
                              className="btn btn-primary"
                              onClick={() => {
                                setSelectedItem(result);
                                handleAddToUsage(result);
                              }}
                            >
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
                  <th scope="col">Device Name</th>
                  <th scope="col">Device Category</th>
                  <th scope="col">Device Power</th>
                  <th scope="col">Start Time</th>
                  <th scope="col">End Time</th>

                  <th scope='col'>Action</th>

                  {/* Add more columns as needed */}
                </tr>
              </thead>
              <tbody>
              {usageData.map((item, index) => (
                  <tr key={index}>
                    <td>{item.device_name}</td>
                    <td>{item.device_category}</td>
                    <td>{item.product_power} VA </td>
                    <td>
                      <input
                        type="datetime-local"
                        value={item.startTime}
                        onChange={(e) => handleTimeChange(index, 'startTime', e.target.value)}
                      />
                    </td>
                    <td>
                      <input
                        type="datetime-local"
                        value={item.endTime}
                        onChange={(e) => handleTimeChange(index, 'endTime', e.target.value)}
                      />
                    </td>
                    <td>
                      <animated.span
                        style={deleteSpring}
                        onClick={() => handleDelete(index)}
                      >
                        <FontAwesomeIcon
                          icon={faTimes}
                          className="text-danger"
                        />
                      </animated.span>
                    </td>
                    {/* Add more columns as needed */}
                  </tr>
                ))}
              
                {/* <tr>
                  <td colSpan="2" className="text-center">No data available</td>
                </tr> */}
              </tbody>



              <tfoot>
                <tr>

                  <td className="text-center" colSpan="4"> 
                   <button className="btn btn-primary" onClick={handleSave}>
                Hitung
            </button>
            </td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>

        {/* Result Card */}
        <div className="card bg-white">
          <div className="card-header">
            <h2 className="card-title mb-0">Result</h2>
          </div>
          <div className="card-body">
        
          <tr>
                <td className="text-right" colSpan="1"></td>

                  <td className="text-right" colSpan="1">Saved Usage : {saveStatus} kwh</td>
                </tr>
                <tr>
                <td className="text-right" colSpan="1"></td>

                  <td className="text-right" colSpan="1">Total Usage: Rp  {saveTotal} </td>
                </tr>

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
