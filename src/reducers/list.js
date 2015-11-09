import { SET_LISTS, ADD_LIST, REMOVE_LIST } from '../actions';
import { getId } from '../utils';


function setList(state, lists) {
  return lists.slice();
}

function addList(state, title, date){
  //console.log('state.list: '+state+', title: '+title+', date: '+date);
  return state.concat({title, date, id: getId()});
}

function removeList(state, id){
  const newState = state;
  for(let i=0; i<newState.length; i++){
    if(newState[i]['id'] === id){
      newState.splice(i, 1);
      return newState;
    }
  }

}




export default function listReducer(state = [], action) {
  switch (action.type) {
    case SET_LISTS:
      return setList(state, action.lists);
    case ADD_LIST:
      return addList(state, action.title, action.date);
    case REMOVE_LIST:
      return removeList(state, action.id);
    default:
      return state;
    }
}