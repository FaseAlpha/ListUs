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
        		<div className="col-xs-6"></div>
        		<div className="col-xs-1"><span className='badgeList badge'>{this.props.undoTasks}</span></div>
        		<div className="col-xs-1"></div>
     	</div>	
		);
	}
}

List.propTypes = {
  title: PropTypes.string.isRequired,
  undoTasks: PropTypes.number
};

List.defaultProps = {
  title: 'Lista por defecto',
  undoTasks: 2
}