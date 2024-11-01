import { createSelector } from "@reduxjs/toolkit";


export const selectContacts = (state) => state.contacts.items;
export const selectIsLoading = (state) => state.contacts.isLoading;
export const selectIsError = (state) => state.contacts.isError;
export const selectNameFilter = (state) => state.contacts.searchStr;


export const selectFilteredContacts = createSelector(
  [selectContacts, selectNameFilter],
  (contacts, searchStr) => {
    if (!searchStr) {
      return contacts;
    }
    return contacts.filter(
      (contact) =>
        contact.name.toLowerCase().includes(searchStr.toLowerCase()) ||
        contact.number.includes(searchStr)
    );
  }
);
