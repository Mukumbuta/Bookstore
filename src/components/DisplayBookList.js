import React from 'react';
import { useSelector } from 'react-redux';
import Book from './Book';

const DisplayBookList = () => {
  const bookDetails = useSelector((state) => state.booksReducer);
  return (
    <div>
      <ul>
        {bookDetails.map((book) => (
          <Book key={book.id} books={book} />
        ))}
      </ul>
    </div>
  );
};

export default DisplayBookList;
