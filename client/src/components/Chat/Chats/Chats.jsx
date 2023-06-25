import React, { useState } from "react";
import { BiSend } from "react-icons/bi";
import Profile from "./Profile";
import "./Chats.scss";


const Chats = ({ obj, user, data, set }) => {
    const [chat, setChat] = useState("");

    return (
      <div className="chats">
        <Profile data={data} set={set} user={user} />

        <div className="chat-wrapper">
          {obj.chats.map((obj) => (
            <div className={`chat ${obj.send === user ? "user" : "you"}`}>
              <div> {obj.text}</div>
            </div>
          ))}
        </div>

        <div className="text-input">
          <input
            type="text"
            placeholder="Type your message"
            value={chat}
            onInput={(e) => setChat(e.target.value)}
          />

          <BiSend
            onClick={() => {
              data[user].chats.push({ text: chat });
              setChat("");
            }}
          />
        </div>
      </div>
    );
};

export default Chats;
