// import React from 'react'

import { FaHeadset, FaLock, FaMoneyBillWave, FaShippingFast, FaTag } from "react-icons/fa"

const InfoSection = () => {
    const infoItems = [
        {
            icon :<FaShippingFast className="text-3xl text-red-600"/>,
            title: 'Free Shipping',
            description : 'Get your order delivered fast'
        },
        {
            icon: <FaHeadset className="text-3xl text-red-600"/>,
            title: 'Support 24/7',
            description: 'Here to assist you anytime'
        },
        {
            icon: <FaMoneyBillWave className="text-3xl text-red-600"/>,
            title: '100% MoneyBack Guarantee',
            description: 'Not satisfied? Full Refund'
        },  
        {
            icon: <FaLock className="text-3xl text-red-600"/>,
            title: 'Secure Payment',
            description: 'Your payment is Secure'
        },
        {
            icon: <FaTag className="text-3xl text-red-600"/>,
            title: 'Discount',
            description: 'Enjoy best prices on your payments'
        },
    ]
    return (
        <div className="bg-white pb-8 pt-12">
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {infoItems.map((item, index) => (
              <div
                key={index}
                className="group flex flex-col items-center text-center p-6 border rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105 hover:bg-red-700 text-white cursor-pointer"
              >
                {/* Icon with hover color change */}
                <div className="text-4xl mb-4 group-hover:text-yellow-500 transition-colors duration-300 hover:text-white">
                  {item.icon}
                </div>
                <h3 className="mt-4 text-xl font-semibold">{item.title}</h3>
                <p className="mt-2 text-gray-600 ">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      );
}      

export default InfoSection