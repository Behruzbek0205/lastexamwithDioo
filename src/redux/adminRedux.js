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
    deleteAdmin: (state, action) => {
      state.value = state.value.filter((item) => item.id !== action.payload);
    },
    updateLogin: (state, action) => {
      const { id, url, firstname, email, password, number, lastname } =
        action.payload;
      const admin = state.value.find((u) => u.id === id);
      if (admin) {
        admin.url = url;
        admin.firstname = firstname;
        admin.email = email;
        admin.password = password;
        admin.number = number;
        admin.lastname = lastname;
      }
    },
  },
});

export const { addAdmin, updateLogin,deleteAdmin } = adminSlice.actions;
export default adminSlice.reducer;
