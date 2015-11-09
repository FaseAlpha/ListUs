import React, { Component, PropTypes } from 'react';
import List from '../components/List';
import ModalAddAction from './ModalAddAction';

export default class Section extends Component {

  constructor(props){
    super(props);
  }

  render() {
    const {  lists, asideVisibility, onEditList, onRemoveList, onAddList } = this.props;
    return(
      <div className="row section">
        <ModalAddAction onAddList={ onAddList } />


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
              lists.map( (list, index) => <List list={list} key={index} onRemoveList={onRemoveList} onEditList={onEditList}/> )
            }
          </ul>
          

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
