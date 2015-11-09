import { setLists }  from '../actions';
import configureStore from '../store';
import  {lists} from './examples';


export default function init() {
  const store = configureStore();
  store.dispatch(setLists(lists));
  return store;
}