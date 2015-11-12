import React, { Component, PropTypes } from 'react';
import HeaderContainer from './HeaderContainer';
import NavContainer from './NavContainer';
import ArticleContainer from './ArticleContainer';
import FooterContainer from './FooterContainer';

export default class App extends Component {

  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div>
        
        <div>
          <HeaderContainer />
          <NavContainer />
          {this.props.children}
          <FooterContainer />
        </div>
        
       
      </div>
    );
  }
}

App.propTypes = {
  // Injected by React Router
  children: PropTypes.node
};