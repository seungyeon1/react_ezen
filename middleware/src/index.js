import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { applyMiddleware, legacy_createStore } from "redux";
import rootRedcuer from "./modules";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
// import loggerMiddleware from "./lib/loggerMiddleware"; //직접 미들웨이 만듦
import { createLogger } from "redux-logger"; //미들웨어 lib
import ReduxThunk from "redux-thunk"; //{}제거 해야해야함..

const root = ReactDOM.createRoot(document.getElementById("root"));
const logger = createLogger();
const store = legacy_createStore(
  rootRedcuer,
  applyMiddleware(logger, ReduxThunk)
);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
