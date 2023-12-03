import React, { useEffect, useState } from 'react';
import {
  BsFillArchiveFill,
  BsFillGrid3X3GapFill,
  BsPeopleFill,
  BsFillBellFill,
  BsPencilSquare
} from 'react-icons/bs';
import axios from 'axios';
import {
  BarChart,
  Bar,
  CartesianGrid,
  Legend,
  LineChart,
  Line,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from 'recharts';
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
 import './Dashboard.css'; // Import your CSS file
 import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
 import { faPlus, faSearch, faToggleOn, faToggleOff,faRemove, faTimes } from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2';

 function generateRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function DashboardPage() {
  const [productCount, setProductCount] = useState(0);
  const [categoryCount, setCategoryCount] = useState(0);

  const [barChartData, setBarChartData] = useState([]);

  const [chartLineTest, setchartLineTest] = useState([]);

  

  // State to manage the dialog open/close
  const [dialogOpen, setDialogOpen] = useState(false);

  const [device, setDevice] = useState([]);

  
  const [dialogOpenmasterForm, setDialogOpenMasterForm] = useState(false);

  // State to manage the dialog open/close
  const [dialogOpenmaster, setDialogOpenMaster] = useState(false);
  const [chartLine, setchartLine] = useState([]);

  const [selectedItem, setSelectedItem] = useState(null);


  const storedToken = localStorage.getItem('token');
  const userID = localStorage.getItem('userID');
  const currentDate = new Date();

  
  const [newDevice, setNewDevice] = useState({
    device_name: '',
    device_category: '',
    product_power: '',
  });
  // Calculate the start of the current week
  const startOfWeek = new Date(currentDate);
  startOfWeek.setDate(currentDate.getDate() - currentDate.getDay()); // Start of the week is Sunday
  startOfWeek.setHours(0, 0, 0, 0); // Set hours, minutes, seconds, and milliseconds to 0

  // Calculate the end of the current week
  const endOfWeek = new Date(currentDate);
  endOfWeek.setDate(currentDate.getDate() - currentDate.getDay() + 6); // End of the week is Saturday
  endOfWeek.setHours(23, 59, 59, 999); // Set hours, minutes, seconds, and milliseconds to end of the day


  const [startDate, setStartDate] = useState(startOfWeek.toISOString().slice(0, -8));
  const [endDate, setEndDate] = useState(endOfWeek.toISOString().slice(0, -8));


  const headerStyle = {
    color: 'black',
    textAlign: 'center'
  };

  const headerStyle2 = {
    color :'#f8f9fa'
  }
   // Function to handle opening the dialog
   const handleDialogOpen = () => {
    setDialogOpen(true);
  };

  // Function to handle closing the dialog
  const handleDialogClose = () => {
    setDialogOpen(false);
  };


  
   // Function to handle opening the dialog
   const handleDialogOpenForm = () => {
    setDialogOpenMasterForm(true);
  };

  // Function to handle closing the dialog
  const handleDialogCloseForm = () => {
    setDialogOpenMasterForm(false);
  };

  
   // Function to handle opening the dialog
   const handleDialogOpenMaster = () => {
    setDialogOpenMaster(true);
  };

  // Function to handle closing the dialog
  const handleDialogCloseMaster = () => {
    setDialogOpenMaster(false);
  };


  const transaksi = `https://hetrik-api.onrender.com/api/hitung/usage/user/${userID}`;

  const productUrl = 'https://hetrik-api.onrender.com/api/device/devices';
  const bangunanUrl = 'https://hetrik-api.onrender.com/api/dayaBangunan/dayabangunan';
  // const customerUrl = 'https://api.example.com/customers';
  // const alertUrl = 'https://api.example.com/alerts';
  useEffect (() => {

    // Axios GET requests for each card
    axios.get(productUrl, {
      headers: {
          'Authorization': `Bearer ${storedToken}`,
      },
  })
      .then(response =>{ 
        setDevice(response.data);
        setProductCount(response.data.length)})
      .catch(error => console.error('Error fetching product data:', error));

    axios.get(bangunanUrl, {
      headers: {
          'Authorization': `Bearer ${storedToken}`,
      },
  })
      .then(response => 

        setCategoryCount(response.data[0].powerCapacity)
        )
      .catch(error => console.error('Error fetching category data:', error));

  //   axios.get(customerUrl, {
  //     headers: {
  //         'Authorization': `Bearer ${storedToken}`,
  //     },
  // })
  //     .then(response => setCustomerCount(response.data.length))
  //     .catch(error => console.error('Error fetching customer data:', error));

  //   axios.get(alertUrl, {
  //     headers: {
  //         'Authorization': `Bearer ${storedToken}`,
  //     },
  // })
  //     .then(response => setAlertCount(response.data.length))
  //     .catch(error => console.error('Error fetching alert data:', error));


    axios.get(productUrl,{
      headers: {
        'Authorization': `Bearer ${storedToken}`,
    },
    })
    .then(response => setBarChartData(response.data))
    .catch(error => console.error('Error fetching bar chart data:', error));


    axios.get(transaksi,{
      headers: {
        'Authorization': `Bearer ${storedToken}`,
    },
    })
    .then(response =>
      setchartLine(response.data)
    )
    .catch(error => console.error('Error fetching lines chart data:', error));


    
    axios.get(transaksi,{
      headers: {
        'Authorization': `Bearer ${storedToken}`,
    },
    })
    .then(response => {
      const filteredData = response.data.filter(item => {
        const timestamp = new Date(item.WaktuMulai); // Convert timestamp to Date object
  
        // Compare the date with the start and end of the week
        return (
          timestamp >= startOfWeek &&
          timestamp <= endOfWeek
        );
      });
  
      // setchartLine(filteredData);
      setchartLineTest(filteredData.length);
    })
    .catch(error => console.error('Error fetching line chart data:', error));


  }, []);
  const totalBiayaDayaDigunakan = chartLine
  .filter((dataItem) => {
    const timestamp = new Date(dataItem.WaktuMulai); // Convert timestamp to Date object

    return (
      (!startDate || timestamp >= new Date(startDate)) &&
      (!endDate || timestamp <= new Date(endDate))
    );
  })
  .reduce((accumulator, dataItem) => {
    // Menggunakan Math.abs untuk memastikan nilai positif, sesuai permintaan sebelumnya
    const biayaDayaDigunakan = Math.abs(dataItem.BiayaDayaDigunakan);
    console.log("Accumulator ", accumulator);
    console.log("biayaDayaDigunakan ", biayaDayaDigunakan);

    return accumulator + biayaDayaDigunakan;
  }, 0);

  const totalTarifEnergi = chartLine
  .filter((dataItem) => {
    const timestamp = new Date(dataItem.WaktuMulai); // Convert timestamp to Date object

    return (
      (!startDate || timestamp >= new Date(startDate)) &&
      (!endDate || timestamp <= new Date(endDate))
    );
  })
  .reduce((accumulator, dataItem) => {
    // Menggunakan Math.abs untuk memastikan nilai positif, sesuai permintaan sebelumnya
    const biayaDayaDigunakan = Math.abs(dataItem.TarifEnergi);
    console.log("Accumulator ", accumulator);
    console.log("biayaDayaDigunakan ", biayaDayaDigunakan);

    return accumulator + biayaDayaDigunakan;
  }, 0);


  const deleteSpring = useSpring({
    opacity: 1,
  });


  const handleEdit = (id) => {
    // Add your logic for editing here
    console.log("Edit button clicked for ID:", id);
    handleDialogCloseMaster();
    handleDialogOpenForm();
  

    const productUrlHapus = `https://hetrik-api.onrender.com/api/device/devices/${id}`;
    axios.get(productUrlHapus,  {
      headers: {
          'Authorization': `Bearer ${storedToken}`,
      },
  })
    .then(response => {
      setNewDevice(response.data);     
      
    })
    .catch(error => {
        console.error('Error during login:', error);
    });

  };

  
  const handleInputChange = (field, value) => {
    setNewDevice((prevDevice) => ({
      ...prevDevice,
      [field]: value,
    }));
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("New Device ", newDevice);

    const productUrlHapus = `https://hetrik-api.onrender.com/api/device/devices/${newDevice._id}`;
    axios.put(productUrlHapus,newDevice,  {
      headers: {
          'Authorization': `Bearer ${storedToken}`,
      },
  })
    .then(response => {
      // setNewDevice(response.data);    
      handleDialogCloseForm();
      Swal.fire({
        title: 'Berhasil Memperbarui Data',
        text: 'Selamat Anda Berhasil Memperbarui Data',
        icon: 'success',
        confirmButtonText: 'OK',
      }).then((result) => {
        // Check if the user clicked "OK"
      }); 
      
    })
    .catch(error => {
        console.error('Error during login:', error);
    });

    // You can add validation logic here before submitting

    // Close the dialog after submitting the form
    // handleDialogClose();
  };

  const handleDelete = (id) => {
  console.log("Button DI click Delete ", id)
  handleDialogCloseMaster();
  Swal.fire({
    title: "Apakah Anda Yakin Ingin Menghapus Data Ini ?",
    text: "Anda Tidak Akan dapat mengembalikan Datanya !",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes!",
  }).then((result) => {
    
    if (result.isConfirmed) {

      const productUrlHapus = `https://hetrik-api.onrender.com/api/device/devices/${id}`;
      axios.delete(productUrlHapus,  {
        headers: {
            'Authorization': `Bearer ${storedToken}`,
        },
    })
      .then(response => {
          console.log('Login successful:', response.data);

          Swal.fire({
            title: "Deleted!",
            text: "Your Data has been deleted.",
            icon: "success"
          });       
      })
      .catch(error => {
          console.error('Error during login:', error);
      });


    }else{
      setDialogOpenMaster(true);
    }
  });
  };

  const totalDayangYangdihabiskan = chartLine
  .filter((dataItem) => {
    const timestamp = new Date(dataItem.WaktuMulai); // Convert timestamp to Date object

    return (
      (!startDate || timestamp >= new Date(startDate)) &&
      (!endDate || timestamp <= new Date(endDate))
    );
  })
  .reduce((accumulator, dataItem) => {
    // Menggunakan Math.abs untuk memastikan nilai positif, sesuai permintaan sebelumnya
    const biayaDayaDigunakan = Math.abs(dataItem.TotalDayaHabiskan);
    console.log("Accumulator ", accumulator);
    console.log("biayaDayaDigunakan ", biayaDayaDigunakan);

    return accumulator + biayaDayaDigunakan;
  }, 0);
// JSX for the table inside the dialog
const dialogTable = (
  <TableContainer component={Paper}>
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Waktu Mulai Pemakaian </TableCell>
          <TableCell>Waktu Selesai Pemakaian  </TableCell>
          <TableCell>Daya Yang Dihabiskan </TableCell>
          <TableCell>Tarif Energy </TableCell>
          <TableCell>Biaya Daya Yang Dihabiskan </TableCell>
          {/* Add more columns based on your data */}
        </TableRow>
      </TableHead>
      <TableBody>
        {/* Map through your data and render rows */}
        {chartLine
          .filter((dataItem) => {
            const timestamp = new Date(dataItem.WaktuMulai); // Convert timestamp to Date object

            return (
              (!startDate || timestamp >= new Date(startDate)) &&
              (!endDate || timestamp <= new Date(endDate))
            );
          })
          .map((dataItem) => (
            <TableRow key={dataItem.id}>
              <TableCell>
                {(() => {
                  const timestamp = new Date(dataItem.WaktuMulai);
                  return (
                    timestamp.getFullYear() +
                    "-" +
                    ("0" + (timestamp.getMonth() + 1)).slice(-2) +
                    "-" +
                    ("0" + timestamp.getDate()).slice(-2) +
                    " " +
                    ("0" + timestamp.getHours()).slice(-2) +
                    ":" +
                    ("0" + timestamp.getMinutes()).slice(-2) +
                    ":" +
                    ("0" + timestamp.getSeconds()).slice(-2)
                  );
                })()}
              </TableCell>
              <TableCell>
                {(() => {
                  const timestamp = new Date(dataItem.WaktuSelesai);
                  return (
                    timestamp.getFullYear() +
                    "-" +
                    ("0" + (timestamp.getMonth() + 1)).slice(-2) +
                    "-" +
                    ("0" + timestamp.getDate()).slice(-2) +
                    " " +
                    ("0" + timestamp.getHours()).slice(-2) +
                    ":" +
                    ("0" + timestamp.getMinutes()).slice(-2) +
                    ":" +
                    ("0" + timestamp.getSeconds()).slice(-2)
                  );
                })()}
              </TableCell>
              <TableCell>{dataItem.TotalDayaHabiskan} Kwh </TableCell>
              <TableCell>Rp {dataItem.TarifEnergi} per Kwh  </TableCell>
              <TableCell>Rp {dataItem.BiayaDayaDigunakan.toLocaleString()}</TableCell>
              {/* Add more cells based on your data */}
            </TableRow>
          ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={2} />
          <TableCell>
            Total Biaya Daya:
            {totalDayangYangdihabiskan.toLocaleString()} Kwh
          </TableCell>
          <TableCell>
            {/* Total Tarif Energi:
               Rp {totalTarifEnergi.toLocaleString()} */}
          </TableCell>
          <TableCell>
            Total Keseluruhan: RP {totalBiayaDayaDigunakan.toLocaleString()}
          </TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  </TableContainer>
);

const dialogDevice = (
  <TableContainer component={Paper}>
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>No</TableCell>
          <TableCell>Nama Device </TableCell>
          <TableCell>Category Device</TableCell>
          <TableCell>Device Power</TableCell>
          <TableCell>Edit</TableCell>
          <TableCell>Delete</TableCell>

          {/* Add more columns based on your data */}
        </TableRow>
      </TableHead>
      <TableBody>
        {/* Map through your data and render rows */}
        {device
          
          .map((dataItem,index) => (
           
            <TableRow key={dataItem.id}>
              <TableCell>
               {
                 index + 1}
                {console.log("dAta Item barang ", dataItem)}
              </TableCell>
              <TableCell>{dataItem.device_name} </TableCell>
              <TableCell>{dataItem.device_category} </TableCell>
              <TableCell>{dataItem.product_power} </TableCell>

              <TableCell>
                {/* Untuk Edit */}
              <animated.span
                        style={deleteSpring}
                        onClick={() => handleEdit(dataItem._id)}
                      >
                        <BsPencilSquare
                          icon={faTimes}
                          className="text-danger"
                        />
                      </animated.span> </TableCell>

              <TableCell>
              <animated.span
                        style={deleteSpring}
                        onClick={() => handleDelete(dataItem._id)}
                      >
                        <FontAwesomeIcon
                          icon={faRemove}
                          className="text-danger"
                        />
                      </animated.span> </TableCell>

            </TableRow>
          ))}
      </TableBody>

    </Table>
  </TableContainer>
);



  return (
    <main className='main-container'>
        <div className='main-title center'>
            <h3 style={headerStyle}><b>DASHBOARD</b></h3>
        </div>

        <div className='main-cards'>
            <div className='card'>
                <div className='card-inner' onClick={handleDialogOpenMaster}>
                    <h3 style={headerStyle2}>DEVICE</h3>
                    <BsFillArchiveFill className='card_icon'/>
                </div>
                <h1 style={headerStyle2}>{productCount}</h1>
            </div>
            <div className='card '>
                <div className='card-inner'>
                    <h3 style={headerStyle2}>Daya Bangunan</h3>
                    <BsFillGrid3X3GapFill className='card_icon'/>
                </div>
                <h1 style={headerStyle2}>{categoryCount}</h1>
            </div>
            <div className='card'>
                <div className='card-inner'  onClick={handleDialogOpen}>
                    <h3 style={headerStyle2}>Total Listrik</h3>
                    <BsPeopleFill className='card_icon'/>
                </div>
                <h1 style={headerStyle2}>{chartLineTest}</h1>
            </div>
            {/* <div className='card'>
                <div className='card-inner'>
                    <h3>ALERTS</h3>
                    <BsFillBellFill className='card_icon'/>
                </div>
                <h1>42</h1>
            </div> */}


         {/* Dialog for displaying the table */}
         <Dialog open={dialogOpenmaster} onClose={handleDialogCloseMaster} fullWidth maxWidth="md">
        <DialogTitle>Master Device</DialogTitle>
        <DialogContent>
         
          {dialogDevice}
        </DialogContent>
      </Dialog>

               {/* Dialog for displaying the table */}
      <Dialog open={dialogOpen} onClose={handleDialogClose} fullWidth maxWidth="md">
        <DialogTitle>Riwayat Total Listrik</DialogTitle>
        <DialogContent>
          {/* Date range filter */}
          <TextField
            label="Start Date"
            type="datetime-local"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            label="End Date"
            type="datetime-local"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            InputLabelProps={{
              shrink: true,
            }}
          />
          {dialogTable}
        </DialogContent>
      </Dialog>


{/* DIsplay Form  */}
    
    
<Dialog open={dialogOpenmasterForm} onClose={handleDialogCloseForm} fullWidth maxWidth="md">
      <DialogTitle>Edit Item</DialogTitle>
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
        </div>

        <div className='charts'>
            <ResponsiveContainer width="100%" height="100%">
            {console.log("barChartData:", barChartData)}  
            <BarChart
            
            width={500}
            height={300}
            data={barChartData}
            margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
            }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="device_name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="product_power" fill="#2962ff" />
                {/* <Bar dataKey="device_category" fill="#82ca9d" /> */} 
                
                </BarChart>
            </ResponsiveContainer>

            <ResponsiveContainer width="100%" height="100%">
  <LineChart
    width={500}
    height={300}
    data={chartLine}
    margin={{
      top: 5,
      right: 30,
      left: 20,
      bottom: 5,
    }}
  >
    <CartesianGrid strokeDasharray="3 3" />
    {/* <XAxis dataKey="device_name" /> */}
    <YAxis />
    <Tooltip
      label={({ payload }) => {
        console.log("Payload ", payload);
        if (payload && payload.length > 0) {
          const dataKey = payload[0].dataKey; // Assuming the first payload item has the dataKey
          if (dataKey === 'BiayaDayaDigunakan') {
            return 'Waktu Pemakaian';
          } else if (dataKey === 'TotalDayaHabiskan') {
            return 'Total Daya Habiskan';
          }
        }
        return '0';
      }}
      formatter={(value, name) => {
        const formattedValue = value.toLocaleString();

        const formattedValueRupiah = Math.abs(value).toLocaleString(); // Use Math.abs for the value

    
        if (name === 'Total Daya Habiskan') {
          return `${formattedValue} Kwh`; // No 'Rp' prefix for Total Daya Habiskan
        } else if (name === 'Biaya Daya Yang Dipakai') {
          return `Rp ${formattedValueRupiah}`; // Add 'Rp' prefix for Biaya Daya Yang Dipakai
        }
    
        return '0';
      }}
    />

    {/* <Tooltip /> */}
    <Legend />
    <Line
      type="monotone"
      dataKey="BiayaDayaDigunakan"
      stroke="#8884d8"
      name="Biaya Daya Yang Dipakai"
      activeDot={{ r: 8 }}
    />
    <Line
      type="monotone"
      dataKey="TotalDayaHabiskan"
      stroke="#82ca9d"
      name="Total Daya Habiskan"
    />

    {/* <Line type="monotone" dataKey="product_power" stroke="#8884d8" activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey="product_power" stroke="#82ca9d" /> */}
  </LineChart>
</ResponsiveContainer>

        </div>
    </main>
  )
}

export default DashboardPage