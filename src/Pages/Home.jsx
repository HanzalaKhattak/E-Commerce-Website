// import React from 'react'
import categories from "../assets/mockData";
import heroimage from "../assets/images/hero/heroimage.png";
import InfoSection from "../Components/InfoSection";  
import CatagorySection from "../Components/catagorySection";
import AllProducts from "../Components/AllProducts";

const Home = () => {
  const scrollToProducts = () => {
    document.getElementById("all-products-section").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-white mt-2 px-4 md:px-16 lg:px-24">
      <div className="container mx-auto py-4 flex flex-col md:flex-row space-x-2">
        <div className="w-full md:w-1/4">
          <div className="bg-red-600 text-white text-xs font-bold px-2.5 py-2.5">
            SHOP BY CATEGORIES
          </div>
          <ul className="space-y-4 bg-gray-200 p-3 ">
            {categories.map((category, index) => (
              <li
                key={index}
                className="flex items-center text-sm font font-medium"
              >
                <div className="w-2 h-2 border border-red-500 rounded-full mr-2"></div>
                {category}
              </li>
            ))}
          </ul>
        </div>
        <div className="w-full md:w-3/4 mt-8 md:mt-0 h-96 relative bg-black">
          <div className="absolute right-5 mt-10">
            <img src={heroimage} alt="" className="h-full w-full" />
          </div>
          <div className="absolute top-1/2 left-8 transform -translate-y-1/2 text-white items-center text-left">
            <p className="font-bold text-2xl">
              Welcome to <b>HBK</b>
            </p>
            <p>Get the best quality products at the best prices</p>
            <button
              onClick={scrollToProducts}
              className="mt-4 py-2 bg-red-600 text-white px-4 rounded hover:bg-red-700 transition-colors duration-300"
            >
              SHOP NOW
            </button>
          </div>
        </div>
      </div>
      <InfoSection />
      <CatagorySection />
z      <AllProducts id="all-products-section" />
    </div>
  );
};

export default Home;