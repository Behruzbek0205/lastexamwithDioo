import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action) => {
      const newUser = {
        ...action.payload,
        id: Date.now().toString(),
      };
      state.value.push(newUser);
    },
    deleteUser: (state, action) => {
      state.value = state.value.filter((item) => item.id !== action.payload);
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

export const { addUser, deleteUser, updateLogin } = userSlice.actions;
export default userSlice.reducer;
