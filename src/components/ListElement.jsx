import React, { Component, PropTypes} from 'react';

export default class ListElement extends Component{
  /*constructor(props){
    super();
  }*/

  render(){
    const { element } = this.props;
    return (
      <div className="btn btn-info">
        <span key={element.id}>{element.title}</span>
        <span>{element.date}</span>
      </div>
    );
  }
}


ListElement.propTypes = {
  // Injected by React RouterConfirmDialog
  children: PropTypes.node,
  element: PropTypes.object
};
