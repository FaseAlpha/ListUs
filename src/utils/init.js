import configureStore from '../store';
import { initialState } from './examples';
import { setList } from '../actions';

export default function init() {
  const store = configureStore(initialState);
  return store;
}