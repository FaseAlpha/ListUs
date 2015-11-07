import React from 'react';

import { connect } from 'react-redux';

class Footer extends React.Component {
	render() {
		return (
			<footer className='footer row'>
     			<div className="col-xs-12">
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
)(Footer);

