import React from 'react';

import { connect } from 'react-redux';

import { Link } from 'react-router';

import Nav from './Nav';

class Header extends React.Component {
	render() {
		return (
			<header className='header'>
		        <div className="row upper">
		          <div className="col-xs-2"></div>
		          <div className="col-xs-1">
		          	<span className="biggerGlyphicon glyphicon glyphicon-search" aria-hidden="true"></span>
		          </div>
		          <div className="col-xs-6"></div>
		          <div className="col-xs-1">
		          	<span className="biggerGlyphicon glyphicon glyphicon-calendar" aria-hidden="true"></span>
		          </div>
		          <div className="col-xs-2"></div>
		      	</div>
		        
		        <Link to='/list'><img className='image' src={"https://facebook.github.io/react/img/logo.svg"}/></Link>	       
		        <h4>ListUs</h4>
		     
		      <Nav />
		    </header>			
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
)(Header);
