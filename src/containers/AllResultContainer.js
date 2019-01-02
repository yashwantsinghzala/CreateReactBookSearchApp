import React from "react";
import SearchResult from "../components/SearchResult";
import PropTypes from "prop-types";
import { fetchBookDetails } from '../actions'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

const AllResultContainer = ({ books, fetchBookDetails }) => {

    if (!books || !books.length > 0) return null;

    return (
        <div className="row search-result-container">
            {
                books.map(book => (
                    <SearchResult fetchBookDetails={fetchBookDetails} bookData={book} key={book.id} />
                ))}
        </div>
    );
};

AllResultContainer.propTypes = {
    bookData: PropTypes.object,
    fetchBookDetails: PropTypes.func
};



function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchBookDetails }, dispatch);
}

export default connect(null, mapDispatchToProps)(AllResultContainer);
