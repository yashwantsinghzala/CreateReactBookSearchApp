import { combineReducers } from 'redux';

import  BookReducer  from './BookReducer';
import BookDetailsReducers from './BookDetailsReducer';

const rootReducer = combineReducers({
    book: BookReducer,
    bookDetail: BookDetailsReducers
});

export default rootReducer;