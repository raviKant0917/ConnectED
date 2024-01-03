import React, { useEffect, useState } from "react";
import { cart as getArray } from "../Components/httpRequest";

const Cart = () => {
    const [cart, setCart] = useState([]);
    useEffect(() => {
        getArray(setCart);
    }, []);
    return (
        <>
            <div>Cart</div>
        </>
    );
};

export default Cart;
