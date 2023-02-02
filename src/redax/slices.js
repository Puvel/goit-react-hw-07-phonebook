import { createSlice, combineReducers } from '@reduxjs/toolkit';
import { contactsExtraReducers } from 'redax/extraReducers';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },

  extraReducers: contactsExtraReducers,
});

const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: { setFilter: (_, { payload }) => payload },
});

export const rootReducer = combineReducers({
  contacts: contactsSlice.reducer,
  filter: filterSlice.reducer,
});

export const { setFilter } = filterSlice.actions;
