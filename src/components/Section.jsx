import React, { Component, PropTypes } from 'react';
import List from '../components/List';
import { Dialog } from 'material-ui';

export default class Section extends Component {

  constructor(props){
    super(props);
    this.state = {
      isModal:false
    };
  }


  handleIsModal(){

  }


  handleOnClickButton(e){
    this.setState({ isModal: true});
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
      <div className="row section">


      <Dialog
    title="Dialog With Standard Actions"
    actions={standardActions}
    actionFocus="submit"
    modal={this.state.modal}>
    The actions in this window are created from the json that's passed in.
  </Dialog>

        <span className={ `${ asideVisibility.display ? '' : 'hidden' }`}>
          <div className="aside">
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

           <button onClick={ e => Dialog.isOpen()} className="btn btn-danger"><span className="glyphicon glyphicon-plus" /></button>
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



  let standardActions = [
  { text: 'Cancel' },
  { text: 'Submit', onTouchTap: alert('eee') }
];
