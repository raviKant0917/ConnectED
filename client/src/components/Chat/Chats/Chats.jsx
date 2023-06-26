import React, { useEffect, useState } from "react";
import { BiSend } from "react-icons/bi";
import Profile from "./Profile";
import "./Chats.scss";

import { useSelector } from "react-redux/es/hooks/useSelector";

const Chats = ({ obj, user, data, set, room, ms }) => {
    const [chat, setChat] = useState("");
    const name = useSelector((state) => state.auth.user.name);

    return (
        <div className="chats">
            <Profile data={data} set={set} user={user} />
             <div className="text-input">
                 <input
                    type="text"
                    placeholder="Type your message"
                    value={chat}
                    onInput={(e) => setChat(e.target.value)}
                />

                <BiSend />
            </div>
        </div>
    );
};

export default Chats;
