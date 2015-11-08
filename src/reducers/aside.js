import { DISPLAY_ASIDE } from '../actions';



function displayAside(state, isDisplay){
  return Object.assign({}, state, {display: isDisplay});
}


export default function asideReducer(state = {}, action){

  switch (action.type) {
    case DISPLAY_ASIDE:
      return displayAside(state, action.display);
    default:
      return state;
  }
}
