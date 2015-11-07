import React from 'react';
import { connect } from 'react-redux';

import ListManager from '../components/ListManager';


class Article extends React.Component {
	render() {
		return (
			<article className='article row'>
    			<div className="col-xs-12">
    				<ListManager />
    				
       		</div>
      </article>
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
)(Article);
