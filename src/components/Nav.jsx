import React from 'react';
import { LeftNav, MenuItem, Paper, Dialog, TextField } from 'material-ui';

import { connect } from 'react-redux';

class Nav extends React.Component {
	
	constructor(props) {
    super(props);  
  }

  componentDidMount(){
  	this.refs.leftNav.close();
  }

  showNav(){
  	this.refs.leftNav.toggle();
  }

  showDialog(){
  	debugger;
  	const nodeDialog = this.refs.dialog;
    nodeDialog.show();
  }

  hideDialog(){
    const nodeDialog = this.refs.dialog;
    nodeDialog.dismiss();
  }

	render() {
		
		const menuItems = [
			{
				type: MenuItem.Types.LINK,
				payload: './account',
				text: 'ListUs'
			},

		  { 
		  	type: MenuItem.Types.SUBHEADER, 
		  	text: 'Grupos' 
		  },
		  {
		     type: MenuItem.Types.LINK,
		     payload: './groups',
		     text: 'Crear grupo'
		  },
		  {
		     type: MenuItem,
		     payload: 'https://www.google.com',
		     text: 'Disabled Link',
		     disabled: true
		  },
		];

		const dialogActions = [
      { text: 'Cancel', onClick: this.hideDialog.bind(this) },
      { text: 'Submit', onClick: e => this.handleAddListItem(e), ref: 'submit' }
    ];

		return (
			<nav className='nav'>
				<button onClick={this.showNav.bind(this)} className='btn btn-default btn-flat'><span ref='span' className='biggerGlyphicon glyphicon glyphicon-menu-hamburger'></span></button>
				<LeftNav ref="leftNav" docked={false} menuItems={menuItems}/>	
				<Dialog ref='dialog' title='Crear Grupo' actions={dialogActions} >
          <TextField ref='InputGroup' floatingLabelText="Título del grupo" /> 
        </Dialog>
			</nav>
		);
	}
}

function mapStateToProps(state) {
  return {
  };
}

function mapActionsToProps(dispatch) {
  return {
  };
}

export default connect(
	mapActionsToProps,
	mapStateToProps
)(Nav);

