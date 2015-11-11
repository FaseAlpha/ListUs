//import { pushState } from 'redux-router';

/*
 * action types
 */
export const SET_LISTS = 'SET_LISTS';
export const ADD_LIST = 'ADD_LIST';
export const REMOVE_LIST = 'REMOVE_LIST';

/****************************/

export const SET_TASKS = 'SET_TASKS';
export const ADD_TASK = 'ADD_TASK';
export const REMOVE_TASK = 'REMOVE_TASK';

/*
 * Poll action creators
 */

export function setLists(lists) {
  return {
     type: SET_LISTS, lists	
  };
}

export function addList(title, date){
  return {
    type: ADD_LIST, title, date
  };
}

export function removeList(idList){
	return {
		type: REMOVE_LIST, idList
	};
}

/************  TASKS  ***********/

export function setTasks(tasks){
	return {
		type: SET_TASKS, tasks
	};
}

export function addTask(idList, task){
	return {
		type: ADD_TASK, idList, task
	};
}

export function removeTask(idList, idTask){
	return {
		type: REMOVE_TASK, idList, idTask
	};
}


