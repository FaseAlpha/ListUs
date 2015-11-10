import React, { Component, PropTypes} from 'react';
import { Link } from 'react-router';

export default class ListElement extends Component{
  constructor(props){
    super(props);
  }

  handleClickRemoveList(e){
    e.preventDefault();
    this.props.onRemoveList(this.props.element.id);
  }

  render(){
    const { element } = this.props;
      const url = "/user/"+element.id;

    return (
      <Link to={url}>
      <div className="btn btn-info">
        <span key={element.id}>{element.title}</span>
        <span>{element.date}</span>
        <span>
          <p className="glyphicon glyphicon-remove-circle" onClick={e => this.handleClickRemoveList(e)}/>
        </span>
      </div>
      </Link>
    );
  }
}


ListElement.propTypes = {
  // Injected by React RouterConfirmDialog
  children: PropTypes.node,
  element: PropTypes.object
};
