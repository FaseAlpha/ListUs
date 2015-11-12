import React from 'react';
import { connect } from 'react-redux';

import Article from '../components/Article';
import { addList, removeList, removeAllLists } from '../actions';

function mapStateToProps(state) {
  
  return {
  	list: state.list,
    task: state.task
  };
}

function mapActionsToProps(dispatch) {
  return {
  	addListItem: title => dispatch(addList(title)),
  	removeListItem: idList => dispatch(removeList(idList)),
  	deleteAllLists: list => dispatch(removeAllLists(list))
  };
}

export default connect(
	mapStateToProps,
	mapActionsToProps
)(Article);
