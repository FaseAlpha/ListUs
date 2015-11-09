import React, { Component, PropTypes } from 'react';

export default class List extends Component {

  constructor(props){
    super(props);
    this.state = {
      isModifyList: false
    };
  }

  handleOnClickEdit(e){
    this.setState({ isModifyList: true});
  }

  handleOkClick(e){
    const newTitle = this.refs.title.value;
    const { onEditList, list } = this.props;
    onEditList(list.id, newTitle);
    this.setState({ isModifyList: false});
  }

  handleCancelClick(e){
    this.setState({ isModifyList: false});
  }

  handleOnClickRemove(e){
    const { list, onRemoveList } = this.props;
    onRemoveList(list.id);
  }

  render() {
    const { list } = this.props;
    return(
      <div>
        <span className={ `${ this.state.isModifyList ? 'hidden' : '' }`}>
          <li className="list-group-item action-element" key={list.id}>
            {list.title}
            <button className="btn btn-warning" onClick={(e) => this.handleOnClickEdit(e)} ><span className="glyphicon glyphicon-wrench" /></button>
            <button className="btn btn-danger" onClick={(e) => this.handleOnClickRemove(e)} ><span className="glyphicon glyphicon-remove-sign" /></button>
          </li>
        </span>
        <div className={`input-group ${this.state.isModifyList ? '' : 'hidden'}`}>
            <input className="form-control" ref="title"/>
            <span className="input-group-btn">
              <button className="btn btn-danger" type="button" onClick={e => this.handleCancelClick(e)}><span className="glyphicon glyphicon-remove" /></button>
              <button className="btn btn-success" type="button" onClick={e => this.handleOkClick(e)}><span className="glyphicon glyphicon-ok" /></button>
            </span>
        </div>
      </div>
    );

  }

}


List.propTypes = {
  list: PropTypes.object,
  onRemoveList: PropTypes.func.isRequired,
  onEditList: PropTypes.func.isRequired
};

List.defaultProps = {
  list: {}
};
