
import { SET_LIST, ADD_LIST, REMOVE_LIST, EDIT_LIST, REMOVE_ALL_LISTS } from '../actions';
import { getId } from '../utils';

function setList (state, list) {
  return list.slice();
}

function addList( state, title ){
  const id = getId();
  return state.concat({ id, 'title': title });
}

function removeList( state, idList ){
  return state.filter( task => task.id !== idList );
}

function editList(state, idList, title){
  return state.map( list => list.id === idList ? Object.assign( {}, list, {'title': title }) : list );
}

function removeAllLists(state, list) {
  return state.filter( list => 1 === 0);
}




export default function listReducer( state = [], action){
  switch (action.type) {
    case SET_LIST:
      return setList(state, action.list);
    case ADD_LIST:
      return addList(state, action.title);
    case REMOVE_LIST:
      return removeList(state, action.idList);
    case EDIT_LIST:
      return editList(state, action.idList, action.title);
    case REMOVE_ALL_LISTS:
      return removeAllLists(state, action.list);
    default:
      return state;
  }
}
