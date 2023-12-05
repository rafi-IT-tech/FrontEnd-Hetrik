import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { createBrowserHistory } from 'history'; 

const Paymentmain = () => {
    const [namaPemilikKartu, setNamaPemilikKartu] = useState('');
    const [nomorKartu, setNomorkartu] = useState('');

    const [powerOptions, setPowerOptions] = useState([]);
    const [selectedJenis, setSelectedJenis] = useState('');

    const history = createBrowserHistory();
    const calculateExpiryDate = () => {
        const currentDate = new Date();
        // Tambah 30 hari ke tanggal sekarang
        currentDate.setDate(currentDate.getDate() + 30);
    
        // Format tanggal menjadi YYYY-MM-DD
        const year = currentDate.getFullYear();
        const month = String(currentDate.getMonth() + 1).padStart(2, '0');
        const day = String(currentDate.getDate()).padStart(2, '0');
    
        return `${year}-${month}-${day}`;
      };

    // const handleSubmit = (e) => {
       

    //     e.preventDefault();

    //     const storedToken = localStorage.getItem('token');
    //     const userID = localStorage.getItem('userID');
    
    //     const postData = {
    //       UserID: userID,
    //       JenisPembayaran: selectedJenis,
    //       NomorKartu: nomorKartu,
    //       TanggalKadaluarsa: calculateExpiryDate(), // Gunakan fungsi calculateExpiryDate
    //       NamaPemilikKartu: namaPemilikKartu,
    //       DayaBangunan: "", // Sesuaikan dengan data yang diperlukan
    //     };
    
    //     const API_SAVE = 'https://hetrik-api.onrender.com/api/payment/paymentMethods';
    
    //     axios.post(API_SAVE, postData, {
    //       headers: {
    //         'Authorization': `Bearer ${storedToken}`,
    //       },
    //     })
    //       .then(response => {
    //         console.log('Payment data saved successfully:', response);
    //         // Lakukan tindakan tambahan jika perlu
    //       })
    //       .catch(error => {
    //         console.error('Error saving payment data:', error);
    //         // Handle errors as needed
    //       });
    //     // Redirect Off
    //     setTimeout(() => {
    //         history.push('/dashboard');
    //         window.location.reload();
            
    //     }, 3500);

    // };


    const handleSubmit = (e) => {
        e.preventDefault();
      
        const storedToken = localStorage.getItem('token');
        const userID = localStorage.getItem('userID');
      
        // Generate prefix based on the selected payment method
        let nomorKartuPrefix = '';
        if (selectedJenis === 'Transfer') {
          // Add your logic to generate the prefix for Transfer
          nomorKartuPrefix = '3125';
        }
      
        const postData = {
          UserID: userID,
          JenisPembayaran: selectedJenis,
          NomorKartu: `${nomorKartuPrefix}`, // Concatenate the prefix with the nomorKartu
          TanggalKadaluarsa: calculateExpiryDate(),
          NamaPemilikKartu: namaPemilikKartu,
          DayaBangunan: "",
        };
      
        console.log("Post Data" ,postData);
        const API_SAVE = 'https://hetrik-api.onrender.com/api/payment/paymentMethods';
      
        axios.post(API_SAVE, postData, {
          headers: {
            'Authorization': `Bearer ${storedToken}`,
          },
        })
          .then(response => {
            console.log('Payment data saved successfully:', response);
            // Lakukan tindakan tambahan jika perlu
          })
          .catch(error => {
            console.error('Error saving payment data:', error);
            // Handle errors as needed
          });
      
        // Redirect Off
        setTimeout(() => {
          history.push('/dashboard');
          window.location.reload();
        }, 3500);
      };
      
    return (
        <div
            className="max-w-md mx-auto bg-white rounded p-10 shadow-lg lg:mt-60 xl:mt-40">
            <h2 className="text-xl font-semibold mb-4">Payment Method</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-8">
                    <label
                        htmlFor="nomorKartu"
                        className="block text-gray-700 text-sl font-bold mb-2 mt-10">Virtual Account </label>
                    <input
                        type="text"
                        id="nomorKartu"
                        name="nomorKartu"
                        value={3125}
                        onChange={(e) => setNomorkartu(e.target.value)}
                        className="border border-gray-300 p-2 w-full"
                        required="required"/>
                </div>

                <div className="mb-8">
                    <label
                        htmlFor="namaPemilikKartu"
                        className="block text-gray-700 text-sl font-bold mb-2 mt-10">Nomer Telephone</label>
                    <input
                        type="number"
                        id="Nomer Telephone"
                        name="namaPemilikKartu"
                        value={namaPemilikKartu}
                        onChange={(e) => setNamaPemilikKartu(e.target.value)}
                        className="border border-gray-300 p-2 w-full"
                        required="required"/>
                </div>
                <div className="mb-4">
                    <label
                        htmlFor="selectedJenis"
                        className="block text-gray-700 text-sl font-bold mb-2">Jenis Pembayaran</label>
                    <select
                        id="selectedJenis"
                        name="selectedJenis"
                        value={selectedJenis}
                        onChange={(e) => setSelectedJenis(e.target.value)}
                        className="border border-gray-300 p-2 w-full"
                        required="required">
                   
                        <option value="Transfer">Transfer </option>
                    
                 
                        {/* {
                            powerOptions.map(
                                (option) => (<option key={option.id} value={option.value}>{option.label}</option>)
                            )
                        } */}
                    </select>
                </div>
                <button
                    type="submit"
                    className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
                    Submit
                </button>
            </form>
        </div>
    );
};

export default Paymentmain;
