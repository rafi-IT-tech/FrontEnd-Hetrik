import React, {useState, useEffect} from 'react';
import axios from 'axios';
// import {createBrowserHistory} from 'react-router-dom';

const Servicemain = () => {
    const [buildingName, setBuildingName] = useState('');
    const [powerOptions, setPowerOptions] = useState([]);
    const [selectedPower, setSelectedPower] = useState('');

    // const history = createBrowserHistory();

    useEffect(() => {
        const URL_API_POWER_BUILDING = 'https://example.com/api/power-options';

        axios
            .get(URL_API_POWER_BUILDING)
            .then(response => {
                setPowerOptions(response.data);
            })
            .catch(error => {
                console.error('Error fetching power options:', error);
            });
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log('Data yang di-submit:', {buildingName, selectedPower});

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
                        <option value="" disabled="disabled">Building power</option>
                        {
                            powerOptions.map(
                                (option) => (<option key={option.id} value={option.value}>{option.label}</option>)
                            )
                        }
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
