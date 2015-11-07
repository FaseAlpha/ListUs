import configureStore from '../store';
import list from './examples';
import { setList } from '../actions';

export default function init() {
  const store = configureStore();
  store.dispatch(setList(list));
  return store;
}