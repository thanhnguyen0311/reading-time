import { configureStore } from "@reduxjs/toolkit";
import toggleSidebar from "../../features/toggleSidebar";

const store = configureStore({
    reducer: {
        openSidebar: toggleSidebar.reducer
    }
})
export default store