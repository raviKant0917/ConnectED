import React from "react";
import { BiArrowBack } from "react-icons/bi";

const Profile = ({ data, user, set }) => {
    return (
        <div className="chat-profile">
            <button className="back" onClick={() => set("")}>
                <BiArrowBack />
            </button>
            <img src={data[user].image} alt={user} />
            <h1>{user}</h1>
        </div>
    );
};

export default Profile;
