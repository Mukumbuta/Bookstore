import React from 'react';
import { useSelector } from 'react-redux';
import Book from './Book';


const DisplayBookList = ({ books }) => {

  return (
    <div>
      <ul>
        {books.map((book) => (
          <Book key={book.item_id} books={book} />
        ))}
      </ul>
    </div>
  )
};

export default DisplayBookList;
