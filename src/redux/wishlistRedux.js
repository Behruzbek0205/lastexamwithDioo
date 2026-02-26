import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

export const wishStore = createSlice({
  name: "wish",
  initialState,
  reducers: {
    addWish: (state, action) => {
      state.value.push(action.payload);
    },
    deleteWish: (state, action) => {
      state.value = state.value.filter((item) => item.id !== action.payload);      
    },
  },
});

export const { addWish, deleteWish } = wishStore.actions;
export default wishStore.reducer;
