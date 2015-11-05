import { SET_TASK, ADD_TASK, REMOVE_TASK, EDIT_TASK } from '../actions';
import { getId } from '../utils';
import { Map, List } from 'immutable';

function addTask(state, idList, title){
  const id = getId();
  const task = Map({
      [id]:Map({
          id,
          idList,
          title
        })
    });
  return state.merge(task);
}

function removeTask(state, idTask){
  return state.delete(idTask);
}

function editTask(state, idTask, title){
  return state.updateIn([idTask,'title'], olderTitle => title);
}


export default function taskReducer( state = {} , action ){
  switch (action.type) {
    case ADD_TASK:
      return addTask(state, action.idTask, action.title);
    case REMOVE_TASK:
      return removeTask(state, action.idTask);
    case EDIT_TASK:
      return editTask(state, action.idTask, action.title);
    default:
      return state;
  }
}
