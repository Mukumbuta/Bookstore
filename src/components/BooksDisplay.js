import PropTypes from 'prop-types';
import Book from './Book';
import Form from './form';

function BooksDisplay({ books }) {
  const list = books.map((book) => (
    <Book id={book.id} key={book.id} author={book.author} title={book.title} />
  ));

  return (
    <div className="books-container">
      {list}
      <Form />
    </div>
  );
}

BooksDisplay.propTypes = {
  /* eslint-disable */
    books: PropTypes.array.isRequired, 
};

export default BooksDisplay;
