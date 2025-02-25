import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";
import { auth } from "../firebase"; // Import Firebase auth
import { onAuthStateChanged, signOut } from "firebase/auth";

const Navbar = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  // Check if a user is logged in
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe(); // Cleanup listener when component unmounts
  }, []);

  // Logout function
  const handleLogout = async () => {
    await signOut(auth);
    navigate("/login"); // Redirect to login page after logout
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 md:px-16 lg:px-24 py-4 flex justify-between items-center">
        <div className="text-lg font-bold">
          <Link to="/">HBK</Link>
        </div>
        <div className="relative flex-1 mx-4">
          <form>
            <input
              type="text"
              placeholder="Search Product"
              className="w-full border py-2 px-4"
            />
            <FaSearch className="absolute top-3 right-3 text-red-500"></FaSearch>
          </form>
        </div>
        <div className="flex items-center space-x-4">
          <Link to={"/cart"}>
            <FaShoppingCart className="text-xl" />
          </Link>

          {/* Show Login/Register if no user is logged in */}
          {!user ? (
            <Link to="/login" className="hidden md:block">
              Login | Register
            </Link>
          ) : (
            // Show Logout if user is logged in
            <button onClick={handleLogout} className="hidden md:block text-red-500">
              Logout
            </button>
          )}

          <button className="md:hidden">
            <FaUser />
          </button>
        </div>
      </div>
      <div className="flex justify-center items-center space-x-10 py-4 text-sm font-bold">
        <Link to="/" className="hover:underline">
          Home
        </Link>
        <Link to="/Shop" className="hover:underline">
          Shop
        </Link>
        <Link to="/Contact" className="hover:underline">
          Contact
        </Link>
        <Link to="/About" className="hover:underline">
          About
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
