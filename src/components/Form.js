import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { postBookToServer } from '../redux/books/book';

const Input = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');

  const categories = [
    'Classic',
    'Fiction',
    'Politics',
    'Literature',
    'Natural Sciences',
  ];
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && author && category) {
      const newBook = {
        payload: {
          item_id: uuidv4(),
          title,
          author,
          category,
        },

      };
      setTitle('');
      setAuthor('');
      setCategory('');
      dispatch(postBookToServer(newBook));
    }
  };

  return (
    <div>
      <h3> Add New Book</h3>
      <form action="#" onSubmit={handleSubmit} className="form-cont">
        <input
          type="text"
          placeholder="Title"
          className="book-title"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <select className="category-menu" placeholder="Category" name="category" value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="" disabled>Select Category...</option>
          {categories.sort().map((bookCategory) => (
            <option key={uuidv4()} value={bookCategory}>
              {bookCategory}
            </option>
          ))}
        </select>
        {' '}
        <br />
        <input
          type="text"
          placeholder="Author"
          className="book-author"
          name="author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        {' '}
        <br />
        <button type="submit" className="submitBtn">Add Book</button>
        <br />
        <br />
      </form>
    </div>
  );
};

export default Input;
