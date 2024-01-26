import React, { useEffect, useState } from "react";
import Chats from "../Components/Message";
import Contacts from "../Components/Contacts";
import { getContacts } from "../Components/httpRequest";
import { useSocket } from "../Components/SocketContext";

const Chat = () => {
    const [width, setWidth] = useState(window.innerWidth);
    const [user, setUser] = useState("");
    const [contacts, setContacts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [online, setOnline] = useState([]);
    const { socket } = useSocket();
    useEffect(() => {
        if (socket) {
            socket.on("getUsers", (data) => {
                setOnline(data);
            });
        }
    }, [socket]);

    useEffect(() => {
        getContacts(setContacts, setLoading);
    }, []);
    useEffect(() => {
        window.addEventListener("resize", setWidth(window.innerWidth));
    }, []);
    console.log(online);
    return (
        <>
            {!loading && (
                <div className="chats-wrapper">
                    {width >= 900 ? (
                        <>
                            <Contacts
                                online={online}
                                data={contacts}
                                set={setUser}
                            />
                            {user !== "" && (
                                <Chats
                                    online={online}
                                    contacts={contacts}
                                    user={user}
                                    set={setUser}
                                />
                            )}
                        </>
                    ) : (
                        <>
                            {user === "" && (
                                <Contacts
                                    online={online}
                                    data={contacts}
                                    set={setUser}
                                />
                            )}
                            {user !== "" && (
                                <Chats
                                    online={online}
                                    contacts={contacts}
                                    user={user}
                                    set={setUser}
                                />
                            )}
                        </>
                    )}
                </div>
            )}
        </>
    );
};

export default Chat;
