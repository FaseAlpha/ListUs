import React, { Component, PropTypes } from 'react';
import ListHolder from './ListHolder';

export default class User extends Component{

  
  constructor(props) {
    super(props);
  }

  handleAddList(e){
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
  }


 resetInputs(){
    this.refs.titleToAdd.value='';
    this.refs.day.value='';
    this.refs.month.value='';
    this.refs.year.value='';
  }

  
  render(){
    return (
      <div>
        <div className="header">
          <div><a href="" className="btn btn-warning">---</a></div>
          <div><img id="avatar" src="" alt="Perfil" /></div>
          <div></div>
        </div>
        <ListHolder lists={this.props.lists}/>
        <br/>
        <div ref="addListInput" style={{display: 'none'}}>
            Título: <input ref="titleToAdd" />
            Fecha: <input ref="day" size="1" maxLength="2"/>/<input ref="month" size="1"  maxLength="2"/>/<input ref="year" size="2"  maxLength="4"/>
            <a href="" className="glyphicon glyphicon-ok-sign" onClick={e => this.handleAddList(e)}/>
            <a href="" className="glyphicon glyphicon-remove-sign" onClick={e => this.handleCancelAddList(e)}/>
        </div>
        <div className="footer" ref="buttonAddList"><a href="" className="btn btn-danger" onClick={e => this.handleOnClick(e)}>+</a></div>
      </div>
    );
  }
}

User.propTypes = {
  // Injected by React RouterConfirmDialog
  lists: PropTypes.array

};

