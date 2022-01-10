import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import { store } from './app/store';
import {configureStore} from '@reduxjs/toolkit';
import boardReducer from './app/boardStore.js';
import { Provider } from 'react-redux';

export const store = configureStore({
  reducer: {
    board: boardReducer,
  }
})

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
