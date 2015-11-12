import { connect } from 'react-redux';
import { addFriend, removeFriend } from '../actions';

function mapStateToProps(state){
  return {friend: state.friend};
}

function mapActionsToProps(dispatch){
  return{
    onAddFriend: name => dispatch(addFriend(name)),
    onRemoveFriend: id => dispatch(removeFriend(id))
  };
}

export default connect(
  mapStateToProps,
  mapActionsToProps
)();
