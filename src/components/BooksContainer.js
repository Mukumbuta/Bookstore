import React from 'react';
import { useSelector } from 'react-redux';
import Form from './Form';
import DisplayBookList from './DisplayBookList';
  
const BooksContainer = () => { 
  const { books } = useSelector((state) => state.booksReducer)  

  return (
    <div className="container">
      <div className="inner">
        <Form />
        <DisplayBookList books={books} />
      </div>
    </div>
  );
};

export default BooksContainer;
