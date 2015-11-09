//import React from 'react';
import { connect } from 'react-redux';
import { addList, removeList } from '../actions';
import User from '../components/User';

function stateToProps(state){
	return {
		lists: state.lists
	};
}

function actionsToProps(dispatch){
	return{
		onAddList: (title, date) => dispatch(addList(title, date)),
		onRemoveList: id => dispatch(removeList(id))
	};
}

	

export default connect(
	/*state => ({
		 lists: state.lists
	}),

	dispatch =>({
		selectList: lists => dispatch(setList(lists))
	}) 
	dispatch =>({
		addList: dispatch(AddList(list))
	});*/
	stateToProps,
	actionsToProps
)(User);

