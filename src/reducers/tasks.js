import { SET_TASKS } from '../actions';
import { cloneObject } from '../utils/functions';


function setTasks(state, tasks){
	return cloneObject(tasks);
}



export default function tasksReducer(state = [], action){
	switch(action.type){
		case SET_TASKS:
			return setTasks(state, action.tasks);
		default:
			return state;
	}
}