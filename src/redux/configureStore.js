import { configureStore } from '@reduxjs/toolkit';
import categoriesReducer from './categories/categories';
import booksReducer from './books/book';

const store = configureStore({
  reducer: {
    booksReducer,
    categoriesReducer,
  },
});

export default store;
