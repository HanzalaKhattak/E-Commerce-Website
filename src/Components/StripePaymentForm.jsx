import { useState } from 'react';
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
import { FaLock, FaCreditCard } from 'react-icons/fa';
import PropTypes from 'prop-types';
import toast from 'react-hot-toast';
import axios from 'axios';

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:5000';

const StripePaymentForm = ({ amount, onSuccess, onError, customerInfo }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [processing, setProcessing] = useState(false);

  const cardElementOptions = {
    style: {
      base: {
        fontSize: '16px',
        color: '#424770',
        '::placeholder': {
          color: '#aab7c4',
        },
        fontFamily: 'system-ui, -apple-system, sans-serif',
        fontSmoothing: 'antialiased',
      },
      invalid: {
        color: '#9e2146',
      },
    },
    hidePostalCode: true,
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      toast.error('Stripe has not loaded yet. Please try again.');
      return;
    }

    const cardElement = elements.getElement(CardElement);

    if (!cardElement) {
      toast.error('Card element not found');
      return;
    }

    setProcessing(true);

    try {
      // Step 1: Create a PaymentIntent on the backend
      const { data } = await axios.post(`${BACKEND_URL}/api/create-payment-intent`, {
        amount,
        currency: 'usd',
        customerInfo,
      });

      // Step 2: Confirm the card payment with the client secret from the backend
      const { error: confirmError, paymentIntent } = await stripe.confirmCardPayment(data.clientSecret, {
        payment_method: {
          card: cardElement,
          billing_details: {
            name: `${customerInfo.firstName} ${customerInfo.lastName}`,
            email: customerInfo.email,
            phone: customerInfo.phone,
            address: {
              line1: customerInfo.address,
              city: customerInfo.city,
              state: customerInfo.state,
              postal_code: customerInfo.zipCode,
              country: customerInfo.country,
            },
          },
        },
      });

      if (confirmError) {
        throw new Error(confirmError.message);
      }

      if (paymentIntent.status === 'succeeded') {
        toast.success('Payment successful!');
        onSuccess({
          paymentMethodId: paymentIntent.payment_method,
          paymentIntentId: paymentIntent.id,
          amount,
        });
      } else {
        throw new Error(`Unexpected payment status: ${paymentIntent.status}`);
      }

    } catch (error) {
      console.error('Payment error:', error);
      const message = error.response?.data?.error || error.message || 'Payment failed. Please try again.';
      toast.error(message);
      onError(error);
    } finally {
      setProcessing(false);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center mb-4">
        <FaLock className="text-green-600 mr-2" />
        <h3 className="text-lg font-semibold text-gray-800">Secure Payment</h3>
      </div>

      <form onSubmit={handleSubmit}>
        {/* Card Element */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            <FaCreditCard className="inline mr-2" />
            Card Information
          </label>
          <div className="border border-gray-300 rounded-lg p-4 bg-white">
            <CardElement options={cardElementOptions} />
          </div>
          <p className="text-xs text-gray-500 mt-2">
            Your card information is encrypted and secure. We never store your card details.
          </p>
        </div>

        {/* Payment Summary */}
        <div className="bg-gray-50 rounded-lg p-4 mb-6">
          <div className="flex justify-between items-center">
            <span className="text-gray-600">Total Amount:</span>
            <span className="text-xl font-bold text-gray-800">${amount.toFixed(2)}</span>
          </div>
        </div>

        {/* Security Features */}
        <div className="grid grid-cols-2 gap-4 mb-6 text-xs text-gray-500">
          <div className="flex items-center">
            <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
            256-bit SSL Encryption
          </div>
          <div className="flex items-center">
            <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
            PCI DSS Compliant
          </div>
          <div className="flex items-center">
            <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
            3D Secure Authentication
          </div>
          <div className="flex items-center">
            <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
            Fraud Protection
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={!stripe || processing}
          className="w-full bg-red-600 hover:bg-red-700 disabled:bg-red-400 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300 flex items-center justify-center"
        >
          {processing ? (
            <>
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Processing Payment...
            </>
          ) : (
            <>
              <FaLock className="mr-2" />
              Pay ${amount.toFixed(2)}
            </>
          )}
        </button>

        <p className="text-xs text-gray-500 text-center mt-4">
          By completing your purchase, you agree to our Terms of Service and Privacy Policy.
        </p>
      </form>

      {/* Accepted Cards */}
      <div className="mt-6 pt-4 border-t border-gray-200">
        <p className="text-sm text-gray-600 mb-2">We accept all major credit cards:</p>
        <div className="flex space-x-2">
          <div className="bg-blue-600 text-white px-2 py-1 rounded text-xs font-bold">VISA</div>
          <div className="bg-red-600 text-white px-2 py-1 rounded text-xs font-bold">MC</div>
          <div className="bg-blue-800 text-white px-2 py-1 rounded text-xs font-bold">AMEX</div>
          <div className="bg-orange-600 text-white px-2 py-1 rounded text-xs font-bold">DISC</div>
        </div>
      </div>
    </div>
  );
};

StripePaymentForm.propTypes = {
  amount: PropTypes.number.isRequired,
  onSuccess: PropTypes.func.isRequired,
  onError: PropTypes.func.isRequired,
  customerInfo: PropTypes.object.isRequired,
};

export default StripePaymentForm;
