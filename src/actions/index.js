/*
 * action types
 */
export const SET_LISTS = 'SET_LISTS';
export const ADD_LIST = 'ADD_LIST';

/*
 * other constants
 */



/*
 * action creators
 */

export function setLists(lists) {
  return { type: SET_LISTS, lists };
}

export function addList(title) {
  return { type: ADD_LIST, title };
}