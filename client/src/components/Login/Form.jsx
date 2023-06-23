import React from "react";
import { Link } from "react-router-dom";

const Form = () => {
    return (
        <form>
            <label htmlFor="">Email</label>
            <input type="email" placeholder="Type your Email" />
            <label htmlFor="">Password</label>
            <input type="password" placeholder="Type your Password" />
            <input type="submit" />
            <Link to={"/"} style={{ color: "skyblue" }}>
                Forget Password?
            </Link>
            <span>OR</span>
        </form>
    );
};

export default Form;
