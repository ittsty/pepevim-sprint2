import React from "react";
import { useAuth } from "../contexts/AuthContext";
import { Navigate } from "react-router-dom";

const GuestRoute = ({ children }) => {
  const { user, loading } = useAuth();

  if (loading) {
    return <div>...loading</div>;
  }

  if (user) {
    return <Navigate to="/" replace />;
  }
  
  return children;
};

export default GuestRoute;
