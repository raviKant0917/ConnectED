import React from "react";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
import { Link } from "react-router-dom";

const Form1 = (props) => {
    return (
        <form className="form-1">
            <label htmlFor="">Email</label>
            <input type="email" placeholder="Type your Email" />
            <label htmlFor="">New Password</label>
            <input type="password" placeholder="Type your Password" />
            <label htmlFor="">Confirm Password</label>
            <input type="password" placeholder="Confirm your Password" />
            <div className="box">
                <button onClick={props.click} className="btn">
                    {" "}
                    Next
                </button>
            </div>
            <Link className="other">
                <FcGoogle style={{ marginRight: "1rem" }} />
                sign up with goggle
            </Link>
            <Link className="other">
                <BsFacebook style={{ marginRight: "1rem" }} />
                sign up with facebook
            </Link>
        </form>
    );
};

export default Form1;
