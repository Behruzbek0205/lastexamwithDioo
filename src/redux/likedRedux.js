import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

export const likedStore = createSlice({
  name: "liked",
  initialState,
  reducers: {
    addLiked: (state, action) => {
      state.value.push(action.payload);
    },
    deleteLiked: (state, action) => {
      state.value = state.value.filter((item) => item.id !== action.payload);      
    },
  },
});

export const { addLiked, deleteLiked } = likedStore.actions;
export default likedStore.reducer;
