import { SET_LISTS, ADD_LIST } from '../actions';
import { getId } from '../utils';


function setList(state, lists) {
  return lists.slice();
}

function addList(state, title, date){
  //console.log('state.list: '+state+', title: '+title+', date: '+date);
  return state.concat({title, date, id: getId()});
}




export default function listReducer(state = [], action) {
  switch (action.type) {
    case SET_LISTS:
      return setList(state, action.lists);
    case ADD_LIST:
      return addList(state, action.title, action.date);
    default:
      return state;
    }
}