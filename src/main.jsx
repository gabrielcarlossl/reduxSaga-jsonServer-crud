import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import produtosReducer from './store/products/reducer.js';
import produtosSaga from './store/products/sagas.js'
import { Provider } from 'react-redux';

const sagaMiddleware = createSagaMiddleware();


const store = createStore(
  produtosReducer,
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(produtosSaga);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)
