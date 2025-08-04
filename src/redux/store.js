import { configureStore } from '@reduxjs/toolkit';
import cartSlice from './cartSlice';
import productSlice from './productSlice';

// Load cart state from localStorage
const loadCartFromStorage = () => {
  try {
    if (typeof window !== 'undefined') {
      const serializedCart = localStorage.getItem('cart');
      if (serializedCart === null) {
        return {
          items: [],
          totalQuantity: 0,
          totalPrice: 0,
        };
      }
      return JSON.parse(serializedCart);
    }
    return {
      items: [],
      totalQuantity: 0,
      totalPrice: 0,
    };
  } catch {
    return {
      items: [],
      totalQuantity: 0,
      totalPrice: 0,
    };
  }
};

// Save cart state to localStorage
const saveCartToStorage = (state) => {
  try {
    if (typeof window !== 'undefined') {
      const serializedCart = JSON.stringify(state.cart);
      localStorage.setItem('cart', serializedCart);
    }
  } catch {
    console.log('Could not save cart to localStorage');
  }
};

const preloadedState = {
  cart: loadCartFromStorage(),
};

const store = configureStore({
  reducer: {
    cart: cartSlice,
    products: productSlice,
  },
  preloadedState,
});

// Subscribe to store changes and save to localStorage
store.subscribe(() => {
  saveCartToStorage(store.getState());
});

export default store;
