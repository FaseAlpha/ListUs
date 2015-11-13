import React, { Component, PropTypes } from 'react';
import List from '../components/List';

export default class Section extends Component {

  constructor(props){
    super(props);
  }

  render() {
    const {  lists, asideVisibility, onEditList, onRemoveList } = this.props;
    return(
      <div className="row section">

        <span className={ `${ asideVisibility.display ? '' : 'hidden' }`}>
          <div className="col-md-6 aside">
            <ul>
              <li>dewfwgw</li>
              <li>few</li>
              <li>fewf</li>
            </ul>
          </div>
        </span>
        
        <div className="col-md-10 ">
          <ul className="list-group">
            {
              lists.map( (list, index) => <List list={list} key={index} onRemoveList={onRemoveList} onEditList={onEditList}/> )
            }
          </ul>
        </div>
        <div className="col-md-2">
        </div>
        <div className="col-md-12 center">
          <button className="btn-round btn-danger"> <span className="glyphicon glyphicon-plus" /> </button>
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
