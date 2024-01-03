import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
    Cart,
    Dashboard,
    Login,
    Product,
    Search,
    Signup,
    Profile,
} from "./pages";
import { Header, Navbar } from "./Components";
import { Auth } from "./Components";

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
    return (
        <Auth.AuthProvider>
            <RouterProvider router={router} />;
        </Auth.AuthProvider>
    );
};

export default App;
