/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const BOOK_ADDED = 'BOOK_ADDED';
const BOOK_REMOVED = 'BOOK_REMOVED';
const API_BOOKS_FETCHED = 'API_BOOKS_FETCHED';
const baseURL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/NQw75neHFwyUpwkLwqYz/books/';

export const fetchBooks = createAsyncThunk(API_BOOKS_FETCHED, async () => {
  const response = await axios.get(baseURL);
  const result = await response.data;
  const book = Object.entries(result).map((res) => ({
    id: res[0],
    ...res[1][0],
  }));
  return book;
});

export const postBooks = createAsyncThunk(BOOK_ADDED, async (payload) => {
  const response = await fetch(baseURL, {
    method: 'POST',
    body: JSON.stringify(payload),
    headers: {
      'content-Type': 'application/json',
    },
  });

  return response;
});

export const removeBook = createAsyncThunk(BOOK_REMOVED, async (id) => {
  await fetch(`${baseURL}/${id}`, {
    method: 'DELETE',
  });
  return id;
});

const initialState = {
  books: [],
};

const bookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    ADDBOOK(state, action) {
      return ([...state.books, action.payload]);
    },
    REMOVEBOOK(state, action) {
      return state.books.filter((book) => book.id !== action.payload.id);
    },
  },
  extraReducers: {
    [fetchBooks.fulfilled]: (state, action) => {
      state.loading = false;
      state.books = action.payload;
    },
    [postBooks.fulfilled]: (state, action) => {
      state.books = [...state.books, action.payload];
    },
  },
});

export const { actions } = bookSlice;

export default bookSlice.reducer;
