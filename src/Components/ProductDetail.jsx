import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { FaShoppingCart, FaHeart, FaShare, FaTimes, FaPlus, FaMinus } from 'react-icons/fa';
import { Rating, Stack } from '@mui/material';
import { addToCart } from '../redux/cartSlice';
import toast from 'react-hot-toast';
import PropTypes from 'prop-types';

const ProductDetail = ({ product, isOpen, onClose }) => {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  if (!isOpen || !product) return null;

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      dispatch(addToCart(product));
    }
    toast.success(`${quantity} item(s) added to cart!`);
    onClose();
  };

  const incrementQuantity = () => setQuantity(prev => prev + 1);
  const decrementQuantity = () => setQuantity(prev => Math.max(1, prev - 1));

  // Create multiple images from the single product image for demonstration
  const productImages = [product.image, product.image, product.image];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b">
          <h2 className="text-2xl font-bold text-gray-800">Product Details</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <FaTimes size={24} />
          </button>
        </div>

        <div className="p-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Product Images */}
            <div>
              <div className="mb-4">
                <img
                  src={productImages[selectedImageIndex]}
                  alt={product.title}
                  className="w-full h-96 object-contain rounded-lg"
                />
              </div>
              <div className="flex space-x-2">
                {productImages.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImageIndex(index)}
                    className={`w-20 h-20 rounded-lg overflow-hidden border-2 ${
                      selectedImageIndex === index ? 'border-red-500' : 'border-gray-300'
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${product.title} ${index + 1}`}
                      className="w-full h-full object-contain"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div>
              <div className="mb-4">
                <span className="text-sm text-gray-500 uppercase tracking-wide">
                  {product.category}
                </span>
                <h1 className="text-3xl font-bold text-gray-800 mt-2">
                  {product.title}
                </h1>
              </div>

              {/* Rating */}
              <div className="mb-4">
                <Stack spacing={1} className="mb-2">
                  <Rating 
                    name="product-rating" 
                    value={product.rating?.rate || 2.5} 
                    precision={0.1} 
                    readOnly
                  />
                </Stack>
                <p className="text-sm text-gray-600">
                  {product.rating?.rate || 2.5} out of 5 ({product.rating?.count || 0} reviews)
                </p>
              </div>

              {/* Price */}
              <div className="mb-6">
                <div className="flex items-center space-x-4">
                  <span className="text-3xl font-bold text-red-600">
                    ${product.price}
                  </span>
                  <span className="text-lg text-gray-500 line-through">
                    ${(product.price * 1.2).toFixed(2)}
                  </span>
                  <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-sm font-medium">
                    17% OFF
                  </span>
                </div>
              </div>

              {/* Description */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">Description</h3>
                <p className="text-gray-600 leading-relaxed">
                  {product.description}
                </p>
              </div>

              {/* Quantity Selector */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">Quantity</h3>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center border rounded-lg">
                    <button
                      onClick={decrementQuantity}
                      className="p-2 hover:bg-gray-100"
                    >
                      <FaMinus />
                    </button>
                    <span className="px-4 py-2 border-l border-r">{quantity}</span>
                    <button
                      onClick={incrementQuantity}
                      className="p-2 hover:bg-gray-100"
                    >
                      <FaPlus />
                    </button>
                  </div>
                  <span className="text-sm text-gray-600">
                    Total: ${(product.price * quantity).toFixed(2)}
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-4">
                <button
                  onClick={handleAddToCart}
                  className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-lg flex items-center justify-center space-x-2 transition-colors duration-300"
                >
                  <FaShoppingCart />
                  <span>Add to Cart</span>
                </button>

                <div className="flex space-x-4">
                  <button className="flex-1 border border-gray-300 hover:border-red-500 text-gray-700 hover:text-red-600 font-semibold py-2 px-4 rounded-lg flex items-center justify-center space-x-2 transition-colors duration-300">
                    <FaHeart />
                    <span>Add to Wishlist</span>
                  </button>
                  <button className="flex-1 border border-gray-300 hover:border-red-500 text-gray-700 hover:text-red-600 font-semibold py-2 px-4 rounded-lg flex items-center justify-center space-x-2 transition-colors duration-300">
                    <FaShare />
                    <span>Share</span>
                  </button>
                </div>
              </div>

              {/* Product Features */}
              <div className="mt-8 pt-8 border-t">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    <span>Free Shipping</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    <span>30-Day Returns</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    <span>Secure Payment</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    <span>24/7 Support</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

ProductDetail.propTypes = {
  product: PropTypes.object,
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default ProductDetail;
