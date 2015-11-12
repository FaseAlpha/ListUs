import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

export default class List extends React.Component {

  constructor(props) {
    super(props);
  }

  

	render() {

    let style = 'row list ';

    style += this.props.undoTasks === 0 ? 'listCompleted' : 'listNotCompleted';
    
		return (
      
  		<div className={style}>
       			<div className="col-xs-1"></div>
        		<div className="col-xs-3"><Link to={`list/${this.props.id}`}>{this.props.title}</Link></div>
        		<div className="col-xs-6">{this.props.children}</div>
        		<div className="col-xs-1"><span className='badgeList badge'>{this.props.undoTasks}</span></div>
        		<div className="col-xs-1"></div>
     	</div>	
		);
	}
}

List.propTypes = {
  title: PropTypes.string.isRequired,
  undoTasks: PropTypes.number,
  id: PropTypes.string,
  children: PropTypes.element.isRequired
};

List.defaultProps = {
  title: 'Lista por defecto',
  undoTasks: 2
}