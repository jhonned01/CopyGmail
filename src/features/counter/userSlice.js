import { createSlice } from "@reduxjs/toolkit";

export const userlSlice = createSlice({
  name: "user",
  initialState: {
    user: false,
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

export const selectUser = (state) => state.user.user;

export default userlSlice.reducer;
