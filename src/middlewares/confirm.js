//import { createActionConfirmation } from '../actions';

const confirm = store => next => action =>  next(action);
 
export default confirm;