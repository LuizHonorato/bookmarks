import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import multi from "redux-multi";
import thunk from "redux-thunk";
import promise from "redux-promise";
import App from "./main/App";
import reducers from "./main/reducers";
import * as serviceWorker from "./serviceWorker";

const devTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ &&
  window.window.__REDUX_DEVTOOLS_EXTENSION__();

const store = applyMiddleware(multi, thunk, promise)(createStore)(
  reducers,
  devTools
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,

  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
