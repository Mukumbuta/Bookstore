import React from 'react';
import PropTypes from 'prop-types';

const Book = (props) => {
  const { title, author } = props;
  return (
    <div className="actual-book">
      <li className="actual-book-details">
        <span>{title}</span>
        <span>{author}</span>
        <button>Remove</button>
      </li>
    </div>
  );
};

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;
