import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  items: [],
  filteredItems: [],
  loading: false,
  error: null,
  categories: [],
  selectedCategory: 'all',
  searchTerm: '',
};

// Async thunk for fetching products
export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async () => {
    const response = await axios.get('https://fakestoreapi.com/products');
    return response.data;
  }
);

// Async thunk for fetching categories
export const fetchCategories = createAsyncThunk(
  'products/fetchCategories',
  async () => {
    const response = await axios.get('https://fakestoreapi.com/products/categories');
    return response.data;
  }
);

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setSelectedCategory: (state, action) => {
      state.selectedCategory = action.payload;
      productSlice.caseReducers.filterProducts(state);
    },
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
      productSlice.caseReducers.filterProducts(state);
    },
    filterProducts: (state) => {
      let filtered = state.items;

      // Filter by category
      if (state.selectedCategory !== 'all') {
        filtered = filtered.filter(product => product.category === state.selectedCategory);
      }

      // Filter by search term
      if (state.searchTerm) {
        filtered = filtered.filter(product =>
          product.title.toLowerCase().includes(state.searchTerm.toLowerCase()) ||
          product.description.toLowerCase().includes(state.searchTerm.toLowerCase())
        );
      }

      state.filteredItems = filtered;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
        state.filteredItems = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.categories = action.payload;
      });
  },
});

export const { setSelectedCategory, setSearchTerm, filterProducts } = productSlice.actions;
export default productSlice.reducer;
