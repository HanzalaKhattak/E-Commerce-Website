import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FaCreditCard, FaLock, FaCheck } from 'react-icons/fa';
import { clearCart } from '../redux/cartSlice';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { Elements } from '@stripe/react-stripe-js';
import stripePromise from '../config/stripe';
import StripePaymentForm from '../Components/StripePaymentForm';

const Checkout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { items: cartItems, totalPrice } = useSelector(state => state.cart);
  
  const [formData, setFormData] = useState({
    // Shipping Information
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    country: '',
    
    // Order Notes
    orderNotes: ''
  });

  const [paymentMethod, setPaymentMethod] = useState('stripe');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handlePaymentSuccess = (paymentData) => {
    // Clear cart and show success message
    dispatch(clearCart());
    toast.success('Payment successful! Order placed.');
    
    // Redirect to success page with payment data
    navigate('/order-success', { 
      state: { 
        orderData: {
          ...formData,
          items: cartItems,
          total: totalPrice,
          paymentId: paymentData.paymentMethodId,
          paymentIntentId: paymentData.paymentIntentId
        }
      }
    });
  };

  const handlePaymentError = (error) => {
    console.error('Payment error:', error);
    toast.error('Payment failed. Please try again.');
  };

  const handleLegacySubmit = async (e) => {
    e.preventDefault();
    
    // Validate required fields
    const requiredFields = ['firstName', 'lastName', 'email', 'phone', 'address', 'city', 'state', 'zipCode', 'country'];
    for (const field of requiredFields) {
      if (!formData[field]) {
        toast.error(`Please fill in the ${field.replace(/([A-Z])/g, ' $1').toLowerCase()}`);
        return;
      }
    }

    if (paymentMethod === 'stripe') {
      toast.error('Please complete the payment using the secure payment form above.');
      return;
    }

    if (paymentMethod === 'paypal') {
      toast.error('PayPal integration is coming soon. Please use credit card payment.');
      return;
    }
  };

  const subtotal = totalPrice;
  const shipping = subtotal > 100 ? 0 : 10;
  const tax = subtotal * 0.1;
  const total = subtotal + shipping + tax;

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Your cart is empty</h2>
          <p className="text-gray-600 mb-8">Add some items to your cart before checkout.</p>
          <button
            onClick={() => navigate('/shop')}
            className="bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-300"
          >
            Continue Shopping
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4 max-w-6xl">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Checkout</h1>
        
        <form onSubmit={handleLegacySubmit}>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Shipping & Payment Form */}
            <div className="lg:col-span-2 space-y-8">
              {/* Shipping Information */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-6">Shipping Information</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">First Name *</label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Last Name *</label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Address *</label>
                    <input
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">City *</label>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">State *</label>
                    <input
                      type="text"
                      name="state"
                      value={formData.state}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">ZIP Code *</label>
                    <input
                      type="text"
                      name="zipCode"
                      value={formData.zipCode}  
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Country *</label>
                    <select
                      name="country"
                      value={formData.country}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    >
                      <option value="">Select Country</option>
                      <option value="US">United States</option>
                      <option value="BD">Bangladesh</option>
                      <option value="IN">India</option>
                      <option value="PK">Pakistan</option>
                      <option value="CA">Canada</option>
                      <option value="UK">United Kingdom</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Payment Information */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-6 flex items-center">
                  <FaLock className="mr-2 text-green-600" />
                  Payment Information
                </h2>
                
                {/* Payment Method Selection */}
                <div className="mb-6">
                  <div className="flex space-x-4">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="stripe"
                        checked={paymentMethod === 'stripe'}
                        onChange={(e) => setPaymentMethod(e.target.value)}
                        className="mr-2"
                      />
                      <FaCreditCard className="mr-2" />
                      Credit/Debit Card (Stripe)
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="paypal"
                        checked={paymentMethod === 'paypal'}
                        onChange={(e) => setPaymentMethod(e.target.value)}
                        className="mr-2"
                      />
                      PayPal (Coming Soon)
                    </label>
                  </div>
                </div>

                {paymentMethod === 'stripe' && (
                  <Elements stripe={stripePromise}>
                    <StripePaymentForm
                      amount={totalPrice}
                      onSuccess={handlePaymentSuccess}
                      onError={handlePaymentError}
                      customerInfo={formData}
                    />
                  </Elements>
                )}

                {paymentMethod === 'paypal' && (
                  <div className="text-center py-8">
                    <p className="text-gray-600 mb-4">PayPal integration coming soon. Please use credit card payment.</p>
                  </div>
                )}
              </div>

              {/* Order Notes */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-6">Order Notes (Optional)</h2>
                <textarea
                  name="orderNotes"
                  value={formData.orderNotes}
                  onChange={handleInputChange}
                  rows={4}
                  placeholder="Special instructions for delivery..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent resize-vertical"
                />
              </div>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-md p-6 sticky top-4">
                <h2 className="text-xl font-semibold text-gray-800 mb-6">Order Summary</h2>
                
                {/* Order Items */}
                <div className="space-y-4 mb-6">
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex items-center space-x-3">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-16 h-16 object-contain rounded"
                      />
                      <div className="flex-grow">
                        <h3 className="text-sm font-medium line-clamp-2">{item.title}</h3>
                        <p className="text-sm text-gray-600">Qty: {item.quantity}</p>
                      </div>
                      <span className="text-sm font-semibold">${(item.price * item.quantity).toFixed(2)}</span>
                    </div>
                  ))}
                </div>

                {/* Order Totals */}
                <div className="space-y-3 border-t pt-4">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Shipping</span>
                    <span className={shipping === 0 ? 'text-green-600' : ''}>
                      {shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Tax</span>
                    <span>${tax.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-lg font-bold border-t pt-3">
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                </div>

                {/* Order Validation Button (Hidden - Payment handled by Stripe component) */}
                {paymentMethod !== 'stripe' && (
                  <button
                    type="submit"
                    className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300 flex items-center justify-center mt-6"
                  >
                    <FaCheck className="mr-2" />
                    Validate Order Details
                  </button>
                )}
                
                {paymentMethod === 'stripe' && (
                  <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
                    <p className="text-sm text-blue-800 text-center">
                      Complete payment using the secure payment form above to place your order.
                    </p>
                  </div>
                )}

                <p className="text-xs text-gray-500 text-center mt-4">
                  By placing your order, you agree to our Terms of Service and Privacy Policy.
                </p>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
