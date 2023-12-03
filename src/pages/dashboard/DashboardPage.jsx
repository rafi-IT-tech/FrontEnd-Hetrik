import React,{useEffect, useState} from 'react'
import 
{ BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsFillBellFill}
 from 'react-icons/bs'
 import axios from 'axios';
 import 
 { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } 
 from 'recharts';

 import './Dashboard.css'; // Import your CSS file


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
  const [customerCount, setCustomerCount] = useState(0);
  const [alertCount, setAlertCount] = useState(0);
  const [barChartData, setBarChartData] = useState([]);
  const storedToken = localStorage.getItem('token');


  const headerStyle = {
    color: 'black',
    textAlign: 'center'
  };



  const transaksi = 'https://hetrik-api.onrender.com/api/hitung/usage/';

  const productUrl = 'https://hetrik-api.onrender.com/api/device/devices';
  const bangunanUrl = 'https://hetrik-api.onrender.com/api/dayaBangunan/dayabangunan';
  const customerUrl = 'https://api.example.com/customers';
  const alertUrl = 'https://api.example.com/alerts';
  useEffect (() => {

    // Axios GET requests for each card
    axios.get(productUrl, {
      headers: {
          'Authorization': `Bearer ${storedToken}`,
      },
  })
      .then(response => setProductCount(response.data.length))
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

    axios.get(customerUrl, {
      headers: {
          'Authorization': `Bearer ${storedToken}`,
      },
  })
      .then(response => setCustomerCount(response.data.length))
      .catch(error => console.error('Error fetching customer data:', error));

    axios.get(alertUrl, {
      headers: {
          'Authorization': `Bearer ${storedToken}`,
      },
  })
      .then(response => setAlertCount(response.data.length))
      .catch(error => console.error('Error fetching alert data:', error));


    axios.get(productUrl,{
      headers: {
        'Authorization': `Bearer ${storedToken}`,
    },
    })
    .then(response => setBarChartData(response.data))
    .catch(error => console.error('Error fetching bar chart data:', error));


    axios.get(productUrl,{
      headers: {
        'Authorization': `Bearer ${storedToken}`,
    },
    })
    .then(response => setBarChartData(response.data))
    .catch(error => console.error('Error fetching bar chart data:', error));

  }, []);
    const data = [
        {
          name: 'Page A',
          uv: 4000,
          pv: 2400,
          amt: 2400,
        },
        {
          name: 'Page B',
          uv: 3000,
          pv: 1398,
          amt: 2210,
        },
        {
          name: 'Page C',
          uv: 2000,
          pv: 9800,
          amt: 2290,
        },
        {
          name: 'Page D',
          uv: 2780,
          pv: 3908,
          amt: 2000,
        },
        {
          name: 'Page E',
          uv: 1890,
          pv: 4800,
          amt: 2181,
        },
        {
          name: 'Page F',
          uv: 2390,
          pv: 3800,
          amt: 2500,
        },
        {
          name: 'Page G',
          uv: 3490,
          pv: 4300,
          amt: 2100,
        },
      ];
     

  return (
    <main className='main-container'>
        <div className='main-title center'>
            <h3 style={headerStyle}><b>DASHBOARD</b></h3>
        </div>

        <div className='main-cards'>
            <div className='card'>
                <div className='card-inner'>
                    <h3>DEVICE</h3>
                    <BsFillArchiveFill className='card_icon'/>
                </div>
                <h1>{productCount}</h1>
            </div>
            <div className='card '>
                <div className='card-inner'>
                    <h3>Daya Bangunan</h3>
                    <BsFillGrid3X3GapFill className='card_icon'/>
                </div>
                <h1>{categoryCount}</h1>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>Total Listrik</h3>
                    <BsPeopleFill className='card_icon'/>
                </div>
                <h1>33</h1>
            </div>
            {/* <div className='card'>
                <div className='card-inner'>
                    <h3>ALERTS</h3>
                    <BsFillBellFill className='card_icon'/>
                </div>
                <h1>42</h1>
            </div> */}
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
                <Bar dataKey="product_power" fill="#8884d8" />
                {/* <Bar dataKey="device_category" fill="#82ca9d" /> */}
                </BarChart>
            </ResponsiveContainer>

            <ResponsiveContainer width="100%" height="100%">
                <LineChart
                width={500}
                height={300}
                data={data}
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
                <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey="uv" stroke="#82ca9d" />

                {/* <Line type="monotone" dataKey="product_power" stroke="#8884d8" activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey="product_power" stroke="#82ca9d" /> */}
                </LineChart>
            </ResponsiveContainer>

        </div>
    </main>
  )
}

export default DashboardPage