// PaymentPage.tsx
'use client';

import React from 'react';
import { FaCcVisa, FaCcMastercard, FaPaypal, FaGooglePay } from 'react-icons/fa';

const PaymentPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-10 flex flex-col items-center">
      <h2 className="text-3xl font-semibold mb-8 text-gray-800">Select a Payment Method</h2>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
        <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg hover:shadow-xl cursor-pointer transform transition-all duration-300 hover:scale-105">
          <FaPaypal size={50} className="text-blue-600 mb-3" />
          <p className="text-lg font-medium text-gray-700">PayPal</p>
        </div>
        
        <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg hover:shadow-xl cursor-pointer transform transition-all duration-300 hover:scale-105">
          <FaCcVisa size={50} className="text-blue-500 mb-3" />
          <p className="text-lg font-medium text-gray-700">Visa</p>
        </div>
        
        <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg hover:shadow-xl cursor-pointer transform transition-all duration-300 hover:scale-105">
          <FaCcMastercard size={50} className="text-red-600 mb-3" />
          <p className="text-lg font-medium text-gray-700">MasterCard</p>
        </div>
        
        <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg hover:shadow-xl cursor-pointer transform transition-all duration-300 hover:scale-105">
          <FaGooglePay size={50} className="text-blue-400 mb-3" />
          <p className="text-lg font-medium text-gray-700">Google Pay</p>
        </div>
      </div>

      <button className="mt-8 px-6 py-3 bg-green-500 text-white font-bold rounded-lg hover:bg-green-600 transition-all duration-300 transform hover:scale-105">
        Confirm Payment
      </button>
    </div>
  );
};

export default PaymentPage;
