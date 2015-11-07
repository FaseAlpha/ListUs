import React, { Component, PropTypes } from 'react';

export default class Lists extends Component {

  constructor(props){
    super(props);
  }

  render() {
    const {lists} = this.props;
    return(
    <div>
      <ul>
        <li> swd </li>
        {
          lists.map( (list, index) => <li key={index}> {list.title} </li> )
        }
      </ul>
    </div>
    );
  }
}

Lists.propTypes = {
  lists: PropTypes.array
};

Lists.defaultProps = {
  lists: []
};
