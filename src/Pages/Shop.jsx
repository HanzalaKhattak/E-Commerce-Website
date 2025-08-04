import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FaShoppingCart, FaFilter, FaTh, FaList } from 'react-icons/fa';
import { Rating, Stack } from '@mui/material';
import { fetchProducts, fetchCategories, setSelectedCategory, setSearchTerm } from '../redux/productSlice';
import { addToCart } from '../redux/cartSlice';
import LoadingSpinner from '../Components/LoadingSpinner';
import toast from 'react-hot-toast';

const Shop = () => {
  const dispatch = useDispatch();
  const { filteredItems: products, loading, categories, selectedCategory, searchTerm } = useSelector(state => state.products);
  
  const [sortOption, setSortOption] = useState('default');
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [displayMode, setDisplayMode] = useState('grid'); // 'grid' or 'list'
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    dispatch(fetchProducts());
    dispatch(fetchCategories());
  }, [dispatch]);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    toast.success("Item added to cart!");
  };

  const handleCategoryFilter = (category) => {
    dispatch(setSelectedCategory(category));
  };

  const sortedProducts = () => {
    let sorted = [...products];
    
    // Apply price filter
    sorted = sorted.filter(product => 
      product.price >= priceRange[0] && product.price <= priceRange[1]
    );

    // Apply sorting
    switch (sortOption) {
      case 'price-low':
        return sorted.sort((a, b) => a.price - b.price);
      case 'price-high':
        return sorted.sort((a, b) => b.price - a.price);
      case 'name':
        return sorted.sort((a, b) => a.title.localeCompare(b.title));
      case 'rating':
        return sorted.sort((a, b) => (b.rating?.rate || 0) - (a.rating?.rate || 0));
      default:
        return sorted;
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <LoadingSpinner text="Loading products..." />
      </div>
    );
  }

  const sortedProductsList = sortedProducts();

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Shop</h1>
          <p className="text-gray-600">
            {searchTerm ? `Search results for "${searchTerm}"` : 'Browse our collection'}
            {selectedCategory !== 'all' && ` in ${selectedCategory}`}
          </p>
        </div>
        <div className="flex items-center space-x-4 mt-4 md:mt-0">
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setDisplayMode('grid')}
              className={`p-2 rounded ${displayMode === 'grid' ? 'bg-red-600 text-white' : 'bg-gray-200'}`}
            >
              <FaTh />
            </button>
            <button
              onClick={() => setDisplayMode('list')}
              className={`p-2 rounded ${displayMode === 'list' ? 'bg-red-600 text-white' : 'bg-gray-200'}`}
            >
              <FaList />
            </button>
          </div>
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="md:hidden bg-gray-200 px-4 py-2 rounded flex items-center space-x-2"
          >
            <FaFilter />
            <span>Filters</span>
          </button>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Filters Sidebar */}
        <div className={`md:w-1/4 ${showFilters ? 'block' : 'hidden md:block'}`}>
          <div className="bg-white rounded-lg shadow-md p-6 sticky top-4">
            <h3 className="text-lg font-bold mb-4">Filters</h3>
            
            {/* Category Filter */}
            <div className="mb-6">
              <h4 className="font-semibold mb-3">Categories</h4>
              <div className="space-y-2">
                <button
                  onClick={() => handleCategoryFilter('all')}
                  className={`block w-full text-left px-3 py-2 rounded ${
                    selectedCategory === 'all' ? 'bg-red-600 text-white' : 'hover:bg-gray-100'
                  }`}
                >
                  All Products
                </button>
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => handleCategoryFilter(category)}
                    className={`block w-full text-left px-3 py-2 rounded capitalize ${
                      selectedCategory === category ? 'bg-red-600 text-white' : 'hover:bg-gray-100'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* Price Range Filter */}
            <div className="mb-6">
              <h4 className="font-semibold mb-3">Price Range</h4>
              <div className="space-y-3">
                <input
                  type="range"
                  min="0"
                  max="1000"
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
                  className="w-full"
                />
                <div className="flex justify-between text-sm text-gray-600">
                  <span>$0</span>
                  <span>${priceRange[1]}</span>
                </div>
              </div>
            </div>

            {/* Sort Options */}
            <div className="mb-6">
              <h4 className="font-semibold mb-3">Sort By</h4>
              <select
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value)}
                className="w-full border rounded px-3 py-2"
              >
                <option value="default">Default</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="name">Name: A to Z</option>
                <option value="rating">Rating: High to Low</option>
              </select>
            </div>

            {/* Clear Filters */}
            <button
              onClick={() => {
                dispatch(setSelectedCategory('all'));
                dispatch(setSearchTerm(''));
                setPriceRange([0, 1000]);
                setSortOption('default');
              }}
              className="w-full bg-gray-500 hover:bg-gray-600 text-white py-2 rounded transition-colors duration-300"
            >
              Clear All Filters
            </button>
          </div>
        </div>

        {/* Products Grid/List */}
        <div className="md:w-3/4">
          <div className="flex justify-between items-center mb-6">
            <p className="text-gray-600">
              Showing {sortedProductsList.length} of {products.length} products
            </p>
          </div>

          {sortedProductsList.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-gray-500 text-lg">No products found matching your criteria</p>
            </div>
          ) : (
            <div className={
              displayMode === 'grid'
                ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'
                : 'space-y-6'
            }>
              {sortedProductsList.map((product) => (
                <div
                  key={product.id}
                  className={`bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 ${
                    displayMode === 'list' ? 'flex' : 'flex flex-col'
                  }`}
                >
                  <div className={`relative ${displayMode === 'list' ? 'w-48 flex-shrink-0' : ''}`}>
                    <img
                      src={product.image}
                      alt={product.title}
                      className={`object-contain p-4 ${
                        displayMode === 'list' ? 'w-full h-48' : 'w-full h-64'
                      }`}
                    />
                  </div>
                  <div className={`p-4 ${displayMode === 'list' ? 'flex-grow' : 'flex-grow'}`}>
                    <h3 className={`font-semibold text-gray-800 mb-2 ${
                      displayMode === 'list' ? 'text-lg line-clamp-2' : 'text-base line-clamp-2'
                    }`}>
                      {product.title}
                    </h3>
                    {displayMode === 'list' && (
                      <p className="text-sm text-gray-600 mb-3 line-clamp-3">{product.description}</p>
                    )}
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-lg font-bold text-red-600">${product.price}</span>
                      <span className="text-sm text-gray-500 capitalize">{product.category}</span>
                    </div>
                    <Stack spacing={1} className="mb-3">
                      <Rating 
                        name="half-rating" 
                        defaultValue={product.rating?.rate || 2.5} 
                        precision={0.5} 
                        size="small"
                        readOnly
                      />
                    </Stack>
                    <button
                      onClick={() => handleAddToCart(product)}
                      className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-2 rounded-lg flex items-center justify-center transition-colors duration-300"
                    >
                      Add to Cart
                      <FaShoppingCart className="ml-2" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Shop;