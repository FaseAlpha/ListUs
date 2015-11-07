import React, { Component, PropTypes } from 'react';
import HeaderContainer from './HeaderContainer';
import NavContainer from './NavContainer';
import ArticleContainer from './ArticleContainer';
import FooterContainer from './FooterContainer';

export default class App extends Component {

  render() {
    return (
      <div>
        <h1>Welcome to my App</h1>
        <div>
          <HeaderContainer />
          <NavContainer />
          <ArticleContainer />
          <FooterContainer />
        </div>
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  // Injected by React Router
  children: PropTypes.node
};