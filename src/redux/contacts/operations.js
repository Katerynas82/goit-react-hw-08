import { createAsyncThunk } from "@reduxjs/toolkit";
import { myApi } from "../auth/operations";


export const fetchContacts = createAsyncThunk(
  "contacts/fetchContacts",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await myApi.get("/contacts");
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);


export const deleteContactThunk = createAsyncThunk(
  "contacts/deleteContact",
  async (id, { rejectWithValue }) => {
    try {
      await myApi.delete(`/contacts/${id}`);
      return id; 
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);


export const addContactThunk = createAsyncThunk(
  "contacts/addContact",
  async (contactData, { rejectWithValue }) => {
    try {
      const { data } = await myApi.post("/contacts", contactData);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
