import React, { useEffect, useState } from "react";
import "./Navbar.scss";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import { BiUserCircle } from "react-icons/bi";
import { authActions } from "../../store";
import { useSelector, useDispatch } from "react-redux";
import {
    MdSpaceDashboard,
    MdOutlineShoppingCart,
    MdChat,
} from "react-icons/md";

const SmallNav = ({ route, image }) => {
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
                        to="/cart"
                        className={route === "/cart" ? "active" : undefined}
                    >
                        <MdOutlineShoppingCart />
                        <div>Cart</div>
                    </Link>
                    <div className="profile">
                        <img src={image} alt="no img" />
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

const BigNav = ({ route, name, image, f, navigate }) => {
    return (
        <>
            <div className="Navbar">
                <div className="profile">
                    <img src={image} alt="no img" />
                    <label>{name}</label>
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
                        to="/cart"
                        className={route === "/cart" ? "active" : undefined}
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
                <div className="button">
                    <button
                        className="Sign_out"
                        onClick={() => {
                            f.bind(null, authActions.auth(false));
                            navigate("/login");
                        }}
                    >
                        SignOut
                    </button>
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
    const dispatch = useDispatch();
    const Navigate = useNavigate();
    const name = useSelector((state) => state.user.name);
    const image = useSelector((state) => state.user.image);
    useEffect(() => {
        window.addEventListener("resize", () => {
            setScreen({ width: window.innerWidth, height: window.innerHeight });
        });
    }, []);

    const route = useLocation().pathname;

    return screen.width > 900 ? (
        <BigNav
            route={route}
            name={name}
            image={image}
            f={dispatch}
            navigate={Navigate}
        />
    ) : (
        <SmallNav route={route} name={name} image={image} />
    );
};

export default Navbar;
