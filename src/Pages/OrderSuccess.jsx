import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaCheckCircle, FaHome, FaShoppingBag } from 'react-icons/fa';

const OrderSuccess = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  const orderNumber = Math.random().toString(36).substr(2, 9).toUpperCase();
  const estimatedDelivery = new Date();
  estimatedDelivery.setDate(estimatedDelivery.getDate() + 5);

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4">
      <div className="max-w-md w-full">
        <div className="bg-white rounded-lg shadow-xl p-8 text-center">
          {/* Success Icon */}
          <div className="mb-6">
            <FaCheckCircle className="text-6xl text-green-500 mx-auto mb-4" />
            <h1 className="text-2xl font-bold text-gray-800 mb-2">Order Placed Successfully!</h1>
            <p className="text-gray-600">Thank you for your purchase. Your order has been confirmed.</p>
          </div>

          {/* Order Details */}
          <div className="bg-gray-50 rounded-lg p-6 mb-6">
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600">Order Number:</span>
                <span className="font-semibold">#{orderNumber}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Order Date:</span>
                <span className="font-semibold">{new Date().toLocaleDateString()}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Estimated Delivery:</span>
                <span className="font-semibold">{estimatedDelivery.toLocaleDateString()}</span>
              </div>
            </div>
          </div>

          {/* Next Steps */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">What happens next?</h3>
            <div className="text-left space-y-3">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-red-600 text-white rounded-full flex items-center justify-center text-sm font-bold mt-0.5">1</div>
                <div>
                  <p className="font-medium text-gray-800">Order Confirmation</p>
                  <p className="text-sm text-gray-600">You&apos;ll receive an email confirmation shortly</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-red-600 text-white rounded-full flex items-center justify-center text-sm font-bold mt-0.5">2</div>
                <div>
                  <p className="font-medium text-gray-800">Processing</p>
                  <p className="text-sm text-gray-600">We&apos;ll prepare your order for shipment</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-red-600 text-white rounded-full flex items-center justify-center text-sm font-bold mt-0.5">3</div>
                <div>
                  <p className="font-medium text-gray-800">Delivery</p>
                  <p className="text-sm text-gray-600">Your order will be delivered to your address</p>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-4">
            <Link
              to="/shop"
              className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300 flex items-center justify-center"
            >
              <FaShoppingBag className="mr-2" />
              Continue Shopping
            </Link>
            <Link
              to="/"
              className="w-full border border-gray-300 hover:border-red-500 text-gray-700 hover:text-red-600 font-semibold py-3 px-6 rounded-lg transition-colors duration-300 flex items-center justify-center"
            >
              <FaHome className="mr-2" />
              Back to Home
            </Link>
          </div>

          {/* Support Info */}
          <div className="mt-8 pt-6 border-t border-gray-200">
            <p className="text-sm text-gray-600 mb-2">Need help with your order?</p>
            <Link
              to="/contact"
              className="text-red-600 hover:text-red-500 text-sm font-medium hover:underline"
            >
              Contact Customer Support
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSuccess;
