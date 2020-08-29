import { createStore, compose, applyMiddleware } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { createBrowserHistory } from 'history';
import axiosMiddleware from 'redux-axios-middleware';
import Immutable from 'seamless-immutable';
import thunk from 'redux-thunk';
import rootReducer from './todoList/index';
import { client } from './httpclient';

const middleware = [thunk, axiosMiddleware(client)];

const defaultStore = Immutable({});
const enhancers = compose(
  applyMiddleware(...middleware),
  window.__REDUX_DEVTOOLS_EXTENSION__
    ? window.__REDUX_DEVTOOLS_EXTENSION__()
    : (def) => def,
);

const browserHistory = createBrowserHistory();

const store = createStore(rootReducer, defaultStore, enhancers);

export const history = syncHistoryWithStore(browserHistory, store);

export default store;
