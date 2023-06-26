import React, { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { authActions } from "../store";

const Unauthorized = ({ children }) => {
    const auth = useSelector((state) => state.isAuthenticated);
    const dispatch = useDispatch();

    useEffect(() => {
        const f = async () => {
            const res = await fetch("http://localhost:8000/users/isloggedin", {
                headers: {
                    Authorization: "Bearer " + document.cookie,
                },
            });

            const response = await res.json();

            if (response.status == true) {
                dispatch(authActions.auth(true));
            }
        };
        f();
    }, []);
    return auth ? <> {children}</> : <Navigate to="/signup" />;
};

export default Unauthorized;
