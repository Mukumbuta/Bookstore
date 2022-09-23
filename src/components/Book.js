import React from 'react';
import PropTypes from 'prop-types';

const Book = (props) => {
  const { books } = props;
  return (
    <div className="actual-book">
      <li className="actual-book-details">
        <span>{books.title}</span>
        <span>{books.author}</span>
        <button type="button" className="remove-btn">Remove</button>
      </li>
    </div>
  );
};

Book.propTypes = {
  books: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;
