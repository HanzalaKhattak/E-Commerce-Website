import { useState, useEffect } from "react";
import { signInWithEmailAndPassword, signInWithPopup, onAuthStateChanged } from "firebase/auth";
import { auth, googleProvider } from "../firebase"; 
import { useNavigate, Link } from "react-router-dom";
import { FaEnvelope, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import signupImage from "../assets/images/SignUp/Signupimage.png";
import googleIcon from "../assets/images/SignUp/Google.png";
import toast from "react-hot-toast";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Check if user is already logged in
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        navigate("/"); // Redirect if logged in
      }
    });
    return () => unsubscribe();
  }, [navigate]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    setError(""); // Clear error when user starts typing
  };

  // Normal Login Function
  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, formData.email, formData.password);
      toast.success("Welcome back!");
      navigate("/"); // Redirect to home after login
    } catch {
      setError("Invalid email or password");
      toast.error("Failed to log in");
    } finally {
      setLoading(false);
    }
  };

  // Google Login Function
  const handleGoogleLogin = async () => {
    setLoading(true);
    try {
      await signInWithPopup(auth, googleProvider);
      toast.success("Welcome back!");
      navigate("/"); // Redirect to home after Google login
    } catch {
      setError("Failed to sign in with Google");
      toast.error("Failed to log in with Google");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl w-full space-y-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Side - Image */}
          <div className="hidden lg:block">
            <img
              src={signupImage}
              alt="Login"
              className="w-full h-auto max-w-lg mx-auto"
            />
          </div>

          {/* Right Side - Form */}
          <div className="bg-white rounded-lg shadow-xl p-8 max-w-md mx-auto w-full">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-800">Welcome Back</h2>
              <p className="text-gray-600 mt-2">Enter your details to sign in</p>
            </div>

            {error && (
              <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg mb-6">
                {error}
              </div>
            )}

            <form onSubmit={handleLogin} className="space-y-6">
              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-colors duration-300"
                    placeholder="Enter your email"
                    required
                  />
                </div>
              </div>

              {/* Password Field */}
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                  Password
                </label>
                <div className="relative">
                  <FaLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-colors duration-300"
                    placeholder="Enter your password"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>
              </div>

              {/* Remember Me & Forgot Password */}
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 text-red-600 focus:ring-red-500 border-gray-300 rounded"
                  />
                  <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                    Remember me
                  </label>
                </div>
                <div className="text-sm">
                  <a href="#" className="font-medium text-red-600 hover:text-red-500 hover:underline">
                    Forgot password?
                  </a>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-red-600 hover:bg-red-700 disabled:bg-red-400 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-300 flex items-center justify-center"
              >
                {loading ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Signing In...
                  </>
                ) : (
                  'Sign In'
                )}
              </button>
            </form>

            {/* Google Login */}
            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">Or continue with</span>
                </div>
              </div>

              <button
                onClick={handleGoogleLogin}
                disabled={loading}
                className="mt-4 w-full bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 font-semibold py-3 px-4 rounded-lg transition-colors duration-300 flex items-center justify-center space-x-2"
              >
                <img src={googleIcon} alt="Google" className="w-5 h-5" />
                <span>Sign in with Google</span>
              </button>
            </div>

            {/* Signup Link */}
            <p className="mt-8 text-center text-sm text-gray-600">
              Don&apos;t have an account?{" "}
              <Link to="/signup" className="font-medium text-red-600 hover:text-red-500 hover:underline">
                Sign up here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
