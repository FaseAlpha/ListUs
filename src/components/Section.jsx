import React, { Component, PropTypes } from 'react';
import List from '../components/List';

export default class Section extends Component {

  constructor(props){
    super(props);
    this.state = { isModify: false };
  }

  handleOnClickButton(e){
    this.setState({ isModify: true});
  }

  handleOkClick(e){
    const newTitle = this.refs.title.value;
    const { onAddList } = this.props;
    onAddList(newTitle);
    this.setState({ isModify: false});
  }

  handleCancelClick(e){
    this.setState({ isModify: false});
  }

  render() {
    const {  lists, asideVisibility, onEditList, onRemoveList } = this.props;
    return(
      <div className="row">
        <span className={ `${ asideVisibility.display ? '' : 'hidden' }`}>
          <div className="col-md-4">
            <ul>
              <li>dewfwgw</li>
              <li>few</li>
              <li>fewf</li>
            </ul>
          </div>
        </span>
        <div className="col-md-8">
          <ul>
            {
              lists.map( (list) => <List list={list} onRemoveList={onRemoveList} onEditList={onEditList}/> )
            }
          </ul>
           <button onClick={ e => this.handleOnClickButton(e)} className="btn btn-danger"><span className="glyphicon glyphicon-plus" /></button>
           <div className={`input-group ${this.state.isModify ? '' : 'hidden'}`}>
               <input className="form-control" ref="title"/>
               <span className="input-group-btn">
                 <button className="btn btn-danger" type="button" onClick={e => this.handleCancelClick(e)}><span className="glyphicon glyphicon-remove" /></button>
                 <button className="btn btn-success" type="button" onClick={e => this.handleOkClick(e)}><span className="glyphicon glyphicon-ok" /></button>
               </span>
           </div>
        </div>
      </div>
    );
  }
}

Section.propTypes = {
  lists: PropTypes.array,
  asideVisibility: PropTypes.object,
  onAddList: PropTypes.func.isRequired,
  onRemoveList: PropTypes.func.isRequired,
  onEditList: PropTypes.func.isRequired
};

Section.defaultProps = {
  asideVisibility: {},
  lists: []
};
