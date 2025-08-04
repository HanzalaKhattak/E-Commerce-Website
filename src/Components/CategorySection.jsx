// import React from 'react'
import ManImage from "../assets/images/catagorySection/man-image.jpg"
import WomenImage from "../assets/images/catagorySection/women-img.jpg"
import KidsImage from "../assets/images/catagorySection/kid-img.jpg"

const catagories = [
    {
        title: "Men",
        imageURL: ManImage
    },
    {
        title: "Women",
        imageURL: WomenImage
    },
    {
        title: "Kids",
        imageURL: KidsImage
    },
];

const CatagorySection = () => {
  return (
    <div className="container mx-auto py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {catagories.map((catagory, index) => (
                <div key={index} className="relative group">
                    <div className="w-full h-80 rounded-lg overflow-hidden relative">
                    <img src={catagory.imageURL} alt={catagory.title} className="w-full h-full object-cover object-top rounded-lg shadow-md "  />
                    </div>
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <h3 className="text-white text-2xl font-bold mb-4">{catagory.title}</h3>
                        <button className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition-colors duration-300">
                            Shop Now
                        </button>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default CatagorySection