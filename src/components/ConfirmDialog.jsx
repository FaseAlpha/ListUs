import React, { Component } from 'react';
import { Dialog, FlatButton } from 'material-ui';

export default class ConfirmDialog extends Component {

	handleClickShowDialog(e){
		e.preventDefault();
		this.refs.dialog.show();
	}

	handleClickDismissDialog(e){
		e.preventDefault();
		this.refs.dialog.dismiss();
	}

	handleAddList(e){
		e.preventDefault();
		const title = this.refs.title.value;
		const date = this.refs.day.value+'/'+this.refs.month.value+'/'+this.refs.year.value;
		this.props.onAddList(title, date);
		this.refs.dialog.dismiss();
	}


	render(){
		const customActions = [
			<FlatButton label="Cancel" secondary onClick={e=>this.handleClickDismissDialog(e)} />,
			<FlatButton label="Submit" primary onClick={e=>this.handleAddList(e)} />
		];

		return (
			<div>

			<Dialog ref="dialog" title='Añade una lista' actions={customActions}>
				<div>
					<p>Título: <input ref="title" /></p>
					<p>Fecha: 
						<input ref="day" size="1" />
						<input ref="month" size="1" />
						<input ref="year" size="2" />
					</p>
				</div>
			</Dialog>
			<a href="" className="btn btn-danger" onClick={e=>this.handleClickShowDialog(e)}>+</a>
			</div>
		);
	}

}