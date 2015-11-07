import React, { Component, PropTypes } from 'react';

export default class BoxWithActions extends Component {

  constructor(props){
    super(props);
  }

  handleOnClickRemove(e){
    e.stopPropagation();
    const { onRemoveList, list } = this.props;
    onRemoveList(list.id);
  }

  handleOnClickEdit(e){
    e.stopPropagation();
    const { onEditList, list } = this.props;
    onEditList(list.id, 'kk');
  }
  render() {
    const { list } = this.props;
    return(
        <li key={list.id}>{list.title}<button className="warning" onClick={ e => this.handleOnClickRemove(e) }>remove</button>
        <button className="danger" onClick={ e => this.handleOnClickEdit(e) }>edit</button></li>
    );
  }
}

BoxWithActions.propTypes = {
    list: PropTypes.object.isRequired,
    onRemoveList: PropTypes.func.isRequired,
    onEditList: PropTypes.func.isRequired
};
