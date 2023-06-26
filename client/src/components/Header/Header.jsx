import React from "react";
import { useDispatch } from "react-redux";
import { authActions } from "../../store";
import "./header.scss";
import { useNavigate } from "react-router-dom";

const Header = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    return (
        <div className="headerWrapper">
            <div className="header">
                <h1>ConnectED</h1>
            </div>
            <div className="button">
                <button
                    className="Sign_out"
                    onClick={() => {
                        dispatch(authActions.auth(false));
                        navigate("/login");
                    }}
                >
                    SignOut
                </button>
            </div>
        </div>
    );
};

export default Header;
