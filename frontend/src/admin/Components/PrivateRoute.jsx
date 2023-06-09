import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

export const PrivateRoute = ({ children }) => {
  let token = localStorage.getItem("admin_token") || "";

  if (!token) {
    return <Navigate to="/admin/admin_login" />;
  }
  return children;
};

export default PrivateRoute;
