import React from "react";
import "./Error.scss";
import { Link } from "react-router-dom";
const Error = () => {
    return (
        <div className="error">
            <h1>404 Not Found</h1>
            <p>There is nothing to show. Its a wrong end Point</p>
            <Link to="/">Go to dashboard</Link>
        </div>
    );
};

export default Error;
