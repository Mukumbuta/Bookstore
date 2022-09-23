import React from 'react';
import PropTypes from 'prop-types';
import Book from './Book';

const DisplayBookList = (props) => {
  const { bookDetails } = props;
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

DisplayBookList.propTypes = {
  bookDetails: PropTypes.string.isRequired,
};

export default DisplayBookList;
