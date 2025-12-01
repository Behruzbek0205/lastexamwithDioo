import { configureStore } from "@reduxjs/toolkit";
import reducer from "./userCart";
import userReducer from "../redux/userRedux";
import likedReducer from "../redux/likedRedux";

export const store = configureStore({
  reducer: {
    cart: reducer,
    user: userReducer,
    liked: likedReducer,
  },
});
