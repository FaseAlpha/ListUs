import { connect } from 'react-redux';
import ListTasks from '../components/ListTasks';
import { addTask, removeTask } from '../actions';



function stateToProps(state){
	return {
		lists: state.lists,
		tasks: state.tasks
	};
}

function actionsToProps(dispatch){
	return {
		onAddTask: (idList, task) => dispatch(addTask(idList, task)),
		onRemoveTask: (idList, idTask) => dispatch(removeTask(idList, idTask))
	};
}

export default connect(
	stateToProps,
	actionsToProps
)(ListTasks);