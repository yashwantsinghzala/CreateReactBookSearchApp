import React from 'react';
import ReactDOM from 'react-dom';
import BookInfo from './components/BookInfo';
import SearchResult from './components/SearchResult';
import { testData } from './testData';

import { requestBooks } from './actions'
import BookReducer from './reducers/BookReducer';
import BookDetailsReducers from './reducers/BookDetailsReducer';

import {
  REQUEST_BOOKS_LIST, RECEIVE_BOOKS_LIST, REQUEST_BOOK_DETAILS,
  LOG_ERROR_BOOK, LOG_ERROR_BOOKDETAILS, STORE_EXPANDED_BOOK
} from './types'

describe('testing for dump components with the mock data', () => {
  it('should render BookInfo component', () => {
    const div = document.createElement('div');
    const data = testData[0];
    ReactDOM.render(<BookInfo bookData={data} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });


  it('should render Search Result component with testData', () => {
    const div = document.createElement('div');
    const data = testData[0];
    ReactDOM.render(<SearchResult bookData={data} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});


// test case for 1 of action
describe('actions', () => {
  it('should create an action to request books', () => {
    const text = 'requesting books'
    const expectedAction = {
      type: REQUEST_BOOKS_LIST,
    }
    expect(requestBooks(text)).toEqual(expectedAction)
  })
})

// test case for reducer
describe('book reducer', () => {
  let initialState = {
    isFetching: false,
    books: [],
    bookError: null
  }
  it('should return the initial state', () => {
    expect(BookReducer(undefined, {})).toEqual(initialState);
  });


  it('should handle request book list', () => {
    let response = { ...initialState, isFetching: true }
    expect(
      BookReducer(initialState, {
        type: REQUEST_BOOKS_LIST,
      })
    ).toEqual(response);
  });

  it('should handle recieve book list', () => {
    const books = [{ id: 1, name: 'harryPotter' }];
    const newState = { ...initialState, books };
    expect(
      BookReducer(initialState, {
        type: RECEIVE_BOOKS_LIST,
        books
      })
    ).toEqual(newState);
  });

  it('should handle error for Book', () => {
    const bookError = "netWork error";
    const newState = { ...initialState, bookError };
    expect(
      BookReducer(initialState, {
        type: LOG_ERROR_BOOK,
        error: bookError
      })
    ).toEqual(newState);
  });
});

describe('bookDetails reducer', () => {
  let initialState = {
    isFetching: false,
    expandedBook: null,
    description: 'Fetching description for this book...',
    bookDetailsError: null
  };

  it('should return the initial state', () => {
    expect(BookDetailsReducers(undefined, {})).toEqual(initialState)
  });

  it('should handle request book details', () => {
    let response = { ...initialState, isFetching: true };
    expect(
      BookDetailsReducers(initialState, {
        type: REQUEST_BOOK_DETAILS,
      })
    ).toEqual(response);
  });

  it('should handle store Expanded Book details', () => {
    const expandedBook = { id: 1, name: 'harryPotter' };
    const newState = { ...initialState, expandedBook };
    expect(
      BookDetailsReducers(initialState, {
        type: STORE_EXPANDED_BOOK,
        expandedBook
      })
    ).toEqual(newState);
  });

  it('should handle error for Book details', () => {
    const bookDetailsError = "netWork error";
    const newState = { ...initialState, bookDetailsError };
    expect(
      BookDetailsReducers(initialState, {
        type: LOG_ERROR_BOOKDETAILS,
        error: bookDetailsError
      })
    ).toEqual(newState);
  });
});

// TODO :need to write test case for asynchronous action to fetch books and book details

// describe('actions', () => {
//   it('should create an action to add a todo', () => {
//     const text = 'requesting books'
//     const expectedAction = {
//       type: REQUEST_BOOKS_LIST,
//     }
//     expect(requestBooks(text)).toEqual(expectedAction)
//   })
// })