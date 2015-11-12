import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

export default class ListMain extends Component {

  constructor(props) {
    super(props);
  }

  addTask() {
    const { list, addTask } = this.props;
    const node = this.refs.title;
    const title =  node.value.trim();

    addTask(list.id, title);
    node.value = '';
  }


  render() {
    const { entries } = this.props;
    return (
      <div className="article">
        <ul className="nav nav-pills nav-stacked navMarginTop">
          {
            entries.map( (entry, index) => <li role='presentation' key={index}><a href='#'>{entry.title}</a></li> )
          }
        </ul>
          <div className="input-group">
            <input type="text" className="form-control" placeholder="Entry Title" ref="title"/>
            <span className="input-group-btn">
              <button className="btn btn-info" type="button" onClick={e => this.addTask(e)}>Add Entry</button>
            </span>
          </div>
       
      </div>
    );
  }
}

ListMain.propTypes = {
  list: PropTypes.object.isRequired,
  entries: PropTypes.array,
  addTask: PropTypes.func.isRequired
};

ListMain.defaultProps = { 
  entries: []
};