import { createSlice } from "@reduxjs/toolkit";

export const userlSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
  },
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
    closeSendMessage: (state) => {
      state.sendMessageIsOpen = false;
    },
  },
});

export const { login, logout } = userlSlice.actions;

export const selectuser = (state) => state.user.sendMessageIsOpen;

export default mailSlice.reducer;
