import {
  createStore,
  applyMiddleware,
  combineReducers
} from 'redux';
import thunk from 'redux-thunk';

const postsReducer = (state= [], action) => {
  switch (action.type) {
    case 'GET_POSTS_SUCCESS':
      return action.posts;
    default:
      return state;
  }
}
import posts from './reducers/posts'
const reducers = combineReducers({
  posts: postsReducer
});

const middleware = []

export default createStore(
  reducers,
  applyMiddleware(...middleware),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
