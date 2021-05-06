import { createSlice } from "@reduxjs/toolkit";

export const mailSlice = createSlice({
  name: "mail",
  initialState: {
    sendMessageIsOpen: false,
  },
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    opendSendMessage: (state) => {
      state.sendMessageIsOpen = true;
    },
    closeSendMessage: (state) => {
      state.sendMessageIsOpen = false;
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
  },
});

export const { opendSendMessage, closeSendMessage } = counterSlice.actions;

export const selectMail = (state) => state.mail.value;

export default mailSlice.reducer;
