import React, { useState } from "react";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Components/AuthContext";

const Profile = (props) => {
    const { user: data } = useAuth();
    const navigate = useNavigate();

    const [show, setShow] = useState(false);

    const [info, setInfo] = useState({
        image: data.image,
        email: data.email,
        name: data.name,
        password: data.password,
        address: data.address,
        upi_id: data.upi_id,
    });

    const submitHandler = () => {
        navigate("/sell");
    };

    return (
        <div className="profileWrapper">
            <form className="profile">
                <div>
                    <h1>Profile</h1>
                    <img src={data.image} alt="profile" />
                    <div className="inputWrapper">
                        <label htmlFor="name">Full Name</label>
                        <input type="text" value={info.name} />

                        <label htmlFor="Address">Address</label>
                        <input type="text" value={info.address} />
                    </div>
                </div>
            </form>
            <form className="login_info">
                <div>
                    <h1>Personal Information</h1>
                    <div className="inputWrapper">
                        <label htmlFor="email">Email</label>
                        <input type="email" value={info.email} />
                        <label htmlFor="password">Password </label>
                        <div className="password">
                            <input type="password" value={info.password} />
                            {/* {!show && (
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
                            )} */}
                        </div>
                    </div>
                </div>
            </form>
            <div className="sell">
                <button onClick={submitHandler}>
                    Your Want to sell item ?
                </button>
            </div>
            {/* <button className="submit" onClick={submiHandler}>
                Save
            </button> */}
        </div>
    );
};

export default Profile;
