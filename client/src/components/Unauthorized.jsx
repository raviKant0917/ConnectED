import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

const Unauthorized = ({ children }) => {
    const [auth, setAuth] = useState(true);

    useEffect(() => {
        const f = async () => {
            fetch("http://localhost:8000/users/isloggedin", {
                method: "GET",
                credentials: "same-origin",
                mode: "cors",
                headers: {
                    "Access-Control-Allow-Origin": "*",
                    "Content-Type": "application/json",
                    Auth: "Bearer " + localStorage.getItem("token"),
                },
            })
                .then((res) =>
                    res
                        .json()
                        .then((data) => console.log(data))
                        .catch((err) => console.log(err))
                )
                .catch((err) => console.log(err));
        };

        f();
    }, []);
    return auth ? <> {children}</> : <Navigate to="/signup" />;
};

export default Unauthorized;
