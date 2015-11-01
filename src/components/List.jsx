import React, { Component, PropTypes } from 'react';

export class List extends React.Component {
	render() {
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
}

List.propTypes = {
  name: PropTypes.string.isRequired,
  undoTasks: PropTypes.number
};