import React, { Component, PropTypes} from 'react';
import { arrayPositionByObjectKey, lastStringOfUrl } from '../utils/functions';
import { Dialog, FlatButton } from 'material-ui';
import getID from '../utils';


const idList = lastStringOfUrl();
export default class ListTasks extends Component{
	constructor(props){
		super(props);
	}

	handleClickExpand(e){
		e.preventDefault();
		//this.className.taskContent.map(element => element.style.display='inherit');
	}

	handleClickAddTask(e){
		e.preventDefault();
		const task = {
			idTask: getID(),
			title: this.refs.title.value,
			content: this.refs.content.value
		};
		this.props.onAddTask(idList, task);
		this.refs.dialogAdd.dismiss();
	}

	handleClickRemoveTask(e, idTask){
		e.preventDefault();
		this.props.onRemoveTask(idList, idTask);
	}

	handleClickShowDialog(e){
		e.preventDefault();
		this.refs.dialogAdd.show();
	}

	handleClickDismissDialog(e){
		e.preventDefault();
		this.refs.dialogAdd.dismiss();
	}




	render(){
		const position = arrayPositionByObjectKey('id', idList, this.props.lists);
		const title = (position !== -1)
						?this.props.lists[position]['title']
						:'No hay tareas.';

		const taskElement = (position !== -1)?this.props.tasks[position]: {};
		const tasks = (taskElement !== null)?taskElement.map(function(task){
					return (
						<div>
							<a key={task['idTask']} href ="" className="btn btn-block" onClick={(e) => this.handleClickExpand(e)}>
								{task['title']}
								<p className="glyphicon glyphicon-remove-circle"></p>
								<p className="glyphicon glyphicon-remove-circle" onClick={e => this.handleClickRemoveTask(e, task['idTask'])}></p>
							</a>
							<p className="taskContent">{task['content']}</p>
						</div>
					);
				}.bind(this))
						:'No hay tareas';

		/*******************/
		const customActions = [
			<FlatButton label="Cancel" secondary onClick={e=>this.handleClickDismissDialog(e)} />,
			<FlatButton label="Submit" primary onClick={e=>this.handleClickAddTask(e)} />
		];
		var injectTapEventPlugin = require("react-tap-event-plugin");
		injectTapEventPlugin();

		return (
			<div>
				<h1>{title}</h1>
				{tasks}
				<Dialog ref="dialogAdd" title="Añadir tarea" actions={customActions}>
					<p>Título: <input ref="title" /></p>
					<p>Contenido: </p>
					<textarea ref="content"></textarea>
				</Dialog>
				<a href="" className="btn btn-danger" onClick={e=>this.handleClickShowDialog(e)}>+</a>
			</div>
		);
	}

}

ListTasks.PropTypes= {
	lists: PropTypes.array,
	tasks: PropTypes.object
};