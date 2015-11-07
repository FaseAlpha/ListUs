import React, { Component, PropTypes } from 'react';


export default class List extends React.Component {

  constructor(props) {
    super(props);
  }

	render() {
		return (
			<div className="list row">
       			<div className="col-xs-1"></div>
        		<div className="col-xs-3">{this.props.title}</div>
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
  id: PropTypes.number,
  children: PropTypes.element.isRequired
};

List.defaultProps = {
  title: 'Lista por defecto',
  undoTasks: 2
}