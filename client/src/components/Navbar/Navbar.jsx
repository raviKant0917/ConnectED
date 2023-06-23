import React from "react";
import "./Navbar.scss";
import { Link, Outlet, useLocation } from "react-router-dom";

const Navbar = () => {
    const route = useLocation().pathname;
    console.log(route);

    return (
        <>
            <div className="Navbar">
                <div className="profile">
                    <img
                        src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80"
                        alt="no img"
                    />
                    <label>Ada Lovelace</label>
                </div>
                <div className="Nav">
                    <Link
                        to="/"
                        className={route === "/" ? "active" : undefined}
                    >
                        Dashboard
                    </Link>

                    <Link
                        to="/products"
                        className={route === "/products" ? "active" : undefined}
                    >
                        Products
                    </Link>

                    <Link
                        to="/chats"
                        className={route === "/chats" ? "active" : undefined}
                    >
                        Chats
                    </Link>

                    <Link
                        to="/profile"
                        className={route === "/profile" ? "active" : undefined}
                    >
                        Profile
                    </Link>
                </div>
            </div>
            <Outlet />
        </>
    );
};

export default Navbar;
