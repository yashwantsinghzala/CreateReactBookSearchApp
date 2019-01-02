import React, { Component } from "react";
import { resetExpandedBook } from '../actions';
import BookInfo from '../components/BookInfo';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class BookInfoContainer extends Component {
  render() {
    const { bookData, resetExpandedBook, bookDetailsError } = this.props;

    return (
      <BookInfo error={bookDetailsError} bookData={bookData} resetExpandedBook={resetExpandedBook} />
    );
  }
}

function mapStateToProps(state) {
  return {
    bookDetailsError: state.bookDetail.bookDetailsError
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ resetExpandedBook: resetExpandedBook }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(BookInfoContainer);