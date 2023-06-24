import React, { useEffect, useState } from "react";
import "./Navbar.scss";
import { Link, Outlet, useLocation } from "react-router-dom";
import { BiUserCircle } from "react-icons/bi";
import {
    MdSpaceDashboard,
    MdOutlineShoppingCart,
    MdChat,
} from "react-icons/md";

const SmallNav = (props) => {
    const route = props.route;

    return (
        <>
            <div className="Navbar">
                <div className="Nav">
                    <Link
                        to="/"
                        className={route === "/" ? "active" : undefined}
                    >
                        <MdSpaceDashboard />
                        <div>Dashboard</div>
                    </Link>

                    <Link
                        to="/products"
                        className={route === "/products" ? "active" : undefined}
                    >
                        <MdOutlineShoppingCart />
                        <div>Cart</div>
                    </Link>
                    <div className="profile">
                        <img
                            src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80"
                            alt="no img"
                        />
                    </div>

                    <Link
                        to="/chats"
                        className={route === "/chats" ? "active" : undefined}
                    >
                        <MdChat />
                        <div>Chats</div>
                    </Link>

                    <Link
                        to="/profile"
                        className={route === "/profile" ? "active" : undefined}
                    >
                        <BiUserCircle />
                        <div>Profile</div>
                    </Link>
                </div>
            </div>
            <Outlet />
        </>
    );
};

const BigNav = (props) => {
    const route = props.route;

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
                <hr />
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
                        Cart
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

const Navbar = () => {
    const [screen, setScreen] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    });

    useEffect(() => {
        window.addEventListener("resize", () => {
            setScreen({ width: window.innerWidth, height: window.innerHeight });
        });
    }, []);

    const route = useLocation().pathname;

    return screen.width > 600 ? (
        <BigNav route={route} />
    ) : (
        <SmallNav route={route} />
    );
};

export default Navbar;
