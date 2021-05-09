import { createSlice } from "@reduxjs/toolkit";

export const mailSlice = createSlice({
  name: "mail",
  initialState: {
    sendMessageIsOpen: false,
  },
  reducers: {
    opendSendMessage: (state) => {
      state.sendMessageIsOpen = true;
    },
    closeSendMessage: (state) => {
      state.sendMessageIsOpen = false;
    },
  },
});

export const { opendSendMessage, closeSendMessage } = mailSlice.actions;

export const selectSendMenssageIsOpen = (state) => state.mail.sendMessageIsOpen;

export default mailSlice.reducer;
