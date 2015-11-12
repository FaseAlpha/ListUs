import {ADD_COMMENT, REMOVE_COMMENTS } from '../actions';


function addComment(state, idList, user, date, msg){
  const arrayComents = state[idList] === undefined ? [] : state[idList];
  const newArray = arrayComents.concat({ idList, user, date, msg});
  return Object.assign( {}, state, {[idList]:newArray});
}

function removeComments(state, idList){
  return Object.keys(state).reduce( (keysComments, keyComment) =>  keyComment===idList ? keysComments : Object.assign( keysComments, { [keyComment]: Object.values(keyComment)} ), {});
}


export default function reduceComment( state={}, action ){

  switch (action.type) {
    case ADD_COMMENT:
      return addComment(state, action.idList, action.user, action.date, action.msg);
    case REMOVE_COMMENTS:
      return removeComments(state, action.idList);
    default:
      return state;
  }
}
