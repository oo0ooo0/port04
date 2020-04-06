import { createStore, compose } from 'redux';
import { rootReducer } from './reducers';
import dummyWorksData from '../dummy/works.json';
import dummyCommentsData from '../dummy/comments.json';

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

function toKeyValueWorkID(array) {
  let result = {};

  //to change 'slice date' instead of createdAt
  for (let i = 0; i < array.length; i++) {
    array[i].createdAt = array[i].createdAt.slice(0, 10);

    //When there are replies,
    if (array[i].replies) {
      //In replies Array, to change 'slice date' instead of createdAt
      for (let j = 0; j < array[i].replies.list.length; j++) {
        array[i].replies.list[j].createdAt = array[i].replies.list[j].createdAt.slice(0, 10);
      }
    }

    //When there are replies,
    if (array[i].replies) {
    }

    //the work ID is used as the key value.
    if (result[array[i].workId]) {
      if (result[array[i].workId].comments) {
        result[array[i].workId].comments.push(array[i]);
      } else {
        result[array[i].workId].comments = [array[i]];
      }
    }
    //When there aren't replies,
    else {
      result[array[i].workId] = {};
      if (result[array[i].workId].comments) {
        result[array[i].workId].comments.push(array[i]);
      } else {
        result[array[i].workId].comments = [array[i]];
      }
    }
  }
  return result;
}

const initialState = {
  works: toKeyValueID(dummyWorksData.data.list),
  comments: toKeyValueWorkID(dummyCommentsData.data.list),
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
