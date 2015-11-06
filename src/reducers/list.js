
import { SET_LIST, ADD_LIST, REMOVE_LIST, EDIT_LIST } from '../actions';
import { getId } from '../utils';

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




export default function listReducer( state = [], action){
  switch (action.type) {
    case ADD_LIST:
      return addList(state, action.title);
    case REMOVE_LIST:
      return removeList(state, action.idList);
    case EDIT_LIST:
      return editList(state, action.idList, action.title);
    default:
      return state;
  }
}
