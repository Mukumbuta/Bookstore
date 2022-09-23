import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Input = (props) => {
  const [inputBook, setInputBook] = useState({
    title: '',
    author: '',
  });

  const handleInput = (e) => {
    setInputBook({
      ...inputBook,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    const { addBook } = props;
    const { title, author } = inputBook;
    e.preventDefault();
    addBook(title, author);
    setInputBook({
      title: '',
      author: '',
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="form-cont">
        <input
          type="text"
          placeholder="Title"
          className="book-title"
          name="title"
        />
        <input
          type="text"
          placeholder="Author"
          className="book-author"
          name="author"
          onChange={handleInput}
        />
        <button type="submit" className="submitBtn">Submit</button>
      </form>
    </div>
  );
};

Input.propTypes = {
  addBook: PropTypes.func.isRequired,
};

export default Input;
