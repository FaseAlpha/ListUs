//import React from 'react';
import { connect } from 'react-redux';
import { addList, removeList } from '../actions';
import ConfirmDialog from '../components/ConfirmDialog';

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
	stateToProps,
	actionsToProps
)(ConfirmDialog);

