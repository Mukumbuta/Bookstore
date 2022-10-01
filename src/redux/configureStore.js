// import { configureStore } from '@reduxjs/toolkit';
import { combineReducers, createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import categoriesReducer from './categories/categories';
import booksReducer, { fetchAPIBooks } from './books/book';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
    booksReducer,
    categoriesReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk, logger)),
);

store.dispatch(fetchAPIBooks());

export default store;
