import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./components/Login/Login.jsx";
import Header from "./components/Header/Header.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import Signup from "./components/Signup/Signup.jsx";
import Dashboard, { loadProducts } from "./components/Dashboard/Dashboard.jsx";
import Error from "./components/Error/Error.jsx";
import Chat, { loadChat } from "./components/Chats/Chat.jsx";
import Cart from "./components/Carts/Cart.jsx";
import Search from "./components/SearchBar/Search.jsx";
import Product, { loadProduct } from "./components/Product/Product.jsx";

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
            {
                index: true,
                loader: loadProducts,
                element: (
                    <>
                        <Search />
                        <Dashboard />
                    </>
                ),
            },
            {
                path: "/:id",
                loader: loadProduct,
                element: (
                    <>
                        <Search />
                        <Product />
                    </>
                ),
            },
            { path: "/cart", element: <Cart /> },
            { path: "/chats", element: <Chat />, loader: loadChat },
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
