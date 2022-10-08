import { configureStore } from '@reduxjs/toolkit';
import bookSlice, { fetchAPIBooks } from './books/book';
import categoriesReducer from './categories/categories';

const store = configureStore({
  reducer: {
    booksReducer: bookSlice.reducer,
    categoriesReducer,
  },
});

export default store;
