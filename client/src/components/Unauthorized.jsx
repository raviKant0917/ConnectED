import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authActions } from "../store";

const Unauthorized = ({ children }) => {
    const [auth, setAuth] = useState(true);
    const dispatch = useDispatch();

    useEffect(() => {
        const f = async () => {
            const res = await fetch("http://localhost:8000/users/getMe", {
                headers: {
                    Autherization: "Bearer " + localStorage.getItem("token"),
                },
            });

            const response = await res.json();
            setAuth(response);
        };
        f();
    }, []);

    dispatch(authActions.login({ name: "", image: "" }));
    return localStorage.getItem("token") != null ? (
        <> {children}</>
    ) : (
        <Navigate to="/signup" />
    );
};

export default Unauthorized;
