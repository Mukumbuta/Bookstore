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
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;
