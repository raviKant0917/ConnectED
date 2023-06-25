import React from "react";
import "./header.scss";

const Header = () => {
    return (
      <div className="headerWrapper">
        <div className="header">
          <h1>ConnectED</h1>
        </div>
        <div className="button">
          <button className="Sign_out">SignOut</button>
        </div>
      </div>
    );
};

export default Header;
