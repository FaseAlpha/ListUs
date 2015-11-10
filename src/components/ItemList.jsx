import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

export default class ItemList extends Component {

  constructor(props){
    super(props);
  }

  render() {
    const { title, id } = this.props;
    return(
      <li className={'list-group-item action-element'} >
        <Link to={`/${list.id}`}>{ list.title }</Link>
      </li>

    );
  }
}

ItemList.propTypes = {
  list: PropTypes.object.isRequired
};
