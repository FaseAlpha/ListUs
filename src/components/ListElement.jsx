import React, { Component, PropTypes} from 'react';

export default class ListElement extends Component{
	/*constructor(props){
		super();
	}*/

  render(){
    return (
      <div className="btn btn-info">
        <span key={this.props.element.id}>{this.props.element.title}</span>
        <span>{this.props.element.date}</span>
      </div>
    );
  }
}


ListElement.propTypes = {
  // Injected by React RouterConfirmDialog
  children: PropTypes.node
};

ListElement.propTypes = {
  element: PropTypes.Object
};