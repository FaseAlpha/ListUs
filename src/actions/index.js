/*
	TASK
*/
export const ADD_TASK = 'ADD_TASK';
export const REMOVE_TASK = 'REMOVE_TASK';
export const EDIT_TASK = 'EDIT_TASK';


/*
	LIST
*/

export const ADD_LIST = 'ADD_LIST';
export const REMOVE_LIST = 'REMOVE_LIST';
export const EDIT_LIST = 'EDIT_LIST';


/*
	Task actions creators
*/

export function addTask (title, idList) {
	return { type: ADD_TASK, title, idList };
}

export function removeTask (idTask) {
	return { type: REMOVE_TASK, idTask };
}

export function editTask (idTask, title) {
	return { type: EDIT_TASK, idTask, title };
}

/*
	List actions creators
*/

export function addList (title) {
	return { type: ADD_LIST, title };
}

export function removeList (idList) {
	return { type: REMOVE_LIST, idList };
}

export function editList(idList, title){
	return { type: EDIT_LIST, idList, title	};
}