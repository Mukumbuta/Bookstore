import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addActionCreator } from '../redux/books/book';
import Form from './Form';
import DisplayBookList from './DisplayBookList';

const BooksContainer = () => {
  const dispatch = useDispatch();
  const bookDetails = useSelector((state) => state.booksReducer);

  return (
    <div className="container">
      <div className="inner">
        <Form dispatch={dispatch} action={addActionCreator} />
        <DisplayBookList
          bookDetails={bookDetails}
        />
      </div>
    </div>
  );
};

export default BooksContainer;
