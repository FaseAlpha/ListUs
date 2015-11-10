
import { connect } from 'react-redux';
import { addTask, removeTask, editTask, removeList, editList } from '../actions';
import ListDetails from '../components/ListDetails';


function mapStateToProps(state){
    const idList = state.router.params.idList;
    const list = state.lists.reduce( (listas, list) => list.id===idList ?  list : listas, {});
    const tasks = Object.values(state.tasks).filter( task => task.idList === idList );
    return{list, tasks};
}

function mapActionsToProps(dispatch){
  return {
    onAddTask: (idList, title) => dispatch(addTask(idList, title)),
    onRemoveTask: id => dispatch(removeTask(id)),
    onEditTask: (id, title) => dispatch(editTask(id, title)),
    onRemoveList: id => dispatch(removeList(id)),
    onEditList: (id, title) => dispatch(editList(id, title))
  };
}

export default connect(
  mapStateToProps,
  mapActionsToProps
)(ListDetails);
