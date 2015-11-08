import React, { Component, PropTypes } from 'react';
import ListHolder from './ListHolder';


/*<ListHolder lists={this.state.lists}/>*/


/*****************************************/



export default class User extends Component{

  
  constructor(props) {
    super(props);
  }

  /*getInitialState(){
    return {
      
    };
  },*/
    
  /*componentDidMount(){
    this.setState({
      lists:Lists,
      photo: Photo,
      menu:Menu
    });
  },*/
  
  render(){
    return (
      <div>
        <div className="header">
          <div><a href="" className="btn btn-warning">---</a></div>
          <div><img id="avatar" src="" alt="Perfil" /></div>
          <div></div>
        </div>
        <ListHolder lists={this.props.lists}/>
        <div className="footer"><a href="" className="btn btn-danger">+</a></div>
      </div>
    );
  }
}

User.propTypes = {
  // Injected by React RouterConfirmDialog
  lists: PropTypes.array

};

