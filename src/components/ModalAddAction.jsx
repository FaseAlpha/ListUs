import { Dialog, DatePicker, TimePicker } from 'material-ui';
import React, { Component } from 'react';


export default class ModalAddAction extends Component {

constructor(props){
  super(props);
    this.state = {
      modal:false
    };
  }

  showDialog(e){
    this.refs.dialog.show();
  }

  closeDialog(){
    this.refs.dialog.dismiss();
  }

  handleOnClickTime(e){
    e.stopPropagation;
    this.refs.time.openDialog();
  }

  handleOnClickDate(e){
    e.stopPropagation;
    this.refs.date.openDialog();
  }


  render() {
    let standardActions = [
      { text: 'Cancel' },
      { text: 'Submit', onTouchTap: this._onDialogSubmit, ref: 'submit' }
    ];
    return(

      <div>
        <Dialog ref="dialog" title="Dialog With Standard Actions" actions={standardActions} actionFocus="submit" modal={this.state.modal}>
          <DatePicker ref="date" hintText="Date" onClick={e => this.handleOnClickDate(e)}/>
          <TimePicker ref="time" onClick={e => this.handleOnClickTime(e)} onDismiss={e => this.handleDismissTime(e) }format="24hr" hintText="Time" />
        </Dialog>
         <button onClick={ e => this.showDialog(e)} className="btn btn-danger"><span className="glyphicon glyphicon-plus" /></button>
      </div>
    );
  }
}
