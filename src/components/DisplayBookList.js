import React from 'react';
import PropTypes from 'prop-types';
// import { useSelector, useDispatch } from 'react-redux';
import Book from './Book';

const DisplayBookList = ({ bookDetails }) => (
  <div>
    <ul>
      {bookDetails.map((book) => (
        <Book key={book.item_id} books={book} />
      ))}
    </ul>
  </div>
);

DisplayBookList.propTypes = { bookDetails: PropTypes.string.isRequired };

export default DisplayBookList;
