import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: "Authenicated",
    initialState: {
        isAuthenticated: false,
        user: {
            id: "",
            image: "",
            name: "",
            address: "",
            phone_number: "",
            cart: {
                sell: [],
                requested: [],
                rented: [],
                bought: [],
            },
        },
    },
    reducers: {
        login(state, action) {
            state.isAuthenticated = true;
            const obj = action.payload;
            state.user = {
                id: obj._id,
                image: obj.profileImage,
                name: obj.name,
                address: obj.address,
                phone_number: obj.phoneNumber,
                cart: {
                    sell: obj.productSold,
                    rented: obj.productRented,
                    bought: obj.productBought,
                    requested: obj.productRequested,
                },
            };
        },
        logout(state) {
            state.isAuthenticated = false;
            state.user = {
                id: "",
                image: "",
                name: "",
                address: "",
                phone_number: "",
                cart: {
                    sell: [],
                    requested: [],
                    rented: [],
                    bought: [],
                },
            };
        },
    },
});

export default authSlice;

// user: address: "B-313 Neelkanth";
// email: "21bcs107@nith.ac.in";
// name: "Piyush";
// phoneNumber: "9090909090";
// productsBought: [];
// productsRented: [];
// productsRequested: [];
// productsSold: ["64986ba0d40382873695e707"];
// profileImage: "default.png";
// __v: 0;
// _id: "649868359696f52aba2574b9";
