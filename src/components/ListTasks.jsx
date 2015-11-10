import React, { Component, PropTypes} from 'react';
import { arrayPositionByObjectKey, lastStringOfUrl } from '../utils/functions';

export default class ListTasks extends Component{
	constructor(props){
		super(props);
	}

	render(){
		const idList = lastStringOfUrl();
		const position = arrayPositionByObjectKey('id', idList, this.props.lists);
		const title = (position !== -1)
						?this.props.lists[position]['title']
						:'No hay tareas.';
		const tasks = (position > -1)?this.props.tasks[position].map(function(task){
					return (
						<a href ="" className="btn btn-block">{task['title']}</a>
					);
				}.bind(this))
						:'No hay tareas';
		return (
			<div>
				<h1>{title}</h1>
				{tasks}
			</div>
		);
	}

}

ListTasks.PropTypes= {
	lists: PropTypes.array,
	tasks: PropTypes.object
};