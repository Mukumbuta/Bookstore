import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
import Book from './Book';

const DisplayBookList = ({ bookDetails }) => {

  return (
    <div>
      <ul>
        {bookDetails.map((book) => (
          <Book key={book.item_id} books={book} />
        ))}
      </ul>
    </div>
  );
};

export default DisplayBookList;
