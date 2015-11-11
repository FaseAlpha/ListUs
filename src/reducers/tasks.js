import { SET_TASKS, ADD_TASK, REMOVE_TASK } from '../actions';
import { cloneObject, arrayPositionByObjectKey } from '../utils/functions';
import getID from '../utils';


function setTasks(state, tasks){
	return cloneObject(tasks);
}

function addTask(state, idList, task){
	var newState = cloneObject(state);
	newState[idList].push(task);
	return newState;
}

function removeTask(state, idList, idTask){
	const newState = cloneObject(state);
	newState[idList].splice(arrayPositionByObjectKey('idTask', idTask, newState[idList]), 1);
	return newState;
}



export default function tasksReducer(state = [], action){
	switch(action.type){
		case SET_TASKS:
			return setTasks(state, action.tasks);
		case ADD_TASK:
			return addTask(state, action.idList, action.task);
		case REMOVE_TASK:
			return removeTask(state, action.idList, action.idTask);
		default:
			return state;
	}
}