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

export const {
  opendSendMessage,
  closeSendMessage,
  selectedMail,
} = mailSlice.actions;

export const selectSendMenssageIsOpen = (state) => state.mail.sendMessageIsOpen;
export const selectClickMail = (state) => state.mail.selectedMail;

export default mailSlice.reducer;
