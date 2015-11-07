import React, { Component, PropTypes } from 'react';

import List from './List';

export default class Article extends React.Component {

  constructor(props) {
    super(props);
  }

  handleAddListItem() {
    const { addListItem } = this.props;
    const node = this.refs.ListInput;
    const title = node.value;
    addListItem(title);
    console.log(title);
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

  render() {

    const { list } = this.props;
    console.log(list);

    return (
      <div className='article'>
        <div>
          <input type='text' ref='ListInput' />
          <input type='button' className='btn btn-primary' value='Submit' onClick={this.handleAddListItem.bind(this)} />
          <button onClick={this.handleDeleteAllLists.bind(this)} className='pull-right btn btn-danger'>Borrar todas las listas</button>
        </div>
        <div>
          {
            list.map( (list, index) => 
              <List key={index} title={list.title} undoTasks={list.undoTasks}>
                <div>
                  <button onClick={() => this.handleDeleteListItem(list.id)} className='btn btn-danger'>Borrar</button>
                </div>
              </List>)
          }
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
