import { useEffect, useState } from "react";
// import { FaStar } from "react-icons/fa";
import { Rating, Stack } from "@mui/material";


const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(cart);
  }, []);

  const removeFromCart = (indexToRemove) => {
    const updatedCart = cartItems.filter((_, index) => index !== indexToRemove);
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-6 text-center md:text-left">Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p className="text-center">Your cart is empty</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {cartItems.map((item, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src={item.image} alt={item.title} className="w-full h-48 object-contain p-2" />
              <div className="p-3">
                <h3 className="text-base font-semibold text-gray-800 mb-1">{item.title}</h3>
                <p className="text-sm text-gray-600 mb-1">${item.price}</p>
                {/* <div className="flex items-center mb-2">
                  {Array.from({ length: 5 }, (_, index) => (
                    <FaStar
                      key={index}
                      className={`h-3 w-3 ${item.rating.rate > index ? "text-yellow-500" : "text-gray-300"}`}
                    />
                  ))}
                  <span className="ml-1 text-xs text-gray-500">({item.rating.rate})</span>
                </div> */}
                <Stack spacing={1} className="mb-2">
                    <Rating name='half-rating' defaultValue={2.5} precision={0.5} />
                  </Stack>
                <button
                  onClick={() => removeFromCart(index)}
                  className="w-full bg-red-600 hover:bg-red-700 text-white text-sm font-semibold py-1 rounded-md flex items-center justify-center transition-colors duration-300"
                >
                  Remove from Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;
