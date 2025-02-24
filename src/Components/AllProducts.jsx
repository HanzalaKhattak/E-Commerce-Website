import { useEffect, useState } from "react";
import { FaStar, FaShoppingCart } from "react-icons/fa";

const AllProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setProducts(data);
        } else {
          console.log("Invalid Data Format: ", data);
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error while Fetching Products: ", error);
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-center text-3xl font-bold">Loading...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-center text-red-500">Error: {error.message}</div>
      </div>
    );
  }

  return (
    <div className="py-8 bg-gray-100"> {/* Reduced vertical padding */}
      <div className="container mx-auto px-4">
        <p className="text-center text-3xl font-extrabold text-gray-800 mb-6"> {/* Reduced heading size and margin */}
          All Products
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"> {/* Reduced gap */}
          {products.slice(0, 8).map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col"
            >
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-48 object-contain p-2" // Reduced padding
                />
              </div>
              <div className="p-3 flex-grow"> {/* Reduced padding */}
                <h3 className="text-base font-semibold text-gray-800 mb-1 line-clamp-2"> {/* Reduced font size and margin */}
                  {product.title}
                </h3>
                <p className="text-sm text-gray-600 mb-1">${product.price}</p> {/* Reduced font size and margin */}
                <div className="flex items-center mb-2"> {/* Reduced margin */}
                  {Array.from({ length: 5 }, (_, index) => (
                    <FaStar
                      key={index}
                      className={`h-3 w-3 ${
                        product.rating.rate > index
                          ? "text-yellow-500"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                  <span className="ml-1 text-xs text-gray-500"> {/* Reduced font size and margin */}
                    ({product.rating.rate})
                  </span>
                </div>
              </div>
              <div className="p-3"> {/* Reduced padding */}
                <button className="w-full bg-red-600 hover:bg-red-700 text-white text-sm font-semibold py-1 rounded-md flex items-center justify-center transition-colors duration-300"> {/* Reduced padding and font size */}
                  Add to Cart
                  <FaShoppingCart className="ml-1 h-4 w-4" /> {/* Reduced icon size and margin */}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllProducts;