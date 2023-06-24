import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./components/Login/Login.jsx";
import Header from "./components/Header/Header.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import Signup from "./components/Signup/Signup.jsx";
import Dashboard, { loadProduct } from "./components/Dashboard/Dashboard.jsx";
import Error from "./components/Error/Error.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <>
                <Header />
                <Navbar />
            </>
        ),
        errorElement: <Error />,
        children: [
            { index: true, loader: loadProduct, element: <Dashboard /> },
            { path: "/products" },
            { path: "/chats" },
            { path: "/profile" },
        ],
    },
    {
        path: "/login",
        element: (
            <>
                <Header />
                <Login />
            </>
        ),
    },
    {
        path: "/signup",
        element: (
            <>
                <Header />
                <Signup />
            </>
        ),
    },
]);

const App = () => {
    return <RouterProvider router={router} />;
};

export default App;
