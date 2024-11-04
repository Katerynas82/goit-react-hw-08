import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./auth/slice";
import { contactsReducer } from "./contacts/slice";
import { searchFilterReducer } from "./filters/slice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const authPersistConfig = {
  key: "auth",
  storage,
  whitelist: ["token"],
};
const persistedAuthReducer = persistReducer(
  authPersistConfig,
  authSlice.reducer
);
export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filters: searchFilterReducer,
    auth: persistedAuthReducer,
  },
});

export const persistor = persistStore(store);
