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
    const { dispatch, action } = props;
    const { title, author } = inputBook;
    e.preventDefault();
    dispatch(action(title, author));
    setInputBook({
      title: '',
      author: '',
    });
  };

  return (
    <div>
      <form action="#" onSubmit={handleSubmit} className="form-cont">
        <input
          type="text"
          placeholder="Title"
          className="book-title"
          name="title"
          onChange={handleInput}
        />
        {' '}
        <br />
        <input
          type="text"
          placeholder="Author"
          className="book-author"
          name="author"
          onChange={handleInput}
        />
        <br />
        <button type="submit" className="submitBtn">Add New</button>
      </form>
    </div>
  );
};

Input.propTypes = {
  dispatch: PropTypes.func.isRequired,
  action: PropTypes.func.isRequired,

};

export default Input;
