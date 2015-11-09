import { Dialog } from 'material-ui';
import React, { Component } from 'react';


export default class ModalAddAction extends Component {

constructor(props){
  super(props);
  this.state = {
    modal:false
  };
}

  showDialog(e){
  alert("e");
    Dialog.show();
  };

  closeDialog(){
  Dialog.dismiss();
  };

  //Standard Actions

  render() {
    return(
    <div>
      <button onClick={ (e) => this.showDialog()}>modal</button>
      <Dialog
        title="Dialog With Standard Actions"
        actions={{ text: 'Cancel' },
  { text: 'Submit', onTouchTap: this._onDialogSubmit, ref: 'submit' }}
        actionFocus="submit"
        modal={this.state.modal}>
        The actions in this window are created from the json that's passed in.
      </Dialog>
    </div>);
  }
}
