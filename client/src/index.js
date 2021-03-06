import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import 'antd/dist/antd.css'
// import { applyMiddleware, createStore } from 'redux';
import promiseMiddleware from 'redux-promise'
import ReduxThunk from 'redux-thunk'
import Reducer from './_reducers'
import { configureStore } from '@reduxjs/toolkit'

// const createStoreWithMiddleware = applyMiddleware(promiseMiddleware, ReduxThunk)(createStore)
const confStore = configureStore({
  reducer: Reducer,
  middleware: [promiseMiddleware, ReduxThunk],
  devTools: process.env.NODE_ENV !== "production"
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={confStore}>
    {/* <Provider store={createStoreWithMiddleware(Reducer,
    window.__REDUX_DEVTOOLS_RXTENSION__ &&
    window.__REDUX_DEVTOOLS_RXTENSION__()
  )}> */}
    <App />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
