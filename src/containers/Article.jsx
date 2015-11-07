import React from 'react';
import { connect } from 'react-redux';

import ListManager from '../components/ListManager';
import { addList } from '../actions';


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
  	list: state.list
  };
}

function mapActionsToProps(dispatch) {
  return {
  	addListItem: title => dispatch(addList(title))
  };
}

export default connect(
	mapActionsToProps,
	mapStateToProps
)(ListManager);
