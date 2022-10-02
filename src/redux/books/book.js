const BOOK_ADDED = 'BOOK_ADDED';
const BOOK_REMOVED = 'BOOK_REMOVED';
const API_BOOKS_FETCHED = 'API_BOOKS_FETCHED';
const baseURL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/NQw75neHFwyUpwkLwqYz/books/';
const initState = [];

const booksReducer = (state = initState, action) => {
  switch (action.type) {
    case API_BOOKS_FETCHED:
      return [
        ...action.payload,
      ];
    case BOOK_ADDED:
      return [
        ...state, action.payload,
      ];
    case BOOK_REMOVED:
      return [
        ...state.filter((book) => book.id !== action.id),
      ];
    default:
      return state;
  }
};

const apiBooksFetched = (payload) => ({
  type: API_BOOKS_FETCHED,
  payload,
});

const addBookAction = (payload) => ({
  type: BOOK_ADDED,
  payload,
});

const removeBookAction = (id) => ({
  type: BOOK_REMOVED,
  id,
});
const fetchAPIBooks = () => async (dispatch) => {
  const response = await fetch(baseURL);
  const responseData = await response.json();
  const remoteBooks = Object.entries(responseData).map((respData) => ({
    id: respData[0],
    ...respData[1][0],
  }));
  dispatch(apiBooksFetched(remoteBooks));
};

const postBookToServer = (payload) => async (dispatch) => {
  dispatch(addBookAction(payload));
  await fetch(baseURL, {
    method: 'POST',
    body: JSON.stringify(payload.payload),
    headers: {
      'content-Type': 'application/json',
    },
  });
};

const removeBook = (id) => async (dispatch) => {
  dispatch(removeBookAction(id));
  await fetch(
    `${baseURL}${id}`,
    {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/JSON',
      },
    },
  );
  return id;
};

export default booksReducer;
export {
  apiBooksFetched,
  fetchAPIBooks,
  postBookToServer,
  removeBook,
  addBookAction,
  removeBookAction,
};
