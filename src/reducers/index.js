import { combineReducers } from 'redux';
import { routerStateReducer as router } from 'redux-router';

import task from './task.js';
import list from './list.js';


const reducers = combineReducers({
	router,
  task,
  list
});

export default reducers;
