import React, { Component, PropTypes } from 'react';

export default class ListDetails extends Component {

constructor(props){
  super(props);
}

render() {
  const { list, tasks } = this.props;
  return(
    <div className="row">
      <div className="col-md-12">
        {list.title}
      </div>

      <ul>
        {
          tasks.map( (task, index) => <li key={index}> {task.title} </li>)
        }
      </ul>
    </div>
  );
}


}


ListDetails.propTypes = {
  list: PropTypes.object.isRequired,
  tasks: PropTypes.array,
  onAddTask: PropTypes.func.isRequired,
  onRemoveTask: PropTypes.func.isRequired,
  onEditTask: PropTypes.func.isRequired,
  onRemoveList: PropTypes.func.isRequired,
  onEditList: PropTypes.func.isRequired
};
