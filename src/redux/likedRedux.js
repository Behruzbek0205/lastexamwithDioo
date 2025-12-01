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
  },
});

export const { addLiked } = likedStore.actions;
export default likedStore.reducer;
