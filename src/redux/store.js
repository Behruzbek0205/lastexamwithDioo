import { configureStore } from "@reduxjs/toolkit";
import reducer from "./userCart";
import userReducer from "../redux/userRedux";
import likedReducer from "../redux/likedRedux";
import AdminPage from "../redux/adminRedux";
import Wishlist from "../redux/wishlistRedux";

export const store = configureStore({
  reducer: {
    cart: reducer,
    user: userReducer,
    liked: likedReducer,
    admin: AdminPage,
    wish: Wishlist,
  },
});
