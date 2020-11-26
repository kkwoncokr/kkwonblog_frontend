import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {applyMiddleware, createStore} from 'redux';
import {Provider} from 'react-redux';
import rootReducer,{rootSaga} from './modules';
import logger from 'redux-logger';
import { Router } from 'react-router-dom';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import { createBrowserHistory } from 'history';

const customHistory = createBrowserHistory();
const sagaMiddleware = createSagaMiddleware({
  context: {
    history : customHistory
  }
});

const store = createStore(
              rootReducer, 
              composeWithDevTools (applyMiddleware(logger,sagaMiddleware))
              );

sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Router history={customHistory}>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>,
  document.getElementById('root')
);
