import React, { useEffect, useState } from "react";
import "./chat.scss";
import { useLoaderData } from "react-router-dom";
import Chats from "./Chats/Chats";
import Contacts from "./Contacts/Contacts";

const Chat = () => {
    const data = useLoaderData();

    const [width, setWidth] = useState(window.innerWidth);
    const [user, setUser] = useState("");

    useEffect(() => {
        window.addEventListener("resize", setWidth(window.innerWidth));
    }, []);

    let obj = data[Object.keys(data).filter((key) => key === user)];

    return (
        <div className="chats-wrapper">
            {width >= 900 ? (
                <>
                    <Contacts data={data} set={setUser} />
                    {user !== "" && (
                        <Chats
                            obj={obj}
                            user={user}
                            data={data}
                            set={setUser}
                        />
                    )}
                </>
            ) : (
                <>
                    {user === "" && <Contacts data={data} set={setUser} />}
                    {user !== "" && (
                        <Chats
                            obj={obj}
                            user={user}
                            data={data}
                            set={setUser}
                        />
                    )}
                </>
            )}
        </div>
    );
};

export const loadChat = () => {
    return {
        rishabh: {
            image: "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80",
            chats: [
                {
                    send: "You",
                    text: "hii",
                    time: "10:00 am",
                    date: "6-24-2023",
                },
                {
                    send: "you",
                    text: "hii",
                    time: "10:00 am",
                    date: "6-24-2023",
                },
                {
                    send: "You",
                    text: "kya kr rha h",
                    time: "10:00 am",
                    date: "6-24-2023",
                },
                {
                    send: "rishabh",
                    text: "kuch nhi",
                    time: "10:00 am",
                    date: "6-24-2023",
                },
                {
                    send: "You",
                    text: "hiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii",
                    time: "10:00 am",
                    date: "6-24-2023",
                },
                {
                    send: "rishabh",
                    text: "hii",
                    time: "10:00 am",
                    date: "6-24-2023",
                },
                {
                    send: "You",
                    text: "hii",
                    time: "10:00 am",
                    date: "6-24-2023",
                },
                {
                    send: "rishabh",
                    text: "hii",
                    time: "10:00 am",
                    date: "6-24-2023",
                },
                {
                    send: "You",
                    text: "hii",
                    time: "10:00 am",
                    date: "6-24-2023",
                },
                {
                    send: "rishabh",
                    text: "hii",
                    time: "10:00 am",
                    date: "6-24-2023",
                },
                {
                    send: "You",
                    text: "hii",
                    time: "10:00 am",
                    date: "6-24-2023",
                },
                {
                    send: "rishabh",
                    text: "hii",
                    time: "10:00 am",
                    date: "6-24-2023",
                },
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
