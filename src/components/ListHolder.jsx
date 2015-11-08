import React, { Component, PropTypes } from 'react';
import ListElement from './ListElement';

export default class ListHolder extends Component{
  constructor(props){
    super(props);
  }

  render(){
    if(this.props.lists.length === 0){
      return (
        <div>No tiene ninguna lista.</div>
      );
    }
    return (
      <div className="listHolder">
      {this.props.lists.map(function(list){
        return (
          <ListElement element={list}/>
        );
       
      }.bind(this))}
      </div>
    );
    
  }
}

ListHolder.propTypes = {
  // Injected by React RouterConfirmDialog
  children: PropTypes.node
};