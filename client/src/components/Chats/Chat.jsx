import React, { useState } from "react";
import "./chat.scss";
import { useLoaderData } from "react-router-dom";

const Chat = () => {
    const data = useLoaderData();
    const [user, setUser] = useState("");
    let obj = data[Object.keys(data).filter((key) => key === user)];
    return (
        <div className="chats-wrapper">
            <div className="contacts">
                {Object.keys(data).map((key) => (
                    <div className="contact" onClick={() => setUser(key)}>
                        <img src={data[key].image} alt={key} />
                        <div className="contact-info">
                            <h4>{key}</h4>
                            <div>
                                {data[key].chats.length !== 0 &&
                                    data[key].chats[data[key].chats.length - 1]
                                        .text}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            {user === ""}
            {user !== "" && (
                <div className="chats">
                    <div className="chat-profile">
                        <img src={data[user].image} alt={user} />
                        <h1>{user}</h1>
                    </div>
                    {obj.chats.map((obj) => (
                        <div className="chat">{obj.text}</div>
                    ))}
                </div>
            )}
        </div>
    );
};

export const loadChat = () => {
    return {
        rishabh: {
            image: "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80",
            chats: [
                { text: "hii", time: "10:00 am", date: "6-24-2023" },
                { text: "hii", time: "10:00 am", date: "6-24-2023" },
                { text: "hii", time: "10:00 am", date: "6-24-2023" },
                { text: "hii", time: "10:00 am", date: "6-24-2023" },
                { text: "hii", time: "10:00 am", date: "6-24-2023" },
                { text: "hii", time: "10:00 am", date: "6-24-2023" },
                { text: "hii", time: "10:00 am", date: "6-24-2023" },
                { text: "hii", time: "10:00 am", date: "6-24-2023" },
                { text: "hii", time: "10:00 am", date: "6-24-2023" },
                { text: "hii", time: "10:00 am", date: "6-24-2023" },
                { text: "hii", time: "10:00 am", date: "6-24-2023" },
                { text: "hii", time: "10:00 am", date: "6-24-2023" },
            ],
        },
        ravi: {
            image: "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80",
            chats: [{ text: "hii", time: "10:00 am", date: "6-24-2023" }],
        },
        Neeraj: {
            image: "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80",
            chats: [{ text: "hii", time: "10:00 am", date: "6-24-2023" }],
        },
        Nikhil: {
            image: "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80",
            chats: [{ text: "hii", time: "10:00 am", date: "6-24-2023" }],
        },
        piyush: {
            image: "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80",
            chats: [
                { text: "kya kr rha h", time: "11:00 am", date: "6-24-2023" },
            ],
        },
        keshav: {
            image: "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80",
            chats: [{ text: "hii", time: "10:00 am", date: "6-24-2023" }],
        },
        rehan: {
            image: "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80",
            chats: [{ text: "hii", time: "10:00 am", date: "6-24-2023" }],
        },
        nitish: {
            image: "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80",
            chats: [{ text: "hii", time: "10:00 am", date: "6-24-2023" }],
        },
        dubey: {
            image: "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80",
            chats: [{ text: "hii", time: "10:00 am", date: "6-24-2023" }],
        },
        ravideep: {
            image: "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80",
            chats: [{ text: "hii", time: "10:00 am", date: "6-24-2023" }],
        },
        ashutosh: {
            image: "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80",
            chats: [{ text: "hii", time: "10:00 am", date: "6-24-2023" }],
        },
        mukesh: {
            image: "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80",
            chats: [{ text: "hii", time: "10:00 am", date: "6-24-2023" }],
        },
        sharma: {
            image: "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80",
            chats: [{ text: "hii", time: "10:00 am", date: "6-24-2023" }],
        },
        aryan: {
            image: "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80",
            chats: [{ text: "hii", time: "10:00 am", date: "6-24-2023" }],
        },
    };
};

export default Chat;
