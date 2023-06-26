import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: "Authenicated",
    initialState: {
        isAuthenticated: false,
        user: {
            email: "",
            password: "",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWnW0NUpcrZcGZeUJ4e50ZLU8ugS9GPPoqww&usqp=CAU",
            name: "guest",
            address: "",
            phone_number: "",
            upi_id: "",
            cart: {
                sell: [],
                requested: [],
                rented: [],
                bought: [],
            },
        },
    },
    reducers: {
        auth(state, action) {
            state.isAuthenticated = action.payload;
        },
        login(state, action) {
            state.isAuthenticated = true;
            const obj = action.payload;
            state.user = {
                email: obj.email,
                password: obj.password,
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
                upi_id: obj.upi_id || "",
            };
        },
        logout(state) {
            state.isAuthenticated = false;
            state.user = {
                email: "",
                password: "",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWnW0NUpcrZcGZeUJ4e50ZLU8ugS9GPPoqww&usqp=CAU",
                name: "guest",
                address: "",
                phone_number: "",
                cart: {
                    sell: [],
                    requested: [],
                    rented: [],
                    bought: [],
                },
                upi_id: "",
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
