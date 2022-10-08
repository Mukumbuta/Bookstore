import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const BOOK_ADDED = 'BOOK_ADDED';
const BOOK_REMOVED = 'BOOK_REMOVED';
const API_BOOKS_FETCHED = 'API_BOOKS_FETCHED';
const baseURL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/NQw75neHFwyUpwkLwqYz/books/';
const initialState = {
  books: [],
  loading: false
}

export const fetchAPIBooks = createAsyncThunk(
  API_BOOKS_FETCHED, 
  async () => {
    const response = await axios.get(baseURL);
    const responseData = await response.data;
    const remoteBooks = Object.entries(responseData).map((respData) => ({
      id: respData[0],
      ...respData[1][0],
  }));
  return remoteBooks
});

export const postBook = createAsyncThunk(
  BOOK_ADDED, 
  async (data, {rejectWithValue}) => {
    try {
      const response = await fetch(
        baseURL, 
        {
          method: 'POST',
          body: JSON.stringify(data),
          headers: {
            'content-Type': 'application/json',
          },
        }
      )
      const apidata = await response.json() 
      return apidata
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

export const removeBook = createAsyncThunk(
  BOOK_REMOVED, 
  async (id) => {
  await fetch(
    `${baseURL}${id}`,
    {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/JSON',
      },
    },
  );
  return id;
});

const bookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBooks: (state, action) => ({
      ...state,
      books: [
        ...state.books,
        [
          {
            id: action.payload.item_id,
            title: action.payload.title,
            category: action.payload.category,
            author: action.payload.author,
          },
        ],
      ],
    }),
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchAPIBooks.pending, (state) => {
        state.loading = true
      })

      .addCase(fetchAPIBooks.fulfilled, (state, { payload }) => {
          state.loading = false;
          state.books = payload;
      })

      .addCase(fetchAPIBooks.rejected, (state,action) => {
        state.loading = false
        throw new Error(action.error);
      })
      
      .addCase(postBook.fulfilled, (state, { payload }) => {
        state.loading = false
        state.books = payload  
        console.log(payload)
      })

      .addCase(postBook.rejected, (action) => {
        return  action.payload;
      })

      .addCase(removeBook.fulfilled, (state, action) => {
          let currState = state;
          currState = action.payload;
      });
  },
});

export default bookSlice;
export const addBooks = bookSlice.actions;
