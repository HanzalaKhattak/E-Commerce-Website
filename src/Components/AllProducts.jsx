import axios from "axios";
import { useEffect, useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { SyncLoader } from "react-spinners";
import { useNavigate } from "react-router-dom";
import PropTypes from 'prop-types';
import { Rating, Stack } from "@mui/material";

const AllProducts = ({ id }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const productAPI = "https://fakestoreapi.com/products";
  const navigate = useNavigate();

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const res = await axios.get(productAPI);
      if (res.status === 200) {
        setProducts(res.data);
        setLoading(false);
      }
    } catch (error) {
      console.error("Error while Fetching Products: ", error);
      setLoading(false);
    }
  };

  const addToCart = (product) => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
    navigate("/cart");
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <SyncLoader color="#000C66" size={20} className="" />
      </div>
    );
  }

  return (
    <div id={id} className="py-8 bg-gray-100">
      <div className="container mx-auto px-4">
        <p className="text-center text-3xl font-extrabold text-gray-800 mb-6">
          All Products
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {products.slice(0, 8).map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col"
            >
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-48 object-contain p-2"
                />
              </div>
              <div className="p-3 flex-grow">
                <h3 className="text-base font-semibold text-gray-800 mb-1 line-clamp-2">
                  {product.title}
                </h3>
                <p className="text-sm text-gray-600 mb-1">${product.price}</p>
                <div className="flex items-center mb-2">
                <Stack spacing={1}>
                    <Rating name='half-rating' defaultValue={2.5} precision={0.5} />
                  </Stack>
                  {/* {Array.from({ length: 5 }, (_, index) => (
                    <FaStar
                      key={index}
                      className={`h-3 w-3 ${
                        product.rating.rate > index
                          ? "text-yellow-500"
                          : "text-gray-300"
                      }`}
                    />
                  ))} */}


                  {/* <span className="ml-1 text-xs text-gray-500">
                    ({product.rating.rate})
                  </span> */}
                </div>
              </div>
              <div className="p-3">
                <button
                  onClick={() => addToCart(product)}
                  className="w-full bg-red-600 hover:bg-red-700 text-white text-sm font-semibold py-1 rounded-md flex items-center justify-center transition-colors duration-300"
                >
                  Add to Cart
                  <FaShoppingCart className="ml-1 h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

AllProducts.propTypes = {
  id: PropTypes.string.isRequired,
};

export default AllProducts;