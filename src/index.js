import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";

import thunk from 'redux-thunk';
import logger from 'redux-logger';
import "./index.css";
import App from "./App";
import reducers from "./reducers";


ReactDOM.render(
  <Provider store={compose(applyMiddleware(thunk, logger))(createStore)(reducers)}>
    <App />
  </Provider>,
  document.getElementById("root")
);