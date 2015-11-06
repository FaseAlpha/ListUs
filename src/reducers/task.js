import { SET_TASK, ADD_TASK, REMOVE_TASK, EDIT_TASK } from '../actions';
import { getId } from '../utils';

function addTask(state, idList, title){
  const id = getId();
  const list = {
    [id]:{
      id,
      idList,
      title
    }
  };
  return Object.assign({}, state, list);
}

function removeTask(state, idTask){
  let newState = Object.assign({}, state);
  delete newState[idTask];
  return newState;

  //return Object.values(state).reduce( (tasks, task) => task.id === idTask ? tasks : Object.assign( tasks, { [task.id]: task }),{});
}

function editTask(state, idTask, title){
  let newTask = Object.assign({}, state[idTask], {title});
  return Object.assign({}, state, {[ idTask ]: newTask});
  //return Object.values(state).reduce( (tasks, task)  => task.id === idTask ? Object.assign(tasks, { [task.id]: {id:task.id,idList:task.idList,title} }, { }) : Object.assign( tasks, { [task.id]: task }) , {});
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
