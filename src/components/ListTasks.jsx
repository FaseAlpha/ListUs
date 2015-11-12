import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

export default class ListTasks extends Component {

  constructor(props) {
    super(props);
  }



  render() {
    const { list } = this.props;
    return (
      <div className='listHeader'>
        <h2>You are in {list.title}</h2>
        <Link to='/'>Volver</Link>
      </div>
    );
  }
}

ListTasks.propTypes = {
  list: PropTypes.object.isRequired
};
