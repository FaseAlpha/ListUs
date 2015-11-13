import React, { Component, PropTypes } from 'react';


export default class Header extends Component{

  constructor(props){
    super(props);
  }

  handleOnClickAsideVisibility(){
    const { asideVisibility, onDisplayAside } = this.props;
    asideVisibility.display ? onDisplayAside(false) : onDisplayAside(true);
  }

  render() {

    return(

      <div className="row header">
        <div className="col-md-2">
          <button className="btn btn-menu" onClick={ () => this.handleOnClickAsideVisibility()} > <span className=" glyphicon glyphicon-menu-hamburger " /> </button>
        </div>
        <div className="col-md-8">
          <h1> ListUs </h1>
        </div>
        <div className="col-md-2">
          <button> <span className="glyphicon glyphicon-calendar" /> </button>
        </div>
      </div>
    );
  }

}

Header.propTypes = {
  asideVisibility: PropTypes.object,
  onDisplayAside: PropTypes.func.isRequired
};

Header.defaultProps = {
  asideVisibility : {}
};
