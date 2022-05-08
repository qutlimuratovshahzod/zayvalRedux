import { configureStore } from "@reduxjs/toolkit";
import usersSlice from "./usersSlice";

const store = configureStore({
    reducer:{
        users: usersSlice
    },
    devTools: true,
});
export default store