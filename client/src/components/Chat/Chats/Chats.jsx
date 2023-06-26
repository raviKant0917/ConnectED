import React, { useEffect, useState } from "react";
import { BiSend } from "react-icons/bi";
import Profile from "./Profile";
import "./Chats.scss";
import {
    addDoc,
    collection,
    serverTimestamp,
    onSnapshot,
    query,
    where,
} from "firebase/firestore";
import { db } from "../../firebase";
import { useSelector } from "react-redux/es/hooks/useSelector";

const Chats = ({ obj, user, data, set, room, ms }) => {
    const [chat, setChat] = useState("");
    const userChatsRef = collection(db, "userChats");
    const name = useSelector((state) => state.user.name);

    // useEffect(() => {
    //     const queryMessages = query(userChatsRef, where("room", "==", room));
    //     const unsubscribe = onSnapshot(queryMessages, (snapshot) => {
    //         let messages = [];
    //         snapshot.forEach((doc) => {
    //             messages.push({ ...doc.data(), id: doc.id });
    //         });
    //         ms(messages);
    //     });

    //     return () => unsubscribe();
    // }, []);

    const clickHandler = async () => {
        if (chat === "") return;
        await addDoc(userChatsRef, {
            text: chat,
            createdAt: serverTimestamp(),
            user: name,
            room,
        });
        setChat("");
    };

    return (
        <div className="chats">
            <Profile data={data} set={set} user={user} />

            <div className="chat-wrapper">
                {obj.chats.map((obj) => (
                    <div
                        className={`chat ${obj.send === user ? "user" : "you"}`}
                    >
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

                <BiSend onClick={clickHandler} />
            </div>
        </div>
    );
};

export default Chats;
