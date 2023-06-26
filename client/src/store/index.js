import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./Auth";

export const authActions = authSlice.actions;
const store = configureStore({
    reducer: {
        auth:authSlice.reducer   
    }
});

export default store;
