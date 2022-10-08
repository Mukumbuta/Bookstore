import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeActionCreator } from '../redux/books/book';

const Book = (props) => {
  const dispatch = useDispatch();
  const { books } = props;
  return (
    <div className="actual-book">
      <li className="actual-book-details">
        <span>
          Title:
          {books.title}
        </span>
        <br />
        <span>
          Author:
          {books.author}
        </span>
        <br />
        <button
          id={books.id}
          type="button"
          className="remove-btn"
          onClick={(e) => dispatch(removeActionCreator(e.target.id))}
        >
          Remove
        </button>
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
