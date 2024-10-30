import { createAsyncThunk } from "@reduxjs/toolkit";
import { myApi } from "../auth/operations";



export const fetchContacts = createAsyncThunk("fetchData", async (thunkApi) => {
  try {
    const { data } = await myApi.get("/contacts");

    return data;
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
});

export const deleteContactThunk = createAsyncThunk(
  "deleteContact",
  async (id, thunkApi) => {
    try {
      const { data } = await myApi.delete(`/contacts/${id}`);
      return data.id;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const addContactThunk = createAsyncThunk(
  "addContact",
  async (body, thunkApi) => {
    try {
      const { data } = await myApi.post("/contacts", body);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
