import React from "react";
import { Link } from "react-router-dom";
import "./signup.scss";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";

const Signup = () => {
  return (
    <>
      <div className="signup">
        <h1>SignUp</h1>
        <div className="slides">
          <div className="circle-1">1</div>
          <div className="line" />
          <div className="circle-2">2 </div>
        </div>
        <form className="form-1">
          <label htmlFor="">Email</label>
          <input type="email" placeholder="Type your Email" />
          <label htmlFor="">New Password</label>
          <input type="password" placeholder="Type your Password" />
          <label htmlFor="">Confirm Password</label>
          <input type="password" placeholder="Confirm your Password" />
          <input type="submit" />
          <Link className="other">
            <FcGoogle style={{ marginRight: "1rem" }} />
            sign up with goggle
          </Link>
          <Link className="other">
            <BsFacebook style={{ marginRight: "1rem" }} />
            sign up with facebook
          </Link>
        </form>
        {/* <div className="form-2">
          <form>
            <label htmlFor="">Email</label>
            <input type="email" placeholder="Type your Email" />
            <label htmlFor="">New Password</label>
            <input type="password" placeholder="Type your Password" />
            <label htmlFor="">Confirm Password</label>
            <input type="text" placeholder="Conform your Password" />
            <input type="submit" />
          </form>
        </div> */}
      </div>
      <div className="other2">
        Already a user? <Link to="/login"> login</Link>
      </div>
    </>
  );
};

export default Signup;
