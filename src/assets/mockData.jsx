const categories = [
  "Electronics",
  "Fashion", 
  "Home & Kitchen",
  "Beauty & Personal Care",
  "Sports & Outdoors",
  "Automotive",
  "Books & Media",
  "Health & Wellness",
  "Toys & Games",
  "Office Supplies"
];

// Featured categories for homepage
export const featuredCategories = [
  {
    title: "Electronics",
    description: "Latest gadgets and tech",
    imageURL: "/src/assets/images/catagorySection/electronics.jpg"
  },
  {
    title: "Fashion",
    description: "Trending styles for everyone",
    imageURL: "/src/assets/images/catagorySection/fashion.jpg"
  },
  {
    title: "Home & Kitchen",
    description: "Everything for your home",
    imageURL: "/src/assets/images/catagorySection/home.jpg"
  }
];

// Popular products data (mock)
export const popularProducts = [
  {
    id: 'popular-1',
    title: 'Premium Wireless Headphones',
    price: 199.99,
    image: '/src/assets/images/products/headphones.jpg',
    category: 'Electronics',
    rating: { rate: 4.8, count: 234 }
  },
  {
    id: 'popular-2', 
    title: 'Designer Handbag',
    price: 89.99,
    image: '/src/assets/images/products/handbag.jpg',
    category: 'Fashion',
    rating: { rate: 4.6, count: 189 }
  },
  {
    id: 'popular-3',
    title: 'Smart Coffee Maker',
    price: 149.99,
    image: '/src/assets/images/products/coffee-maker.jpg',
    category: 'Home & Kitchen',
    rating: { rate: 4.7, count: 156 }
  }
];

export default categories;
