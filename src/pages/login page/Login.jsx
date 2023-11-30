// src/Login.js
import React, {useState} from 'react';
import image from '../../assets/bglr.png';
import axios from 'axios';  // Import Axios
import { createBrowserHistory } from 'history'; 
import Swal from 'sweetalert2';

// const apiUrl = process.env.REACT_APP_API_ENDPOINT + '/auth/login'; // Use the environment variable
const apiUrl = 'https://hetrik-api.onrender.com/api/auth/login'; // Use the environment variable

const authenticatedApiUrl = 'https://hetrik-api.onrender.com/api/user/users'; // Use the environment variable
const sessionPayment = 'https://hetrik-api.onrender.com/api/payment/paymentMethods/checkPaymentMethodsExist'; // Use the environment variable

const history = createBrowserHistory();

// const authenticatedApiUrl = process.env.REACT_APP_API_ENDPOINT + '/data'; // Use the environment variable
const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [token, setToken] = useState(null);


    const handleLogin = () => {

        // console.log(process.env.REACT_APP_API_ENDPOINT);
        const data = {
            email: email,
            password: password,
        };

        axios.post(apiUrl, data)
            .then(response => {
                console.log('Login successful:', response.data);
                const authToken = response.data.token;
                setToken(authToken);
                localStorage.setItem('token', authToken);
                localStorage.setItem('userID', response.data.userID);

                handleAuthenticatedRequest();
                handleSessionPayment();
            })
            .catch(error => {
                console.error('Error during login:', error);
            });
    };

    const handleAuthenticatedRequest = () => {


        const storedToken = localStorage.getItem('token');
        console.log("Token " + storedToken);
        axios.get(authenticatedApiUrl, {
            headers: {
                'Authorization': `Bearer ${storedToken}`,
            },
        })
            .then(response => {
                console.log('Authenticated request successful:', response.data);

                Swal.fire({
                    title: 'Berhasil Login',
                    text: 'Selamat Anda Berhasil Masuk. Silahkan click Ok untuk diarahkan Ke Halaman Selanjutnya',
                    icon: 'success',
                    confirmButtonText: 'OK',
                  }).then((result) => {
                    // Check if the user clicked "OK"
                    console.log(result);
                    if (result.isConfirmed) {
                      // Redirect to the payment page
                      history.push('/');
                      window.location.reload();
                    }
                  });
                // history.push("/");

                // window.location.reload();
            })
            .catch(error => {
                Swal.fire({
                    title: 'Gagal Login',
                    text: 'Mohon Maaf . mohon diperiksa kembali email dan passwordnya',
                    icon: 'error',
                    confirmButtonText: 'OK',
                  }).then((result) => {
                    // Check if the user clicked "OK"
                    console.log(result);
                    if (result.isConfirmed) {
                      // Redirect to the payment page
                    //   history.push('/Login');
                    //   window.location.reload();
                    }
                  });
                console.error('Error during authenticated request:', error.response.data);
            });
    };

    const handleSessionPayment = () => {

        const storedToken = localStorage.getItem('token');
        const userID = localStorage.getItem('userID');

        const data  = {userId :userID };
        axios.post(sessionPayment, data,{
          headers: {
            'Authorization': `Bearer ${storedToken}`,
          },
        })
          .then(response => {
            const currentDate = new Date();
            const expirationDate = new Date(response.data[0].TanggalKadaluarsa);

            console.log("Waktu ",currentDate);

            console.log("Session ",response.data[0].TanggalKadaluarsa);
            // Pengecekan tanggal kadaluarsa
            if (currentDate < expirationDate) {
              
                // Jika waktu hari ini masih di bawah tanggal kadaluarsa
              localStorage.setItem('is_payment', 'true');
              history.push("/");
            } else {
            // Jika waktu hari ini lebih dari tanggal kadaluarsa
            localStorage.setItem('is_payment', 'false');
            // history.push("/paymentmain");
            }
    
            // window.location.reload();
          })
          .catch(error => {
            // localStorage.setItem('is_payment', 'false');
            // history.push("/paymentmain");
            // window.location.reload();

            // console.error('Error during authenticated request:', error.response.data);
          });


    };

    return (
        <div className="flex flex-col-reverse sm:flex-row h-screen bg-gray-100">
            <div className="sm:w-1/2 flex justify-center items-center">
                <div className="text-center">
                    <h3 className="text-3xl font-bold mb-4 text-blue-500">welcome back to the Hetrik website</h3>
                    <p className="text-gray-600 mb-4">Enter your credentials to access your account !!</p>
                    <input
                        type="text"
                        placeholder="Email"
                        className="w-full border rounded-md py-2 px-3 mb-8 mt-16"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}/>
                    <input
                        type="password"
                        placeholder="Password"
                        className="w-full border rounded-md py-2 px-3 mb-16"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}/>
                    <button
                        className="bg-blue-500 text-white py-2 px-10 mb-4 rounded-md hover:bg-blue-600"
                        onClick={handleLogin}>
                        Login
                    </button>
                    <p className="text-gray-600 mb-4">you don’t have an account?</p>
                </div>
            </div>

            <div className="sm:w-1/2">
                <img
                    src={image}
                    alt="Illustration"
                    className="object-cover w-full h-64 sm:h-full"/>
            </div>
        </div>
    );
};

export default Login;
