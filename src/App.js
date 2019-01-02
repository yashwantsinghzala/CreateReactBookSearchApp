import React, { Component } from "react";
import SearchContainer from "./containers/SearchContainer"


class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="header clearfix mt-2 mb-2">
          <h3 className="text-muted">Goodreads Book Search</h3>
        </div>
        <div className="search-container">
          <SearchContainer />
        </div>
      </div>
    );
  }
}

export default App;
