import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchStr: "",
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    searchContact: (state, action) => {
      state.searchStr = action.payload;
    },
  },
});

export const searchFilterReducer = filtersSlice.reducer;
export const { searchContact } = filtersSlice.actions;
export default filtersSlice.reducer;
