import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action) => {
      // ID qo'shish kerak bo'lsa
      const newUser = {
        ...action.payload,
        id: Date.now().toString(), // yoki crypto.randomUUID()
      };
      state.value.push(newUser);
    },
    deleteUser: (state, action) => {
      state.value = state.value.filter((item) => item.id !== action.payload);
    },
    updateLogin: (state, action) => {
      const { id, url, username, email } = action.payload; // id ni ham oling
      const user = state.value.find((u) => u.id === id); // id ni ishlating
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
