import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import bucketReducer from './reducers/bucketReducer';
import cardReducer from './reducers/cardReducer';

const rootReducer = combineReducers({
  buckets: bucketReducer,
  cards: cardReducer
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
