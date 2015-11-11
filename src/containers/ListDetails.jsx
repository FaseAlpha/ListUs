import React, { Component } from 'react';
import { connect } from 'react-redux';

import ListTasks from '../components/ListTasks';
import ListMain from '../components/ListMain';

import { addTask } from '../actions';

class ListDetails extends Component {

  constructor(props) {
    super(props);
  }

  render() {
  	return (
  		<div>
  			<ListTasks { ...this.props } />
  			<ListMain { ...this.props } />
  		</div>
  	);
  }	
}

function mapStateToProps(state) {
  const list = state.list.filter( list => list.id === state.router.params.idList)[0];
  
  let entries = [];

  for (let key in state.task){
    if(state.task[key].listId === list.id){
      entries = entries.concat(state.task[key]);
    }
  }

  return {
  	list, entries
  };
}

function mapDispatchToProps(dispatch) {
  return {
  	addTask: (listId, title) => dispatch(addTask(listId, title))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListDetails);