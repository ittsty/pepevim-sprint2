import React from "react";
import { useAuth } from "../contexts/AuthContext";
import { Navigate } from "react-router-dom";

const ProtectRoute = ({ children, role }) => {
  const { user, loading } = useAuth();

  if (loading) {
    return <div>...loading</div>;
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // 🔐 CHECK ROLE
  if (role && user.role !== role) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectRoute;
