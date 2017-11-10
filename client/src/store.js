import {
  createStore,
  applyMiddleware,
  combineReducers
} from 'redux';
import thunk from 'redux-thunk';

import posts from './reducers/posts'
import postFormData from './reducers/postFormData'
import users from './reducers/users.js'

const reducers = combineReducers({
  posts,
  postFormData,
  users
});

const middleware = [thunk]

export default createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(...middleware)
);
