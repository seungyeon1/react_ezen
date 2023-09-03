import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { legacy_createStore as createStore, applyMiddleware } from "redux";
import rootReducer, { rootSaga } from "./modules";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
// import loggerMiddleware from "./lib/loggerMiddleware"; //직접 미들웨이 만듦
import { createLogger } from "redux-logger"; //미들웨어 lib
import ReduxThunk from "redux-thunk"; //{}제거 해야해야함..
import createSagaMiddleware from "@redux-saga/core"; //saga 미들웨어 lib

const root = ReactDOM.createRoot(document.getElementById("root"));
const logger = createLogger();
const sagaMiddleware = createSagaMiddleware();

// const store = legacy_createStore(
//   rootRedcuer,
//   applyMiddleware(logger, ReduxThunk
// );
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(logger, ReduxThunk, sagaMiddleware))
);
sagaMiddleware.run(rootSaga);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
