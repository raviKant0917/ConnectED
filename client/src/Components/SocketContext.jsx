import React, { useEffect, useState, useContext, createContext } from "react";
import io from "socket.io-client";
import { useAuth } from "./AuthContext";

const SocketContext = createContext();

export const SocketProvider = ({ children }) => {
    const [socket, setSocket] = useState(null);
    const { user } = useAuth();

    useEffect(() => {
        setSocket(io(`http://localhost:5000/message`));
    }, []);

    useEffect(() => {
        if (user) {
            socket?.emit("addUser", user?.id);
        }
    }, [socket, user]);

    const sendMessage = (message) => {
        socket?.emit("sendMessage", message);
    };

    return (
        <SocketContext.Provider value={{ socket, sendMessage }}>
            {children}
        </SocketContext.Provider>
    );
};

export const useSocket = () => useContext(SocketContext);
