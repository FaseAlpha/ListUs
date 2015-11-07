import React, { Component, PropTypes } from 'react';



export default class InputText extends React.Component {

  constructor(props) {
    super(props);
  }

	render() {
		return (
			<div>
        <input type='text' name={this.props.name} ref='ListInput' />
     	  <input type='button' className='btn btn-primary' value='Submit' onClick={this.props.addListItem.bind(this)} />
      </div>	
		);
	}
}

InputText.PropTypes = {
  name: PropTypes.string.isRequired,
  ref: PropTypes.string,
  addListItem: PropTypes.function
}

