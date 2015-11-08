import { SET_LISTS, ADD_LIST } from '../actions';


function setList(state, lists) {
  return lists.slice();
}

function addList(state, list){
	return state.lists.concat(list);
}




export default function listReducer(state = [], action) {
	switch (action.type) {
  	case SET_LISTS:
  		return setList(state, action.lists);
  	case ADD_LIST:
  		return addList(state, action.list);
  	default:
  		return state;
  	}
}