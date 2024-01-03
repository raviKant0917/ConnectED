import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./AuthContext";
import { Request } from ".";
const Header = () => {
    const { user, logout } = useAuth();
    const navigate = useNavigate();
    return (
        <>
            <div className="headerWrapper">
                <div className="header">
                    <h1>ConnectED</h1>
                </div>
                <div className="button">
                    <button className="Sign_out" onClick={logout}>
                        SignOut
                    </button>
                </div>
            </div>
        </>
    );
};

export default Header;
