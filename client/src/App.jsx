import React, { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
    Cart,
    Dashboard,
    Login,
    Product,
    Search,
    Signup,
    Profile,
    Chat,
} from "./pages";
import { Header, Navbar } from "./Components";
import * as Auth from "./Components/AuthContext";
import io from "socket.io-client";
const socket = io(`http://localhost:5000/message`);

const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <>
                <Header />,
                <Navbar />
            </>
        ),
        children: [
            { index: true, element: <Dashboard /> },
            {
                path: "/search",
                element: <Search />,
            },
            {
                path: "/:id",
                element: <Product />,
            },
            {
                path: "/cart",
                element: <Cart />,
            },
            {
                path: "/chats",
                element: <Chat />,
            },
            {
                path: "/profile",
                element: <Profile />,
            },
            {
                path: "/login",
                element: <Login />,
            },
            {
                path: "/signup",
                element: <Signup />,
            },
        ],
    },
]);

const App = () => {
    useEffect(() => {}, []);
    return (
        <Auth.AuthProvider>
            <RouterProvider router={router} />;
        </Auth.AuthProvider>
    );
};

export default App;
