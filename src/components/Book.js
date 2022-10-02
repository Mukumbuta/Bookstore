import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/book';

const Book = ({ books }) => {
  console.log(books);
  const dispatch = useDispatch();

  const handleBookRemoval = (e) => {
    const { id } = e.target;
    dispatch(removeBook(id));
  };

  return (
    <div className="actual-book">
      <span className="actual-book-details">
        {books.title}
      </span>
      <br />
      <br />
      <span className="actual-book-details">
        {books.author}
      </span>
      <br />
      <br />
      <button
        id={books.id}
        type="button"
        className="remove-btn"
        onClick={(e) => handleBookRemoval(e)}
      >
        Remove
      </button>
    </div>
  );
};

Book.propTypes = { books: PropTypes.string.isRequired };

export default Book;
