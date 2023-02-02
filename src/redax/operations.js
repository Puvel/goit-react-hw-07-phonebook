import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchGet, fetchAdd, fetchRemove } from 'services/fetchApi';

export const fetchContacts = createAsyncThunk('contacts/fetchAll', async () => {
  const response = await fetchGet();
  return response.data;
});

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async body => {
    const response = await fetchAdd(body);
    return response.data;
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact ',
  async id => {
    const response = await fetchRemove(id);
    return response.data;
  }
);
