import { v4 as uuidv4 } from 'uuid';

const BOOK_ADDED = 'BOOK_ADDED';
const BOOK_REMOVED = 'BOOK_REMOVED';
const initState = [
  { title: 'JavaScript', author: 'Kumar JB', id: uuidv4() },
  { title: 'Python', author: 'Von Rosum', id: uuidv4() },
  { title: 'React-Redux', author: 'Mukumbuta', id: uuidv4() },
  { title: 'Django', author: 'KKK', id: uuidv4() },
];

const addActionCreator = (title, author) => ({
  type: BOOK_ADDED,
  id: uuidv4(),
  title,
  author,
});

const removeActionCreator = (id) => ({
  type: BOOK_REMOVED,
  id,
});

const booksReducer = (state = initState, action) => {
  switch (action.type) {
    case BOOK_ADDED:
      return [
        ...state,
        {
          id: action.id,
          title: action.title,
          author: action.author,
        },

      ];
    case BOOK_REMOVED:
      return [
        ...state.filter((book) => book.id !== action.id),
      ];
    default:
      return state;
  }
};

export default booksReducer;
export { addActionCreator, removeActionCreator };
