import { loadStripe } from '@stripe/stripe-js';

// Make sure to replace this with your actual publishable key from Stripe Dashboard
// For development, you can use Stripe's test keys (they start with pk_test_)
const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY || 'pk_test_51234567890abcdef...');

export default stripePromise;
