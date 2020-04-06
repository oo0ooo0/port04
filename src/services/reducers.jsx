import { combineReducers } from 'redux';
import { workReducer } from './works/reducer';
import { commentReducer } from './comments/reducer';

export const rootReducer = combineReducers({
  works: workReducer,
  comments: commentReducer,
});
