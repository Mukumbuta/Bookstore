import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Form from './Form';
import DisplayBookList from './DisplayBookList';

const BooksContainer = () => {
  const [bookDetails, setbookDetails] = useState(
    {
      id: null,
      title: null,
      author: null,
    },
  );

  const addBook = (title, author) => {
    const newBook = {
      id: uuidv4(),
      title,
      author,
    };
    setbookDetails([
      ...bookDetails, newBook,
    ]);
  };

  return (
    <div className="container">
      <div className="inner">
        <Form addBook={addBook} />
        <DisplayBookList
          bookDetails={bookDetails}
        />
      </div>
    </div>
  );
};

export default BooksContainer;
