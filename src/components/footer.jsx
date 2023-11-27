import React from 'react';
import logo2 from '../assets/logo2.jpg';

const Footer = () => {
  return (
    <footer className="bg-blue-500 p-8 text-white relative">
      <div className="flex items-center justify-center mb-4 relative z-10">
        <div className="flex items-center">
          <img src={logo2} alt="Company Logo" className="h-40 mr-20 z-10" />
        </div>
        <div className="flex flex-col ml-4 mr-20 mb-5">
          <span className="font-bold text-xl">Hetrik</span>
          <p className="max-w-xs mt-2">Interval Lifespace. Jl. Simprug Golf 8 No. 6, RT.2/RW.8, Grogol Sel., Kec. Kby. Lama, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12220</p>
        </div>
        <div className="ml-8 mb-10">
          <span className="font-bold text-xl">Support</span>
          <ul>
            <li className="mt-5 mb-2">
              <a href="/faq">FAQ</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="text-center relative z-10">
        <p>&copy; 2023 Hetrik. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
