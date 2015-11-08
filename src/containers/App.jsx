import React, { Component, PropTypes } from 'react';
//import { Link } from 'react-router';
import HeaderContainer from './HeaderContainer';
import SectionContainer from './SectionContainer.jsx';

export default class App extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>

        <div className="row">
          <div className="col-md-12">
              <HeaderContainer />
          </div>
          <div className="col-md-12">
            <SectionContainer />
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
