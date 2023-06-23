import React from 'react';
import "./login.scss";
import {Link} from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import{BsFacebook} from "react-icons/bs";

const Login = () => {
  return (
    <>
      <div className="login">
        <h1>Login</h1>
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
}

export default Login