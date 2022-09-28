import { configureStore } from '@reduxjs/toolkit';
import categoriesReducer from './categories/categories';
import booksReducer from './books/book';

const rootReducer = configureStore({
  reducers: {
    booksReducer,
    categoriesReducer,
  },
});

export default { rootReducer };
