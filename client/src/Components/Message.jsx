import React, { useState } from "react";
import { BiSend } from "react-icons/bi";
import Profile from "./Profile";

const Message = ({ user, data, set }) => {
    const [chat, setChat] = useState("");

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

export default Message;
