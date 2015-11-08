 import { DISPLAY_CALENDAR } from '../actions';

 function displayCalendar(state, isDisplay){
   return Object.assign({}, state, {display: isDisplay});
 }

 export default function calendarReducer(state = {}, action){
   switch (action.type) {
     case DISPLAY_CALENDAR:
        return displayCalendar(state, action.display);
     default:
        return state;
   }
 }
