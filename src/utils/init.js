import { setLists }  from '../actions';
import configureStore from '../store';
//import  {lists, tasks} from './examples';
import  {initialState} from './examples';


/*export default function init() {
  const store = configureStore();
  store.dispatch(setLists(lists));
  return store;
}*/

export default function init() {
  const store = configureStore(initialState);
  return store;
}