import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBookAction } from '../redux/books/book';
import { removeBook } from '../redux/books/book';

const Book = ({ books }) => {
  const dispatch = useDispatch();

  const handleBookRemoval = (e) => {
    const id = e.target.id;
    dispatch(removeBook(id));
  };
  
  return (
    <div className="actual-book">
      <span className="actual-book-details">
        {books.payload.title}
      </span><br/><br/>
      <span className="actual-book-details">
        {books.payload.author}
      </span><br/><br/>
      <button
        id={books.payload.item_id}
        type="button"
        className="remove-btn"
        onClick={(e) => handleBookRemoval(e)}
      >
        Remove
      </button>
    </div>
  );
};

export default Book;
