import React, { Component, PropTypes} from 'react';

export default class ListElement extends Component{
  constructor(props){
    super();
  }

  handleClickRemoveList(e){
    e.preventDefault();
    this.props.onRemoveList(this.props.element.id);
  }

  render(){
    const { element } = this.props;
    return (
      <div className="btn btn-info">
        <span key={element.id}>{element.title}</span>
        <span>{element.date}</span>
        <span>
          <a href="" className="glyphicon glyphicon-remove-circle" onClick={e => this.handleClickRemoveList(e)}/>
          <a href="" className=""/>
        </span>
      </div>
    );
  }
}


ListElement.propTypes = {
  // Injected by React RouterConfirmDialog
  children: PropTypes.node,
  element: PropTypes.object
};
