import React, { Component, PropTypes } from 'react';

import { list } from '../utils/examples';
import List from './List';

export default class ListManager extends React.Component {

  constructor(props) {
    super(props);
  }

	render() {
		return (
			<div>
       	{
          list.map( (list, index) => <List key={index} title={list.title} undoTasks={list.undoTasks}/>)
        }
     	</div>	
		);
	}
}

ListManager.propTypes = {
  list: PropTypes.array
};

ListManager.defaultProps = {
  list: []
}