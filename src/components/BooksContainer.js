import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addBookAction, fetchAPIBooks } from '../redux/books/book';
import Form from './Form';
import DisplayBookList from './DisplayBookList';

const BooksContainer = () => {
  const dispatch = useDispatch();
  const bookDetails = useSelector((state) => state.booksReducer);
  useEffect(() => {
    fetchAPIBooks();
  }, []);

  return (
    <div className="container">
      <div className="inner">
        <Form dispatch={dispatch} action={addBookAction} />
        <DisplayBookList
          bookDetails={bookDetails}
        />
      </div>
    </div>
  );
};

export default BooksContainer;
