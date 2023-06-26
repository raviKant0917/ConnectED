import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./components/Login/Login.jsx";
import Header from "./components/Header/Header.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import Signup from "./components/Signup/Signup.jsx";
import Dashboard, { loadProducts } from "./components/Dashboard/Dashboard.jsx";
import Error from "./components/Error/Error.jsx";
import Chat, { loadChat } from "./components/Chat/Chat.jsx";
import Cart, { loadCart } from "./components/Carts/Cart.jsx";
import Search from "./components/SearchBar/Search.jsx";
import Profile from "./components/Profile/Profile.jsx";
import Product, { loadProduct } from "./components/Product/Product.jsx";
import Search2,{searchLoader} from "./components/SearchBar/Search2.jsx";
import Sell from "./components/Sell/Sell.jsx";
import Unauthorized from "./components/Unauthorized.jsx";

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
            <Unauthorized>
              <Search />
              <Dashboard />
            </Unauthorized>
          </>
        ),
      },
      {
        path: "/search",
        loader: searchLoader,
        element: <Search2 />,
      },
      {
        path: "/sell",
        element: <Sell />,
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
      {
        path: "/cart",
        element: (
          <Unauthorized>
            <Cart />
          </Unauthorized>
        ),
        loader: loadCart,
      },
      {
        path: "/chats",
        element: (
          <Unauthorized>
            <Chat />
          </Unauthorized>
        ),
        loader: loadChat,
      },
      {
        path: "/profile",
        element: (
          <Unauthorized>
            <Profile />
          </Unauthorized>
        ),
      },
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
