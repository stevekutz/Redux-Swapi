import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
// import { createStore } from "redux";
import rootReducer from "./reducers";
// needed dependancies
// applyMiddleware from redux
// thunk from redux-thunk
// logger from redux-logger
// rootReducer from ./reducers

/*
const store = createStore(
  rootReducer
  // applyMiddleware goes here
);
*/

import { logger } from "./logger";
import thunk from "redux-thunk";
import { applyMiddleware, createStore, compose } from "redux";
const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

// We pass thunk into applyMiddleware and this sets us up to be able to return
// functions out of our action creators rather than returning actions
const enhancer = composeEnhancers(applyMiddleware(thunk, logger));

//const middleWareStuff = applyMiddleware(thunk, logger);

const store = createStore(rootReducer, enhancer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
