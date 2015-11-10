import { connect } from 'react-redux';
import ListTasks from '../components/ListTasks';



function stateToProps(state){
	return {
		lists: state.lists,
		tasks: state.tasks
	};
}

function actionsToProps(dispatch){
	return {

	};
}

export default connect(
	stateToProps,
	actionsToProps
)(ListTasks);