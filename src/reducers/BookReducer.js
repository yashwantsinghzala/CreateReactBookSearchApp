import { REQUEST_BOOKS_LIST, RECEIVE_BOOKS_LIST, LOG_ERROR_BOOK } from '../types'

export const bookInitialState = {
  isFetching: false,
  books: [],
  bookError: null
}
const bookReducer = (state = bookInitialState, action) => {
  switch (action.type) {
    case REQUEST_BOOKS_LIST:
      return Object.assign({}, state, {
        isFetching: true
      })
    case RECEIVE_BOOKS_LIST:
      return Object.assign({}, state, {
        isFetching: false,
        books: action.books,
      })
    case LOG_ERROR_BOOK:
      return Object.assign({}, state, {
        isFetching: false,
        bookError: action.error,
      })

    default:
      return state
  }
}

export default bookReducer;