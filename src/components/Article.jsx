import React, { Component, PropTypes } from 'react';
import { Dialog, TextField, FloatingActionButton, DatePicker, DatePickerDialog } from 'material-ui';

const injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();

import List from './List';

export default class Article extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      disabledBtn: true
    };  
  }

  handleAddListItem() {
    const { addListItem } = this.props;

    const node = this.refs.ListInput;
    const title = node.getValue().trim();
    addListItem(title);

    node.value = '';
    //console.log(this.refs.datePicker.getDate());
    this.refs.dialog.dismiss();

    //console.log(title);
  }

  handleDeleteListItem(idList) {
    const { removeListItem } = this.props;
    removeListItem(idList)
  }

  handleDeleteAllLists(){
    const { list } = this.props;
    const { deleteAllLists } = this.props;
    deleteAllLists(list);
  }

  handleEmptyInput(){
    const node = this.refs.ListInput;
    const title = node.value.trim();  
    
    this.setState({
      disabledBtn: title.length === 0
    });

  }

  showDialog(){
    const nodeDialog = this.refs.dialog;
    nodeDialog.show();
  }

  hideDialog(){
    const nodeDialog = this.refs.dialog;
    nodeDialog.dismiss();
  }
  

  

  

  render() {

    const { list } = this.props;
    //console.log(list);

    let dialogActions = [
      { text: 'Cancel', onClick: this.hideDialog.bind(this) },
      { text: 'Submit', onClick: e => this.handleAddListItem(e), ref: 'submit' }
    ];

    return (
      <div className='article'>

        <div>
          <Dialog ref='dialog' title='Crear Lista' actions={dialogActions} >
            <TextField ref='ListInput' floatingLabelText="Título de la lista" /> 
          </Dialog>
          

        </div>

        <div>
          <button onClick={this.handleDeleteAllLists.bind(this)} className='pull-right btn btn-danger'>Borrar todas las listas</button>
        </div>
        <div>
          {
            list.map( (list, index) => 
              <List key={index} title={list.title} id={list.id} undoTasks={list.undoTasks}>
                <div>
                  <button onClick={() => this.handleDeleteListItem(list.id)} className='btn btn-danger'>Borrar</button>
                </div>
              </List>)
          }
        </div>

        <div className='row-center'>          
          <FloatingActionButton onClick={this.showDialog.bind(this)}>
            <i className='material-ui'>+</i>
          </FloatingActionButton>
        </div>

      </div>  
    );
  }
}

Article.propTypes = {
  list: PropTypes.array,
  addListItem: PropTypes.func.isRequired,
  removeListItem: PropTypes.func.isRequired,
  deleteAllLists: PropTypes.func.isRequired
};

Article.defaultProps = {
  list: []
}
