import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaShoppingCart, FaEye } from "react-icons/fa";
import PropTypes from 'prop-types';
import { Rating, Stack } from "@mui/material";
import { fetchProducts } from "../redux/productSlice";
import { addToCart } from "../redux/cartSlice";
import ProductDetail from "./ProductDetail";
import LoadingSpinner from "./LoadingSpinner";
import toast from "react-hot-toast";

const AllProducts = ({ id }) => {
  const dispatch = useDispatch();
  const { filteredItems: products, loading } = useSelector(state => state.products);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isDetailOpen, setIsDetailOpen] = useState(false);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    toast.success("Item added to cart!");
  };

  const handleViewProduct = (product) => {
    setSelectedProduct(product);
    setIsDetailOpen(true);
  };

  const closeProductDetail = () => {
    setIsDetailOpen(false);
    setSelectedProduct(null);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <LoadingSpinner text="Loading products..." />
      </div>
    );
  }

  return (
    <>
      <div id={id} className="py-8 bg-gray-100">
        <div className="container mx-auto px-4">
          <p className="text-center text-3xl font-extrabold text-gray-800 mb-6">
            All Products
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {products.slice(0, 8).map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col group"
              >
                <div className="relative">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-48 object-contain p-2"
                  />
                  {/* Overlay buttons */}
                  <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                    <button
                      onClick={() => handleViewProduct(product)}
                      className="bg-white text-gray-800 p-3 rounded-full hover:bg-gray-100 transition-colors duration-300"
                      title="Quick View"
                    >
                      <FaEye />
                    </button>
                    <button
                      onClick={() => handleAddToCart(product)}
                      className="bg-red-600 text-white p-3 rounded-full hover:bg-red-700 transition-colors duration-300"
                      title="Add to Cart"
                    >
                      <FaShoppingCart />
                    </button>
                  </div>
                </div>
                <div className="p-3 flex-grow">
                  <h3 className="text-base font-semibold text-gray-800 mb-1 line-clamp-2">
                    {product.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-1">${product.price}</p>
                </div>
                <div className="p-3">
                   <Stack spacing={1} className="mb-2">
                      <Rating 
                        name='half-rating' 
                        defaultValue={product.rating?.rate || 2.5} 
                        precision={0.5} 
                        size="small"
                        readOnly
                      />
                    </Stack>
                  <button
                    onClick={() => handleAddToCart(product)}
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

      {/* Product Detail Modal */}
      <ProductDetail
        product={selectedProduct}
        isOpen={isDetailOpen}
        onClose={closeProductDetail}
      />
    </>
  );
};

AllProducts.propTypes = {
  id: PropTypes.string.isRequired,
};

export default AllProducts;