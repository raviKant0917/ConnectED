import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

const Unauthorized = ({ children }) => {
    const [auth, setAuth] = useState(true);

    useEffect(() => {
        const f = async () => {
            const res = await fetch("http://localhost:8000/users/getMe", {
                headers: {
                    Autherization: "Bearer " + localStorage.getItem("token"),
                },
            });

            const response = await res.json();
            console.log(response);
        };
        f();
    }, []);
    return auth ? <> {children}</> : <Navigate to="/signup" />;
};

export default Unauthorized;
