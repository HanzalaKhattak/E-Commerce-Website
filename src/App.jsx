import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import Shop from "./Pages/Shop";
import Contact from "./Pages/Contact";
import About from "./Pages/About";
import Login from "./Pages/Login";
import Signup from "./Pages/SignUp";
import PrivateRoute from "./Components/PrivateRoute"; // Import PrivateRoute
import { Toaster } from "react-hot-toast";
import Cart from "./Components/Cart"; // Import Cart

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Toaster
        position="top-center"
        reverseOrder={false}
        gutter={8}
        containerClassName=""
        containerStyle={{}}
        toastOptions={{
          className: '',
          duration: 5000,
          removeDelay: 1000,
          style: {
            background: '#363636',
            color: '#fff',
          },
          success: {
            duration: 3000,
            iconTheme: {
              primary: 'green',
              secondary: 'black',
            },
          },
        }}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/shop"
          element={
            <PrivateRoute>
              <Shop />
            </PrivateRoute>
          }
        />
        <Route
          path="/contact"
          element={
            <PrivateRoute>
              <Contact />
            </PrivateRoute>
          }
        />
        <Route
          path="/about"
          element={
            <PrivateRoute>
              <About />
            </PrivateRoute>
          }
        />
        <Route path="/cart" element={<Cart />} /> {/* Add Cart route */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
