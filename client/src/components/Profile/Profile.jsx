import React, { useState } from "react";
import "./profile.scss";
import { useSelector } from "react-redux";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";

const Profile = (props) => {
    const data = useSelector((state) => state.user);

    const [show, setShow] = useState(false);

    const [info, setInfo] = useState({
        image: data.image,
        email: data.email,
        name: data.name,
        password: data.password,
        address: data.address,
        upi_id: data.upi_id,
    });

    return (
        <div className="profileWrapper">
            <form className="profile">
                <div>
                    <h1>Profile</h1>
                    <img src={data.image} alt="profile" />
                    <div className="inputWrapper">
                        <label for="name">Full Name</label>
                        <input type="text" value={info.name} />

                        <label for="Address">Address</label>
                        <input type="text" value={info.address} />
                    </div>
                </div>
            </form>
            <form className="login_info">
                <div>
                    <h1>Personal Information</h1>
                    <div className="inputWrapper">
                        <label for="email">Email</label>
                        <input type="email" value={info.email} />
                        <label for="password">Password </label>
                        <div className="password">
                            <input
                                type={show ? "text" : "password"}
                                value={info.password}
                            />
                            {!show && (
                                <button
                                    onClick={() =>
                                        setShow((prevState) => !prevState)
                                    }
                                >
                                    <AiFillEyeInvisible />
                                </button>
                            )}
                            {show && (
                                <button
                                    onClick={() =>
                                        setShow((prevState) => !prevState)
                                    }
                                >
                                    <AiFillEye />
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            </form>
            <form className="upi_id">
                <div>
                    <h1>UPI ID</h1>
                    <div className="inputWrapper">
                        <label for="upi_id">UPI ID</label>
                        <input type="text" value={info.upi_id} />
                    </div>
                </div>
            </form>
            {/* <button className="submit" onClick={submiHandler}>
                Save
            </button> */}
        </div>
    );
};

export default Profile;
