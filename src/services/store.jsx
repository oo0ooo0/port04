import { createStore, compose } from 'redux';
import { rootReducer } from './reducers';
import dummyWorksData from '../dummy/works.json';
// import dummyCommentsData from '../dummy/comments.json';

///////////////////////////////////////
////
//// for add to key Value ID / workId
////
///////////////////////////////////////

function toKeyValueID(array) {
  let result = {};
  for (let i = 0; i < array.length; i++) {
    //toKeyValueWorkID
    result[array[i].id] = array[i];
    result[array[i].id].isLiked = false;

    //to change 'slice date' instead of createdAt
    result[array[i].id].createdAt = array[i].createdAt.slice(0, 10);
  }
  return result;
}

const initialState = {
  works: toKeyValueID(dummyWorksData.data.list),
};

/////////////////////////////////////////////////////////////////
////
//// for use REDUX DEVTOOLS at only development environments
////
/////////////////////////////////////////////////////////////////

const store = createStore(
  rootReducer,
  initialState,
  process.env.NODE_ENV === 'development'
    ? window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    : compose()
);

export default store;
