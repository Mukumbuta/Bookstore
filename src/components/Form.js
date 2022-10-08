import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { postBook } from '../redux/books/book';

const Input = () => {
  const [inputData, setInputData] = useState(
    {
      title: '',
      author: '',
      category: ''
    }
  )

  const dispatch = useDispatch();
  const categories = ['Poetry & Art', 'Fiction', 'Politics', 'Literature', 'Natural Sciences'];

  const handleChange = (e) => {
    setInputData((stateData) => {
      return {
        ...stateData,
        [e.target.name]: e.target.value
      }      
    })
  }

  const handleSubmit = (e) => {
    const { title, author, category } = inputData;
    if (title.trim() && author.trim() && category.trim()) {
      const newBook = {
          item_id: uuidv4(),
          title,
          author,
          category,
      };
      dispatch(postBook(newBook));
    }
    setInputData(
      {
        title: '',
        author: '',
        category: ''
      }
    )
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
          value={inputData.title}
          onChange={handleChange}
        />
        <select className="category-menu" 
          placeholder="Category" name="category" 
          value={inputData.category} onChange={handleChange}>
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
          value={inputData.author}
          onChange={handleChange}
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
