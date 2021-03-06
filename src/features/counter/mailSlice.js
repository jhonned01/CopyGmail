import { createSlice } from "@reduxjs/toolkit";

export const mailSlice = createSlice({
  name: "mail",
  initialState: {
    selectedMail: null,
    sendMessageIsOpen: false,
  },
  reducers: {
    selectedMail: (state, action) => {
      state.selectedMail = action.payload;
    },
    opendSendMessage: (state) => {
      state.sendMessageIsOpen = true;
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
