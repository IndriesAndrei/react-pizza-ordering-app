import { configureStore } from "@reduxjs/toolkit";
import userReducer from './features/user/userSlice';
import cartReducer from './features/cart/cartSlice';

// make the Redux store, which will use the reducer from userSlice file
const store = configureStore({
    reducer: {
        user: userReducer,
        cart: cartReducer,
    }
});

export default store;