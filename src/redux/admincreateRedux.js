import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

export const createCard = createSlice({
  name: "adminCard",
  initialState,
  reducers: {
    addCard: (state, action) => {
      const newCard = {
        ...action.payload,
        id: Date.now().toString(),
      };
      state.value.push(newCard);
    },
    deleteCard: (state, action) => {
      state.value = state.value.filter((item) => item.id !== action.payload);
    },
    updateCard: (state, action) => {
      const { id, url, title, price } = action.payload;
      const admincard = state.value.find((u) => u.id === id);
      if (admincard) {
        admincard.url = url;
        admincard.title = title;
        admincard.title = price;
      }
    },
  },
});

export const { addCard, deleteCard, updateCard } = createCard.actions;
export default createCard.reducer;
