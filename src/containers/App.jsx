import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

export default class App extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Main/>
    );
  }
}

var Main = React.createClass({ 
  render: function(){
    return (
      <div className='main'>
          <Header/>
          <Nav/>
          <Article/>
          <Footer/>
      </div>
    );
  }
});

var Header = React.createClass({
  render() {
    return (
      <header className='header row'>
      <div className="col-xs-12">
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

        <img className='image' src={"https://facebook.github.io/react/img/logo.svg"}/>
        
        <h4>ListUs</h4>
      </div>
      </header>
    );
  }
});

var Nav = React.createClass({
  render: function(){
    return (
      <nav className='nav row'>
      <div className="col-xs-12">
      </div>
      </nav>
    );
  }
});

var Article = React.createClass({
  render: function(){
    return (
      <article className='article row'>
      <div className="col-xs-12">

        <List name='Lista 1' undoTasks={15}/>
        <List name='Lista 2' undoTasks={3}/>
      </div>
      </article>
    );
  }
});

var List = React.createClass({
  render: function() {
    return (
      <div className="list row">
        <div className="col-xs-1"></div>
        <div className="col-xs-3">{this.props.name}</div>
        <div className="col-xs-6"></div>
        <div className="col-xs-1"><span className='badgeList badge'>{this.props.undoTasks}</span></div>
        <div className="col-xs-1"></div>
      </div>
    );
  }
});

var Footer = React.createClass({
  render: function(){
    return (
      <footer className='footer row'>
      <div className="col-xs-12">
      </div>
      </footer>
    );
  }
});



App.propTypes = {
  // Injected by React Router
  children: PropTypes.node
};