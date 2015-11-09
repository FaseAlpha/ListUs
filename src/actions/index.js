//import { pushState } from 'redux-router';

/*
 * action types
 */
export const SET_LISTS = 'SET_LISTS';

export const ADD_LIST = 'ADD_LIST';

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




