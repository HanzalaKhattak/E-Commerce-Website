import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";

const PrivateRoute = ({ children }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) {
        navigate("/signup"); // Redirect to signup if not authenticated
      }
    });
    return () => unsubscribe();
  }, [navigate]);

  return children;
};

export default PrivateRoute;
