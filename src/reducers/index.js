import { combineReducers } from 'redux';
import { routerStateReducer as router } from 'redux-router';

import task from './task.js';
import list from './list.js';
import comment from './comment.js';
import friend from './friend.js';


const reducers = combineReducers({
	router,
  task,
  list,
  comment,
  friend
});

export default reducers;
