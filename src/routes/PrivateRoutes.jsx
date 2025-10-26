import React from "react";
import useAuth from "../hooks/useAuth";
import { Navigate } from "react-router";

const PrivateRoutes = ({ children }) => {
  const { user, loading } = useAuth();
  if (loading) {
    return <span className="loading loading-ring loading-xl"></span>;
  }
  if (!user) {
    <Navigate to="/"></Navigate>;
  }
  return children;
};

export default PrivateRoutes;
