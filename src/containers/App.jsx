import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import Nav from '../components/Nav';


export default class App extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
      	<h1>ListUs</h1>
        <Nav />
      	<div className="row">
        	<div className="col-lg-1">
            <Link to="user">User</Link>
  	    	</div>
  	    	<div className="col-lg-1">
  	    		<Link to="/">App</Link>
  	    	</div>
  	    </div>
  	    {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  // Injected by React RouterConfirmDialog
  children: PropTypes.node
};