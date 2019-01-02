import React from "react";
import PropTypes from "prop-types";

const BookInfo = ({ bookData, resetExpandedBook, error }) => {
    return (
        <div className="row book-info-container">
            <div className="col-lg-12 previous-btn-wrapper">
                <button className="btn btn-primary" onClick={resetExpandedBook}>
                    <span>&#171;</span> Go Back
        </button>
            </div>

            <h3 className="col-lg-12 mb-3 mt-3">{bookData.title}</h3>
            <div className="col-lg-2 col-sm-4 ">
                <img
                    className="mb-3"
                    src={bookData.image_url}
                    width="100%"
                    alt="book cover"
                />
                <div>
                    <span className="font-weight-bold">By: </span>
                    {bookData.authors.author.name}
                </div>
                <div className="mb-3">
                    <span className="font-weight-bold">Avg. Rating: </span>
                    {bookData.average_rating}
                </div>
            </div>
            <div className="col-lg-10 col-sm-8">
                {(
                    error && (
                        <p className="text-danger">{error}</p>
                    )) || (
                        <p dangerouslySetInnerHTML={{ __html: bookData.description }} />
                    )}
            </div>
            <footer className="col-lg-12">
                <span className="font-weight-bold">Published Date: </span>
                {`${bookData.publication_day}/${
                    bookData.publication_month
                    }/${bookData.c}`}
                .{" "}
                <a
                    href={`https://www.goodreads.com/book/show/${
                        bookData.id
                        }`}
                    target="__blank"
                >
                    Learn More
          </a>
            </footer>
        </div>

    );
};

BookInfo.propTypes = {
    bookData: PropTypes.object,
    resetExpandedBook: PropTypes.object
};

export default BookInfo