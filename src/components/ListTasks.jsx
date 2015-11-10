import React, { Component, PropTypes } from 'react';

export default class ListTasks extends Component {

  constructor(props) {
    super(props);
  }



  render() {
    const { list } = this.props;

    return (
      <div>
        <h2>You are in {entries.title}</h2>
      </div>
    );
  }
}

ListTasks.propTypes = {
  list: PropTypes.object.isRequired
};
