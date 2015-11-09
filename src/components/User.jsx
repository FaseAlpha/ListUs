import React, { Component, PropTypes } from 'react';
import ListHolder from './ListHolder';
import IntroduceConfirmDialog from '../containers/IntroduceConfirmDialog';

export default class User extends Component{

  
  constructor(props) {
    super(props);
  }

  /*handleAddList(e){
    e.preventDefault();
    const { onAddList } = this.props;
    const titleToAdd = (this.refs.titleToAdd.value).trim();
    const dateToAdd = (this.refs.day.value+'/'+this.refs.month.value+'/'+this.refs.year.value).trim();
    onAddList(titleToAdd, dateToAdd);
    this.refs.addListInput.style.display='none';
    this.refs.buttonAddList.style.display='inherit';
    this.resetInputs();
  }

  handleCancelAddList(e){
    e.preventDefault();
    this.resetInputs();
    this.refs.addListInput.style.display='none';
    this.refs.buttonAddList.style.display='inherit';
  }

  handleOnClick(e){
    e.preventDefault();
    this.refs.addListInput.style.display='inherit';
    this.refs.buttonAddList.style.display='none';
  }*/

  handleAddList(e){
    e.preventDefault();
    this.refs.dialog.show();
  }

  handleOnClick(e){
    e.preventDefault();
    this.refs.dialog.show();

  }

 /*resetInputs(){
    this.refs.titleToAdd.value='';
    this.refs.day.value='';
    this.refs.month.value='';
    this.refs.year.value='';
  }*/

  
  render(){
    return (
      <div>
        <div className="header">
          <div><a href="" className="btn btn-warning">---</a></div>
          <div><img id="avatar" src={"http://vignette4.wikia.nocookie.net/zelda/images/e/e6/Trifuerza.png/revision/latest?cb=20130331185756&path-prefix=es"} alt="Perfil" /></div>
          <div></div>
        </div>
        <ListHolder lists={this.props.lists} onRemoveList={this.props.onRemoveList}/>
        <br/>
        <IntroduceConfirmDialog />
      </div>
    );
  }
}

User.propTypes = {
  // Injected by React RouterConfirmDialog
  lists: PropTypes.array

};

      /*

        <div className="footer" ref="buttonAddList"><a href="" className="btn btn-danger" onClick={e => this.handleOnClick(e)}>+</a></div>
      

      <div ref="addListInput" style={{display: 'none'}}>
            Título: <input ref="titleToAdd" />
            Fecha: <input ref="day" size="1" maxLength="2"/>/<input ref="month" size="1"  maxLength="2"/>/<input ref="year" size="2"  maxLength="4"/>
            <a href="" className="glyphicon glyphicon-ok-sign" onClick={e => this.handleAddList(e)}/>
            <a href="" className="glyphicon glyphicon-remove-sign" onClick={e => this.handleCancelAddList(e)}/>
        </div>*/

