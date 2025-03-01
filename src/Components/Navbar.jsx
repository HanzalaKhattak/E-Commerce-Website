import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaSearch, FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";
import { auth } from "../firebase"; // Import Firebase auth
import { onAuthStateChanged, signOut } from "firebase/auth";

const Navbar = () => {
  const [user, setUser] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
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

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 md:px-16 lg:px-24 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <button onClick={toggleSidebar} className="md:hidden text-2xl mr-4">
            {isSidebarOpen ? <FaTimes /> : <FaBars />}
          </button>
          <div className="text-lg font-bold">
            <Link to="/">HBK</Link>
          </div>
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
        </div>
      </div>
      <div className={`fixed inset-0 bg-gray-800 bg-opacity-75 z-50 transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 md:hidden`}>
        <div className="bg-white w-64 h-full p-4">
          <button onClick={toggleSidebar} className="text-2xl mb-4">
            <FaTimes />
          </button>
          <nav>
            <ul>
              <li className="mb-2"><Link to="/" className="text-lg" onClick={closeSidebar}>Home</Link></li>
              <li className="mb-2"><Link to="/shop" className="text-lg" onClick={closeSidebar}>Shop</Link></li>
              <li className="mb-2"><Link to="/contact" className="text-lg" onClick={closeSidebar}>Contact</Link></li>
              <li className="mb-2"><Link to="/about" className="text-lg" onClick={closeSidebar}>About</Link></li>
              {!user ? (
                <li className="mb-2"><Link to="/login" className="text-lg" onClick={closeSidebar}>Login | Register</Link></li>
              ) : (
                <li className="mb-2"><button onClick={() => { handleLogout(); closeSidebar(); }} className="text-lg text-red-500">Logout</button></li>
              )}
            </ul>
          </nav>
        </div>
      </div>
      <div className="hidden md:flex justify-center items-center space-x-10 py-4 text-sm font-bold">
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
