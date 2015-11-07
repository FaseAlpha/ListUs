import React, { Component, PropTypes } from 'react';

import { list } from '../utils/examples';
import List from './List';
import InputText from './Input';

export default class ListManager extends React.Component {

  constructor(props) {
    super(props);
  }

  addListItem() {
    const { addListItem } = this.props;
    const node = this.refs.ListInput;
    const title = node.value;
    addListItem(title);
    //console.log(title);
  }

	render() {
		return (
			<div className='article'>
        <div>
          <input type='text' ref='ListInput' />
          <input type='button' className='btn btn-primary' value='Submit' onClick={this.addListItem.bind(this)} />
      
          {/*<InputText addListItem={this.addListItem}/>*/}
        </div>
        <div>
         	{
            list.map( (list, index) => <List key={index} title={list.title} undoTasks={list.undoTasks}/>)
          }
        </div>

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