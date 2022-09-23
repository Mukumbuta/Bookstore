import React from 'react';
import PropTypes from 'prop-types';
import Book from './Book';

const DisplayBookList = (props) => {
  const { bookDetails } = props;
  return (
    <div>
      <ul>
        {bookDetails.map((book) => (
          <Book key={book.id} book={book} />
        ))}
      </ul>
    </div>
  );
};

DisplayBookList.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  bookDetails: PropTypes.array.isRequired,
};

export default DisplayBookList;
