const BOOK_ADDED = 'BOOK_ADDED'
const BOOK_REMOVED = 'BOOK_REMOVED'
const initState = [];

// Action Creator
const addActionCreator = (title, author) => ({
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
                author: action.author
               }

            ];
        case BOOK_REMOVED:
            return state.map((book) => {
                if (book.id !== action.id) {
                    return book;
                }
            });
        default:
            return state;
    }
}

export default booksReducer;
export { addActionCreator, removeActionCreator };

