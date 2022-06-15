import React from "react";
import { Navigate } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";
const ProtectedRoute = ({ children }) => {
  const { user } = useUserAuth();

  console.log("Checking user to redirect protected content..", user);
  if (user.isGuestUser === "Guest") {
    return <Navigate to="/home" />;
  }
  return children;
};

export default ProtectedRoute;
