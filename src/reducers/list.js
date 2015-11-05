import { ADD_LIST, REMOVE_LIST } from '../actions';
import { getId } from '../utils';

import { Map, List } from 'immutable';

function addList (state, id, title) {
	
	const list = Map({
		[id]:Map({
			title: title
		})
	});

	return state.merge(list);


}

function removeList(state, id){
	return state.delete(id);
}

export default function listReducer( state = {} , action ){
  switch (action.type) {
    case ADD_LIST:
      return addList(state, action.id, action.title);
    case REMOVE_LIST:
    	return removeList(state, action.idList); 
    default:
      return state;
  }
}