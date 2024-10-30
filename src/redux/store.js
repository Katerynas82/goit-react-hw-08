import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./auth/slice";
import { searchFilterReducer } from "./filters/slice";
import { contactsReducer } from "./contacts/slice";

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filters: searchFilterReducer,
    auth: authSlice,
  },
});
