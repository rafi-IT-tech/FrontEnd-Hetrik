import React, {useState, useEffect} from 'react';
import axios from 'axios';
// import {createBrowserHistory} from 'react-router-dom';
import Swal from 'sweetalert2';
import { createBrowserHistory } from 'history'; 

    const history = createBrowserHistory();
const Servicemain = () => {
    const [buildingName, setBuildingName] = useState('');
    const [powerOptions, setPowerOptions] = useState([]);
    const [selectedPower, setSelectedPower] = useState('');
    



    const handleSubmit = (e) => {
        e.preventDefault();


        const data = {
            building_name: buildingName,
            powerCapacity: selectedPower,
        };

        console.log("Data Yang dikirim atau dijadikan Request Building Nama, " + data.building_name);
        console.log("Data Yang dikirim atau dijadikan Request Building Power, " + data.powerCapacity);

        // console.log('Data yang di-submit:', {buildingName, selectedPower});
        const URL_API_POWER_BUILDING = 'https://hetrik-api.onrender.com/api/dayaBangunan/dayabangunan';

        const storedToken = localStorage.getItem('token');
        axios
            .post(URL_API_POWER_BUILDING, data,{
                headers:{
                    'Authorization': `Bearer ${storedToken}`
                }
            })
            .then(response => {
                // setPowerOptions(response.data);
                console.log("Response Success",response.data._id);

                localStorage.setItem('BuildingPowerID',response.data._id);

                Swal.fire({
                    title: 'Save Successful',
                    text: 'Your data has been saved successfully. Silahkan click Ok untuk diarahkan Ke Service Calculator',
                    icon: 'success',
                    confirmButtonText: 'OK',
                  }).then((result) => {
                    // Check if the user clicked "OK"
                    console.log(result);
                    if (result.isConfirmed) {
                      // Redirect to the payment page
                      history.push('/Calculate');
                      window.location.reload();
                    }
                  });
            })
            .catch(error => {
                console.error('Error fetching power options:', error);
            });
        // Redirect Off
        // history.push('/dashboard');
    };

    return (
        <div
            className="max-w-md mx-auto bg-white rounded p-10 shadow-lg lg:mt-60 xl:mt-40">
            <h2 className="text-xl font-semibold mb-4">Form Building</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-8">
                    <label
                        htmlFor="buildingName"
                        className="block text-gray-700 text-sl font-bold mb-2 mt-10">Building Name</label>
                    <input
                        type="text"
                        id="buildingName"
                        name="buildingName"
                        value={buildingName}
                        onChange={(e) => setBuildingName(e.target.value)}
                        className="border border-gray-300 p-2 w-full"
                        required="required"/>
                </div>
                <div className="mb-4">
                    <label
                        htmlFor="powerOptions"
                        className="block text-gray-700 text-sl font-bold mb-2">Select Power Building</label>
                    <select
                        id="powerOptions"
                        name="powerOptions"
                        value={selectedPower}
                        onChange={(e) => setSelectedPower(e.target.value)}
                        className="border border-gray-300 p-2 w-full"
                        required="required">
                        <option value="" >Building power</option>
                        <option value="900" >900 VA </option>
                        <option value="1200">1200 VA </option>
                        <option value="2200">2200 VA</option>
                        <option value="3500">3500 VA</option>
                        <option value="5500">5500 VA</option>
                        <option value="6600">6600 VA</option>

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

export default Servicemain;
