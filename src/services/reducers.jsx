import { combineReducers } from 'redux';
import { workReducer } from './works/reducer';

export const rootReducer = combineReducers({
  works: workReducer,
});
