import React from 'react';

import { connect } from 'react-redux';

class Nav extends React.Component {
	render() {
		return (
			<nav className='nav row'>
      	<div className="col-xs-12">
    		</div>
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

