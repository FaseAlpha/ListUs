import React from 'react';

import { connect } from 'react-redux';

class Friends extends React.Component {
	render() {
		return (
			<footer className='article row'>
     			<div className="col-xs-12">
     				<h3>Friends management</h3>
      		</div>
      </footer>
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
)(Friends);
