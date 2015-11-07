import React, { Component, PropTypes } from 'react';
import BoxWithActions from './BoxWithActions';
export default class Lists extends Component {

  constructor(props){
    super(props);
  }

  handleOnClickButton(e){
    e.stopPropagation;
    const { onAddList } = this.props;
    const node = this.refs.title;
    const title = node.value.trim();
    onAddList(title);
  }

  render() {
    const {lists, onRemoveList, onEditList } = this.props;
    return(
    <div>
      <ul>
        <li> Listas </li>
        {
          lists.map( (list, index) => <BoxWithActions key={index} list={list} onEditList={onEditList} onRemoveList={onRemoveList} /> )
        }
      </ul>
      <input type="text" className="form-control" ref="title"/>
      <button onClick={ e => this.handleOnClickButton(e)} className="danger">Add</button>
    </div>
    );
  }
}

Lists.propTypes = {
  lists: PropTypes.array,
  onAddList: PropTypes.func.isRequired,
  onRemoveList: PropTypes.func.isRequired,
  onEditList: PropTypes.func.isRequired
};

Lists.defaultProps = {
  lists: []
};
