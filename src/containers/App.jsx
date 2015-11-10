import React, { Component, PropTypes } from 'react';
import HeaderContainer from './HeaderContainer';
import NavContainer from './NavContainer';
import ArticleContainer from './ArticleContainer';
import FooterContainer from './FooterContainer';

export default class App extends Component {

  render() {

    let divStyle = this.props.children ? 'none' : '';
    return (
      <div>
        
        <div style={{display: divStyle}}>
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