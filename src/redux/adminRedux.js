import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

export const adminSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {
    addAdmin: (state, action) => {
      const newAdmin = {
        ...action.payload,
        id: Date.now().toString(),
      };
      state.value.push(newAdmin);
    },

    updateLogin: (state, action) => {
      const { id, url, username, email } = action.payload;
      const user = state.value.find((u) => u.id === id);
      if (user) {
        user.url = url;
        user.username = username;
        user.email = email;
      }
    },
  },
});

export const { addAdmin, updateLogin } = adminSlice.actions;
export default adminSlice.reducer;
