import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const Unauthorized = ({ children }) => {
    const auth = useSelector((state) => state.isAuthenticated);
    console.log(auth);
    return auth ? <> {children}</> : <Navigate to="/signup" />;
};

export default Unauthorized;
