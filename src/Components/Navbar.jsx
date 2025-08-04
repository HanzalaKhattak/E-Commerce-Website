import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaSearch, FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { setSearchTerm } from "../redux/productSlice";
import { auth } from "../firebase"; // Import Firebase auth
import { onAuthStateChanged, signOut } from "firebase/auth";

const Navbar = () => {
  const [user, setUser] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const totalQuantity = useSelector(state => state.cart.totalQuantity);

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

  const handleSearchChange = (e) => {
    setSearchInput(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchInput.trim()) {
      dispatch(setSearchTerm(searchInput));
      if (window.location.pathname !== '/shop') {
        navigate('/shop');
      }
    }
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
          <form onSubmit={handleSearchSubmit}>
            <input
              type="text"
              placeholder="Search Product"
              value={searchInput}
              onChange={handleSearchChange}
              className="w-full border py-2 px-4 rounded"
            />
            <button type="submit" className="absolute top-3 right-3">
              <FaSearch className="text-red-500" />
            </button>
          </form>
        </div>
        <div className="flex items-center space-x-4">
          <Link to={"/cart"} className="relative">
            <FaShoppingCart className="text-xl" />
            {totalQuantity > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {totalQuantity}
              </span>
            )}
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
              <li className="mb-2"><Link to="/privacy-policy" className="text-lg" onClick={closeSidebar}>Privacy Policy</Link></li>
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
        <Link to="/privacy-policy" className="hover:underline">
          Privacy Policy
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
