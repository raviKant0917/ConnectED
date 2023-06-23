import React from "react";
import "./login.scss";
import Form from "./Form";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";

const Login = () => {
    return (
        <>
            <div className="login">
                <h1>Login</h1>
                <Form />
                <Link className="other">
                    <FcGoogle style={{ marginRight: "1rem" }} />
                    sign in with goggle
                </Link>
                <Link className="other">
                    <BsFacebook style={{ marginRight: "1rem" }} />
                    sign in with facebook
                </Link>
            </div>
            <div className="other2">
                create new account? <Link to="/signup">signup</Link>
            </div>
        </>
    );
};

export default Login;
