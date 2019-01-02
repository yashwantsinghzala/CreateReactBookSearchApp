import Axios from "axios";
import { parseXMLResponseForSearch, parseXMLResponseForBookInfo } from '../utills'
import {
    REQUEST_BOOKS_LIST, RECEIVE_BOOKS_LIST, REQUEST_BOOK_DETAILS,
    STORE_EXPANDED_BOOK, LOG_ERROR_BOOKDETAILS, LOG_ERROR_BOOK
} from '../types'

const apiKey = process.env.REACT_APP_API_KEY;

export const requestBooks = () => {
    return {
        type: REQUEST_BOOKS_LIST
    }
}

export const receiveBooks = (data) => {
    return {
        type: RECEIVE_BOOKS_LIST,
        books: data,
    }
}

export const logErrorforBook = (error) => {
    return {
        type: LOG_ERROR_BOOK,
        error
    }
}

export const logErrorforBookDetails = (error) => {
    return {
        type: LOG_ERROR_BOOKDETAILS,
        error
    }
}

export const requestBookDetails = () => {
    return {
        type: REQUEST_BOOK_DETAILS
    }
}

export const resetExpandedBook = (book) => {
    return {
        type: STORE_EXPANDED_BOOK,
        expandedBook: false
    }
}

export const storeExpandedBook = (book) => {
    return {
        type: STORE_EXPANDED_BOOK,
        expandedBook: book
    }
}

export const fetchBooks = (searchText) => {
    const requestUri =
        `https://cors-anywhere.herokuapp.com/` +
        `https://www.goodreads.com/search/index.xml?key=${apiKey}&q=${searchText}`;
    return dispatch => {
        dispatch(requestBooks())
        return Axios.get(requestUri)
            .then(res =>
                parseXMLResponseForSearch(res.data))
            .then(json => dispatch(receiveBooks(json)))
            .catch(error => dispatch(logErrorforBook(error.toString()))
            );
    }
}

export const fetchBookDetails = (bookId) => {
    const requestUri =
        `https://cors-anywhere.herokuapp.com/` +
        `https://www.goodreads.com/book/show/${bookId}?key=${apiKey}`;

    return dispatch => {
               dispatch(requestBookDetails())
        return Axios.get(requestUri)
            .then(res =>
                parseXMLResponseForBookInfo(res.data))
            .then(json => dispatch(storeExpandedBook(json)))
            .catch(error => dispatch(logErrorforBookDetails(error.toString()))
            );
    }
}
