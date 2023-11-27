import React from 'react';
import logo from '../../assets/logo2.jpg';
import profil1 from '../../assets/profil1.png';
import profil2 from '../../assets/profil2.png';
import patner1 from '../../assets/patner-1.png';
import patner2 from '../../assets/patner-2.png';
import patner3 from '../../assets/patner-3.png'

const About = () => {
    return (
        <div>
            <div className="flex mt-10 items-center justify-center">
                <div className="text-center">
                    <h2 className="text-3xl font-bold mb-4 text-blue-500">Great Team Create Great Innovation</h2>
                    <div className="space-x-4">
                        <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded">About us</button>
                        <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded">Hetrik Team</button>
                        <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded">Patners</button>
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-center mt-20">
                <div className="max-w-screen-lg mx-auto flex items-center space-x-32">
                    <img src={logo} alt="Sample" className="w-1/4 rounded-lg"/>
                    <div>
                        <h3 className="text-3xl font-bold mb-4 text-blue-500">Who we are?</h3>
                        <p className="text-gray-600 font-medium">Hetrik is a website that presents
                            innovative solutions to help you manage and optimize your use of electrical
                            energy. Hetrik was founded with a vision to contribute to global efforts in
                            energy conservation and sustainability.</p>
                        <br/>
                        <p className="text-gray-600 font-medium">We understand how important saving
                            electricity is in everyday life, both for the environment and for your financial
                            well-being. Therefore, Hetrik is here as your partner on the journey towards
                            better energy efficiency.</p>
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-center">
                <hr className="border-t-2 border-gray-300 w-2/4 my-8 mt-36"/>
            </div>
            <div className="flex items-center justify-center mt-14">
                <div className="max-w-2xl ">
                    <h3 className="text-3xl font-bold mb-4 text-center text-blue-500">Hetrik Team</h3>
                    <div className="flex space-x-8 mt-24">
                        <div className="flex flex-col items-center mr-24">
                            <img
                                src={profil1}
                                alt="Profil 1"
                                className="w-52 h-52 object-cover rounded-lg mb-2"/>
                            <h4 className="text-xl font-bold mb-2 text-blue-500 mt-5">Muchamad Habibie Rafi</h4>
                            <p className="text-gray-600">CEO of Hetrik</p>
                        </div>

                        <div className="flex flex-col items-center">
                            <img
                                src={profil2}
                                alt="Profil 2"
                                className="w-52 h-52 object-cover rounded-lg mb-2"/>
                            <h4 className="text-xl font-bold mb-2 text-blue-500 mt-5">Yoga Ari Nugroho</h4>
                            <p className="text-gray-600">CEO of Hetrik</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-center">
                <hr className="border-t-2 border-gray-300 w-2/5 my-8 mt-36"/>
            </div>
            <div className="flex items-center justify-center mt-14">
                <div className="max-w-2xl">
                    <h3 className="text-3xl font-bold mb-4 text-center text-blue-500">Our Partners</h3>
                    <div className="flex space-x-16 mt-24 mb-36">
                        <div className="flex flex-col items-center">
                            <img src={patner1} alt="Partner 1" className="w-full object-cover mb-2"/>
                        </div>

                        <div className="flex flex-col items-center">
                            <img src={patner2} alt="Partner 2" className="w-full object-cover mb-2"/>
                        </div>

                        <div className="flex flex-col items-center">
                            <img src={patner3} alt="Partner 3" className="w-full object-cover mb-2"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default About;
