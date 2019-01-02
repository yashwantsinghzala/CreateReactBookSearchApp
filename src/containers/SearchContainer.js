import React, { Component, Fragment } from "react";
import { fetchBooks } from '../actions'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import BookInfoContainer from './BookInfoContainer';
import AllResultContainer from './AllResultContainer';
import loaderImg from '../assets/loading.gif';

class SearchContainer extends Component {

  constructor(props) {
    super(props);
    this.onSearchButtonClick = this.onSearchButtonClick.bind(this);
    this.state = {
      searchText: "",
    };
  }

  keyPress = (e) => {
    if (e.charCode === 13) {
      this.onSearchTextChange(e);
      this.onSearchButtonClick();
    }
  }

  onSearchTextChange = e => {
    this.setState({
      searchText: e.target.value
    });
  };

  onSearchButtonClick = () => {
    const { searchText } = this.state;
    this.props.fetchBooks(searchText);
  }


  render() {
    const { bookData, books, fetchingBooks, bookError, fetchingBookDetails } = this.props;

    if (bookData) {
      return <BookInfoContainer bookData={this.props.bookData} />
    }
    return (
      <Fragment>
        <div className="form-group row">
          <div className="col-sm-9">
            <input
              className="form-control"
              type="text"
              placeholder="Search Books By Title, Author, or ISBN..."
              name="searchText"
              onChange={this.onSearchTextChange}
              onKeyPress={this.keyPress}
              value={this.state.searchText}
            />
          </div>
          <div className="col-sm-3">
            <button
              className="btn btn-primary col-12"
              onClick={this.onSearchButtonClick}
              disabled={fetchingBooks}
            >
              Search
            </button>
          </div>
        </div>

        {/**
         * if fetching data, displays loader */}
        {
          fetchingBooks || fetchingBookDetails ? (
            <div className="search-result-container">
              <div className="lead text-center">
                <img src={loaderImg} alt="loading" />
              </div>
            </div>
          ) : (
              (bookError && (
                <p className="text-danger">{bookError}</p>
              )) ||
              <AllResultContainer
                books={books}
              />
            )}
      </Fragment>
    );
  }
}

SearchContainer.propTypes = {
  books: PropTypes.array,
  fetchBooks: PropTypes.func,
  bookData: PropTypes.object,
  bookError: PropTypes.any
};

function mapStateToProps(state) {
  return {
    fetchingBooks: state.book.isFetching,
    fetchingBookDetails: state.bookDetail.isFetching,
    books: state.book.books,
    bookError: state.book.bookError,
    bookData: state.bookDetail.expandedBook
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchBooks: fetchBooks }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchContainer);


