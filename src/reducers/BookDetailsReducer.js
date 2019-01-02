import { REQUEST_BOOK_DETAILS, STORE_EXPANDED_BOOK, LOG_ERROR_BOOKDETAILS } from '../types'

 export const bookDetailsInitialState = {
  isFetching: false,
  expandedBook: null,
  description: 'Fetching description for this book...',
  bookDetailsError: null
}

const BookDetailsReducer = function (state = bookDetailsInitialState, action) {
  switch (action.type) {
    case REQUEST_BOOK_DETAILS:
      return Object.assign({}, state, {
        isFetching: true
      })
    case STORE_EXPANDED_BOOK:
      return Object.assign({}, state, {
        expandedBook: action.expandedBook,
        isFetching: false
      })
    case LOG_ERROR_BOOKDETAILS:
      return Object.assign({}, state, {
        isFetching: false,
        bookDetailsError: action.error,
      })
    default:
      return state
  }
}

export default BookDetailsReducer;