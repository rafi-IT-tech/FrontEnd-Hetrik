import React from 'react';
import asset1 from '../../assets/asset-1.png';
import asset2 from '../../assets/asset-2.png';
import asset3 from '../../assets/asset-3.png';
import asset4 from '../../assets/asset-4.png';
import asset5 from '../../assets/asset-5.png';

const Homemain = () => {
    return (
        <div>
            <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4 p-8">
                <div className="text-center md:text-left md:w-1/2 ml-20 md:mb-8">
                    <h1 className="text-4xl font-bold text-blue-500">
                        Welcome to the best solution for saving electricity!
                    </h1>
                    <p className="text-gray-600 mt-10">
                        Discover our advanced innovations and technologies to optimize your energy use
                        and save on electricity costs.
                    </p>
                    <button
                        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded mt-20">
                        Count Now
                    </button>
                </div>

                <div className="md:flex-shrink-0 md:w-1/2">
                    <img src={asset1} alt="Description of the image" className="w-full h-auto"/>
                </div>
            </div>

            <div className="relative">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 240" fill="#3b82f6">
                    <path d="M0,160L80,149.3C160,139,320,117,480,133.3C640,149,800,203,960,208C1120,213,1280,171,1360,149.3L1440,128L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
                </svg>

                <div className="bg-blue-500 text-white relative">
                    <div className="flex items-center justify-center relative z-10">
                        <div className="flex items-center mr-20">
                            <img src={asset2} alt="Company Logo" className="h-80 mr-30 z-20"/>
                        </div>
                        <div className="flex flex-col ml-4 mr-20">
                            <span className="font-bold text-xl">why should you use our platform?</span>
                            <p className="max-w-lg mt-5">
                                - Our platform provides an accurate electricity calculator.
                                <br/>- Provide weekly reports of electricity usage.
                                <br/>- and provide rewards in the form of electricity vouchers to users
                                    according to T&C
                            </p>
                        </div>
                    </div>
                </div>

                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 240" fill="#3b82f6">
                    <path d="M0,160L80,149.3C160,139,320,117,480,133.3C640,149,800,203,960,208C1120,213,1280,171,1360,149.3L1440,128L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path>
                </svg>
            </div>
            <div className="flex flex-col items-center justify-center min-h-screen">
            <h2 className="text-4xl font-bold mb-10 text-blue-500">3 Ways To Save Electricity</h2>
            <div className="flex mt-10">
                <img src={asset3} alt="Gambar 1" className="w-60 h-60 object-cover mr-4"/>
                <img src={asset4} alt="Gambar 2" className="w-60 h-60 object-cover mr-4"/>
                <img src={asset5} alt="Gambar 3" className="w-60 h-60 object-cover"/>
            </div>
            </div>
        </div>
    );
};

export default Homemain;