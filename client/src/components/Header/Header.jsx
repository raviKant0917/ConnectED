import React from "react";
import { useDispatch } from "react-redux";
import { authActions } from "../../store";
import "./header.scss";

const Header = () => {
    const dispatch = useDispatch();
    return (
        <div className="headerWrapper">
            <div className="header">
                <h1>ConnectED</h1>
            </div>
            <div className="button">
                <button
                    className="Sign_out"
                    onClick={dispatch.bind(null, authActions.logout())}
                >
                    SignOut
                </button>
            </div>
        </div>
    );
};

export default Header;
