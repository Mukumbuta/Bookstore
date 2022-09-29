const BOOK_ADDED = 'BOOK_ADDED';
const BOOK_REMOVED = 'BOOK_REMOVED';
const initState = [];

// Action Creator
const addActionCreator = (id, title, author) => ({
  type: BOOK_ADDED,
  id,
  title,
  author,
});

const removeActionCreator = (id, title, author) => ({
  type: BOOK_ADDED,
  id,
  title,
  author,
});

// Reducer
const booksReducer = (state = initState, action) => {
  switch (action.type) {
    case BOOK_ADDED:
      return [
        ...state,
        {
          id: action.title,
          title: action.title,
          author: action.author,
        },

      ];
    case BOOK_REMOVED:
      return state.filter((book) => book.id !== action.id);
    default:
      return state;
  }
};

export default booksReducer;
export { addActionCreator, removeActionCreator };
