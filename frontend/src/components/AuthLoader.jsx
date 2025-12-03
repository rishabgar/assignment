import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import api from "../api/axios";

const ProtectedRoute = ({ children }) => {
  const [isValid, setIsValid] = useState(null);

  useEffect(() => {
    const validate = async () => {
      const token = localStorage.getItem("token");

      if (!token) {
        setIsValid(false);
        return;
      }

      try {
        await api.get("/validate-token", {
          headers: { Authorization: `Bearer ${token}` },
        });

        setIsValid(true);
      } catch (err) {
        console.error("Token invalid:", err);
        setIsValid(false);
      }
    };

    validate();
  }, []);

  if (isValid === null) return <p>Loading...</p>;

  return isValid ? children : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
