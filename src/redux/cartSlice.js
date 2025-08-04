import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  totalQuantity: 0,
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.items.find(item => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
      state.totalQuantity += 1;
      state.totalPrice += action.payload.price;
    },
    removeFromCart: (state, action) => {
      const existingItem = state.items.find(item => item.id === action.payload.id);
      if (existingItem) {
        state.totalQuantity -= existingItem.quantity;
        state.totalPrice -= existingItem.price * existingItem.quantity;
        state.items = state.items.filter(item => item.id !== action.payload.id);
      }
    },
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const existingItem = state.items.find(item => item.id === id);
      if (existingItem) {
        const quantityDiff = quantity - existingItem.quantity;
        existingItem.quantity = quantity;
        state.totalQuantity += quantityDiff;
        state.totalPrice += existingItem.price * quantityDiff;
      }
    },
    clearCart: (state) => {
      state.items = [];
      state.totalQuantity = 0;
      state.totalPrice = 0;
    },
    loadCartFromStorage: (state, action) => {
      const cartData = action.payload;
      state.items = cartData.items || [];
      state.totalQuantity = cartData.totalQuantity || 0;
      state.totalPrice = cartData.totalPrice || 0;
    },
  },
});

export const { addToCart, removeFromCart, updateQuantity, clearCart, loadCartFromStorage } = cartSlice.actions;
export default cartSlice.reducer;
